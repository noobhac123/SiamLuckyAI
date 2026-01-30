'use client';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [dream, setDream] = useState('');
  const [gameState, setGameState] = useState('IDLE'); // IDLE, RUBBING, REVEALED
  const [rubProgress, setRubProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [dailyColor, setDailyColor] = useState(null);
  const [isUnlocked, setIsUnlocked] = useState(false); // For 3-Digit Lock
  const [tickerItems, setTickerItems] = useState([]);

  // Audio Context Ref
  const audioCtxRef = useRef(null);

  // Initialize Daily Logic & Ticker
  useEffect(() => {
    // 1. Lucky Colors
    const days = [
      { day: 'Sunday', color: 'สีแดง (Red)', code: 'bg-red-500' },
      { day: 'Monday', color: 'สีเหลือง (Yellow)', code: 'bg-yellow-400' },
      { day: 'Tuesday', color: 'สีชมพู (Pink)', code: 'bg-pink-500' },
      { day: 'Wednesday', color: 'สีเขียว (Green)', code: 'bg-green-500' },
      { day: 'Thursday', color: 'สีส้ม (Orange)', code: 'bg-orange-500' },
      { day: 'Friday', color: 'สีฟ้า (Blue)', code: 'bg-blue-400' },
      { day: 'Saturday', color: 'สีม่วง (Purple)', code: 'bg-purple-600' }
    ];
    setDailyColor(days[new Date().getDay()]);

    // 2. Fake Winners Ticker
    const winners = [
      "Somchai จาก Bangkok ถูกรางวัลเลขท้าย 2 ตัว! (Won 2-digits)",
      "Noy จาก Phuket ได้เลขเด็ด 89 จากฝันเห็นงู",
      "Pravit ถูกหวย 3 ตัวตรง! รับโชคก้อนโต",
      "Suda จาก Chiang Mai: 'แม่นมาก! ขอบคุณ AI'",
      "Aom ได้เลขนำโชคสีประจำวัน รวยๆๆ"
    ];
    setTickerItems([...winners, ...winners]); // Duplicate for smooth loop
  }, []);

  // Sound Effect System
  const playSound = (type) => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      if (type === 'rub') {
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(300, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1);
      } else if (type === 'reveal') {
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.5);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1);
      }

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + (type === 'rub' ? 0.1 : 1));
    } catch (e) {
      console.error(e);
    }
  };

  // Logic: Interpret Dream
  const calculateNumbers = (text) => {
    let twoDigit = 'XX';
    let threeDigit = 'XXX';
    // Simple Mapping
    const keywords = [
      { w: 'งู', v: '56' }, { w: 'snake', v: '56' },
      { w: 'ผี', v: '04' }, { w: 'ghost', v: '04' },
      { w: 'ทอง', v: '95' }, { w: 'gold', v: '95' },
      { w: 'รถ', v: '42' }, { w: 'car', v: '42' }
    ];
    const found = keywords.find(k => text.includes(k.w) || text.toLowerCase().includes(k.w));
    
    if (found) {
      twoDigit = found.v;
      threeDigit = found.v + Math.floor(Math.random() * 9);
    } else {
      const hash = text.length * 7 + Math.floor(Math.random() * 100);
      twoDigit = String(hash).slice(-2).padStart(2, '0');
      threeDigit = String(hash * 3).slice(-3).padStart(3, '0');
    }
    return { twoDigit, threeDigit };
  };

  // Step 1: Start Process
  const startAnalysis = () => {
    if (!dream.trim()) {
      alert("กรุณาพิมพ์ความฝันของคุณก่อน! (Please enter dream)");
      return;
    }
    const nums = calculateNumbers(dream);
    setResult(nums);
    setGameState('RUBBING');
    setRubProgress(0);
    setIsUnlocked(false);
  };

  // Step 2: Rubbing Mechanic
  const handleRub = () => {
    if (rubProgress >= 100) return;
    
    const increment = 5; // Speed of filling
    const newProgress = Math.min(rubProgress + increment, 100);
    setRubProgress(newProgress);
    playSound('rub');
    
    if (navigator.vibrate) navigator.vibrate(10);

    if (newProgress >= 100) {
      setTimeout(() => {
        setGameState('REVEALED');
        playSound('reveal');
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
      }, 500);
    }
  };

  // Unlock 3-Digit
  const handleUnlock = () => {
    // Here you would trigger Ad Logic
    const confirm = window.confirm("Watch Ad to unlock the Jackpot Number?");
    if (confirm) {
      setIsUnlocked(true); // Simulate Ad Success
      playSound('reveal');
    }
  };

  const zodiacs = [
    { name: 'Capricorn', thai: 'ราศีมังกร', date: '15 ม.ค. - 12 ก.พ.', icon: '♑' },
    { name: 'Aquarius', thai: 'ราศีกุมภ์', date: '13 ก.พ. - 14 มี.ค.', icon: '♒' },
    { name: 'Pisces', thai: 'ราศีมีน', date: '15 มี.ค. - 12 เม.ย.', icon: '♓' },
    { name: 'Aries', thai: 'ราศีเมษ', date: '13 เม.ย. - 14 พ.ค.', icon: '♈' },
    { name: 'Taurus', thai: 'ราศีพฤษภ', date: '15 พ.ค. - 14 มิ.ย.', icon: '♉' },
    { name: 'Gemini', thai: 'ราศีเมถุน', date: '15 มิ.ย. - 14 ก.ค.', icon: '♊' },
    { name: 'Cancer', thai: 'ราศีกรกฎ', date: '15 ก.ค. - 15 ส.ค.', icon: '♋' },
    { name: 'Leo', thai: 'ราศีสิงห์', date: '16 ส.ค. - 16 ก.ย.', icon: '♌' },
    { name: 'Virgo', thai: 'ราศีกันย์', date: '17 ก.ย. - 16 ต.ค.', icon: '♍' },
    { name: 'Libra', thai: 'ราศีตุลย์', date: '17 ต.ค. - 15 พ.ย.', icon: '♎' },
    { name: 'Scorpio', thai: 'ราศีพิจิก', date: '16 พ.ย. - 15 ธ.ค.', icon: '♏' },
    { name: 'Sagittarius', thai: 'ราศีธนู', date: '16 ธ.ค. - 14 ม.ค.', icon: '♐' },
  ];

  return (
    <main className="min-h-screen pb-32 max-w-lg mx-auto relative overflow-hidden bg-[#0f0c29]">
      
      {/* 1. Live Winners Ticker */}
      <div className="absolute top-0 left-0 right-0 bg-black/60 border-b border-gold-500/30 z-40 overflow-hidden h-8 flex items-center">
        <div className="whitespace-nowrap animate-marquee flex gap-8 px-4 text-[10px] text-gold-400 font-light tracking-wide">
          {tickerItems.map((item, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className="text-white">🔔</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse-slow pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-64 h-64 bg-yellow-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse-slow pointer-events-none"></div>

      <div className="p-4 md:p-8 pt-12">
        {/* Header */}
        <header className="text-center mb-6 relative z-10">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-white drop-shadow-sm mb-1">
            SiamLuckyAI
          </h1>
          <p className="text-gray-300 text-xs tracking-wide">
            ทำนายฝัน & เลขเด็ด (Premium Lotto)
          </p>
        </header>

        {/* Lucky Color */}
        {dailyColor && (
          <div className="flex items-center justify-center gap-2 mb-6 animate-fadeIn">
            <div className={`w-2 h-2 rounded-full ${dailyColor.code} shadow-[0_0_8px_rgba(255,255,255,0.8)]`}></div>
            <p className="text-xs text-gray-300">
              สีมงคลวันนี้: <span className="text-white font-semibold">{dailyColor.color}</span>
            </p>
            <div className={`w-2 h-2 rounded-full ${dailyColor.code} shadow-[0_0_8px_rgba(255,255,255,0.8)]`}></div>
          </div>
        )}

        {/* --- MAIN GAME CARD --- */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-8 relative z-10 shadow-2xl min-h-[300px] flex flex-col justify-center">
          
          {gameState === 'IDLE' && (
            <div className="animate-fadeIn">
               <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl animate-float">🔮</span>
                <h2 className="text-lg font-semibold text-gold-400">เริ่มทำนาย (Start Prediction)</h2>
              </div>
              <textarea 
                className="w-full bg-black/40 border border-purple-500/30 rounded-xl p-4 text-white focus:outline-none focus:border-gold-500 transition-colors h-24 resize-none text-sm placeholder:text-gray-500 mb-4"
                placeholder="พิมพ์ฝันของคุณที่นี่..."
                value={dream}
                onChange={(e) => setDream(e.target.value)}
              />
              <button 
                onClick={startAnalysis}
                className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white font-bold py-3 rounded-xl shadow-lg border border-white/10 active:scale-95 transition-transform"
              >
                วิเคราะห์ (Analyze)
              </button>
            </div>
          )}

          {/* 2. RUBBING MECHANIC (The Hook) */}
          {gameState === 'RUBBING' && (
            <div className="text-center animate-fadeIn flex flex-col items-center">
              <h3 className="text-gold-400 font-bold text-lg mb-2">ถูเพื่อขอพร (Rub to Reveal)</h3>
              <p className="text-gray-400 text-xs mb-4">ใช้นิ้วถูที่ตะเกียงเพื่อให้ตัวเลขปรากฏ</p>
              
              <div 
                className="w-40 h-40 relative cursor-pointer select-none touch-none"
                onMouseMove={handleRub}
                onTouchMove={handleRub}
                onClick={handleRub} // Fallback for tap
              >
                {/* Pot Image / Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-8xl transition-transform active:scale-95 animate-pulse">
                  ⚱️
                </div>
                {/* Fog/Cover Layer */}
                <div 
                  className="absolute inset-0 bg-black/80 rounded-full flex items-center justify-center border-4 border-gold-500/30 backdrop-blur-sm transition-opacity duration-100"
                  style={{ opacity: (100 - rubProgress) / 100 }}
                >
                  <span className="text-gold-400 text-sm font-bold opacity-80">ถูตรงนี้<br/>(Rub Here)</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 h-2 rounded-full mt-6 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-gold-400 to-yellow-600 h-full transition-all duration-100"
                  style={{ width: `${rubProgress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">{Math.floor(rubProgress)}% Power</p>
            </div>
          )}

          {/* 3. RESULT & LOCK LOGIC (The Revenue) */}
          {gameState === 'REVEALED' && result && (
            <div className="animate-fadeIn text-center">
              <div className="mb-6">
                <p className="text-gray-300 text-xs mb-2">✨ เลขท้าย 2 ตัว (Lucky 2-Digits) ✨</p>
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gold-500 to-yellow-700 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-[0_0_20px_rgba(255,215,0,0.3)] animate-bounce">
                  {result.twoDigit}
                </div>
              </div>

              <div className="p-4 bg-black/30 rounded-xl border border-white/10 relative overflow-hidden group">
                 {/* Locked State */}
                 {!isUnlocked ? (
                   <div className="absolute inset-0 backdrop-blur-md bg-black/60 flex flex-col items-center justify-center z-10 p-2">
                     <span className="text-3xl mb-1">🔒</span>
                     <p className="text-white text-xs font-bold mb-2">เลขลับ 3 ตัว (Jackpot)</p>
                     <button 
                       onClick={handleUnlock}
                       className="bg-[#FF0000] hover:bg-red-600 text-white text-xs font-bold py-2 px-4 rounded-full shadow-lg animate-pulse"
                     >
                       ดูโฆษณาเพื่อปลดล็อค (Unlock)
                     </button>
                   </div>
                 ) : null}

                 {/* Content (Blurred if locked) */}
                 <div className={!isUnlocked ? 'filter blur-sm' : ''}>
                    <p className="text-gray-400 text-xs mb-1">เลขท้าย 3 ตัว (Jackpot)</p>
                    <div className="text-3xl font-bold text-purple-400 tracking-widest">
                      {result.threeDigit}
                    </div>
                 </div>
              </div>

              <button 
                onClick={() => { setGameState('IDLE'); setDream(''); }}
                className="mt-6 text-gray-400 text-xs underline hover:text-white"
              >
                ทำนายใหม่ (Try Again)
              </button>
            </div>
          )}
        </div>

        {/* Ad Space */}
        <div className="w-full h-16 bg-black/30 border border-white/5 rounded-lg mb-8 flex items-center justify-center text-xs text-gray-500 uppercase tracking-widest">
          [ Ad Space ]
        </div>

        {/* Horoscope Grid */}
        <div className="grid grid-cols-3 gap-3">
          {zodiacs.map((z, index) => (
            <div 
              key={index} 
              onClick={() => alert(`ดวง ${z.thai}: วันนี้จะได้รับข่าวดี!`)}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 active:scale-95 transition-all"
            >
              <div className="text-xl mb-1">{z.icon}</div>
              <h3 className="text-[10px] font-bold text-gray-100">{z.thai}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Share Button */}
      <div className="fixed bottom-6 left-0 right-0 px-4 z-50 flex justify-center pointer-events-none">
        <button 
          onClick={() => alert('Shared to LINE!')}
          className="pointer-events-auto bg-[#06C755] hover:bg-[#05b54d] text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 transform transition hover:scale-105 active:scale-95"
        >
          <span>Line แชร์ให้เพื่อน</span>
        </button>
      </div>

    </main>
  );
}
