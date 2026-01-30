'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [dream, setDream] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [dailyColor, setDailyColor] = useState(null);

  // Thai Daily Lucky Colors Logic
  useEffect(() => {
    const days = [
      { day: 'Sunday', color: 'สีแดง (Red)', code: 'bg-red-500' },
      { day: 'Monday', color: 'สีเหลือง (Yellow)', code: 'bg-yellow-400' },
      { day: 'Tuesday', color: 'สีชมพู (Pink)', code: 'bg-pink-500' },
      { day: 'Wednesday', color: 'สีเขียว (Green)', code: 'bg-green-500' },
      { day: 'Thursday', color: 'สีส้ม (Orange)', code: 'bg-orange-500' },
      { day: 'Friday', color: 'สีฟ้า (Blue)', code: 'bg-blue-400' },
      { day: 'Saturday', color: 'สีม่วง (Purple)', code: 'bg-purple-600' }
    ];
    const today = new Date().getDay();
    setDailyColor(days[today]);
  }, []);

  // Professional Web Audio API (No external file needed)
  const playMysticSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.5);
      
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch (e) {
      console.log('Audio not supported');
    }
  };

  // Advanced Dream Interpretation Logic
  const interpretDream = (text) => {
    let twoDigit = 'XX';
    let threeDigit = 'XXX';
    
    // Simple Thai keyword mapping (Example)
    const keywords = [
      { word: 'งู', wordEn: 'snake', val: '56' },
      { word: 'ผี', wordEn: 'ghost', val: '04' },
      { word: 'น้ำ', wordEn: 'water', val: '19' },
      { word: 'ทอง', wordEn: 'gold', val: '95' },
      { word: 'รถ', wordEn: 'car', val: '42' },
      { word: 'ตาย', wordEn: 'dead', val: '00' }
    ];

    const found = keywords.find(k => text.includes(k.word) || text.toLowerCase().includes(k.wordEn));
    
    if (found) {
      twoDigit = found.val;
      threeDigit = found.val + Math.floor(Math.random() * 9);
    } else {
      // Random Lucky Algorithm if no keyword found
      const hash = text.length * 7;
      twoDigit = String(hash).slice(-2).padStart(2, '0');
      threeDigit = String(hash * 3).slice(-3).padStart(3, '0');
    }

    return { twoDigit, threeDigit };
  };

  const handleAnalyze = () => {
    if (!dream.trim()) {
      // Error Vibrate
      if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(50);
      alert("กรุณาพิมพ์ความฝันของคุณก่อน! (Please enter a dream first)");
      return;
    }

    // Success Vibrate
    if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate([100, 50, 100]);
    playMysticSound();
    setLoading(true);
    setResult(null);
    
    setTimeout(() => {
      const prediction = interpretDream(dream);
      setResult(prediction);
      setLoading(false);
      playMysticSound(); // Sound on Reveal
    }, 2000);
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
    <main className="min-h-screen pb-32 p-4 md:p-8 max-w-lg mx-auto relative overflow-hidden bg-[#0f0c29]">
      
      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse-slow pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-64 h-64 bg-yellow-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse-slow pointer-events-none"></div>

      {/* Header */}
      <header className="text-center mb-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-white drop-shadow-sm mb-2">
          SiamLuckyAI
        </h1>
        <p className="text-gray-300 font-light text-sm tracking-wide">
          ทำนายฝัน & ดูดวง แม่นยำที่สุดด้วย AI
        </p>
      </header>

      {/* Daily Lucky Color (Dynamic) */}
      {dailyColor && (
        <div className="flex items-center justify-center gap-2 mb-8 animate-fadeIn">
          <div className={`w-3 h-3 rounded-full ${dailyColor.code} shadow-[0_0_10px_rgba(255,255,255,0.8)]`}></div>
          <p className="text-xs text-gray-200">
            สีมงคลวันนี้ (Lucky Color): <span className="font-bold text-white">{dailyColor.color}</span>
          </p>
          <div className={`w-3 h-3 rounded-full ${dailyColor.code} shadow-[0_0_10px_rgba(255,255,255,0.8)]`}></div>
        </div>
      )}

      {/* Ad Space */}
      <div className="w-full h-16 bg-black/30 border border-white/5 rounded-lg mb-8 flex items-center justify-center text-xs text-gray-500 uppercase tracking-widest relative z-10">
        [ Ad Space - High CPM ]
      </div>

      {/* Dream Analysis Card */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-10 relative z-10 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl animate-float">🔮</span>
          <h2 className="text-xl font-semibold text-gold-400">ทำนายฝัน & เลขเด็ด</h2>
        </div>
        
        <textarea 
          className="w-full bg-black/40 border border-purple-500/30 rounded-xl p-4 text-white focus:outline-none focus:border-gold-500 transition-colors h-24 resize-none text-sm placeholder:text-gray-500"
          placeholder="พิมพ์ความฝันของคุณ... (เช่น งู, น้ำ, ทอง)"
          value={dream}
          onChange={(e) => setDream(e.target.value)}
        />
        
        <button 
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full mt-4 bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-600 hover:to-indigo-700 text-white font-medium py-3 rounded-xl shadow-lg border border-white/10 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="animate-pulse">กำลังสวดมนต์... (Calculating)</span>
          ) : (
            <>
              <span>วิเคราะห์เลขเด็ด (Analyze)</span>
              <span className="text-gold-400">✨</span>
            </>
          )}
        </button>

        {/* Result Reveal Section */}
        {result && (
          <div className="mt-6 pt-6 border-t border-white/10 animate-fadeIn">
            <p className="text-center text-gray-300 text-sm mb-4">✨ เลขนำโชคของคุณคือ ✨</p>
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <div className="text-xs text-gold-400 mb-1">2 ตัว (2 Digits)</div>
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-yellow-700 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-yellow-500/20">
                  {result.twoDigit}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gold-400 mb-1">3 ตัว (3 Digits)</div>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-purple-500/20">
                  {result.threeDigit}
                </div>
              </div>
            </div>
            <p className="text-center text-[10px] text-gray-400 mt-4 opacity-70">
              *ผลคำทำนายเป็นความเชื่อส่วนบุคคล (Prediction is a personal belief)
            </p>
          </div>
        )}
      </div>

      {/* Horoscope Section */}
      <section className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-gold-400 text-xl">⭐</span>
          <h2 className="text-xl font-bold text-white text-center">ดูดวงรายวัน</h2>
          <span className="text-gold-400 text-xl">⭐</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {zodiacs.map((z, index) => (
            <div 
              key={index} 
              onClick={() => {
                if (navigator.vibrate) navigator.vibrate(30);
                alert(`ดวงของ ${z.thai} วันนี้: จะมีโชคลาภ!`);
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden hover:bg-white/10 transition-all active:scale-95"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-xl mb-2 shadow-inner border border-white/20">
                {z.icon}
              </div>
              <h3 className="text-xs font-bold text-gray-100">{z.thai}</h3>
              <p className="text-[10px] text-gray-400 text-center leading-tight mt-1">{z.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Share Button */}
      <div className="fixed bottom-6 left-0 right-0 px-4 z-50 flex justify-center pointer-events-none">
        <button 
          onClick={() => alert('แชร์ไปที่ LINE เรียบร้อย! (Share Logic)')}
          className="pointer-events-auto bg-[#06C755] hover:bg-[#05b54d] text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-green-900/50 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 max-w-sm w-full justify-center"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 12c0-5.2-4-9.5-9-9.5S2.5 6.8 2.5 12c0 2.5 1 4.8 2.6 6.5.3.3.3.7.1 1.1-.3 1.1-1 3.8-1 3.9-.1.3.1.6.4.6 2.3 0 4.6-1.5 5.5-2.1.2-.1.5-.2.8-.1 1.1.4 2.2.6 3.4.6 5 0 9-4.3 9-9.5z"/></svg>
          Line แชร์ให้เพื่อน
        </button>
      </div>

    </main>
  );
}
