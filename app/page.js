'use client';
import { useState } from 'react';

export default function Home() {
  const [dream, setDream] = useState('');
  const [loading, setLoading] = useState(false);

  // Button Logic: Click handler
  const handleAnalyze = () => {
    if (!dream.trim()) {
      alert("กรุณาพิมพ์ความฝันของคุณก่อน! (Please enter a dream first)");
      return;
    }
    setLoading(true);
    
    // Fake loading simulation
    setTimeout(() => {
      setLoading(false);
      alert("ระบบกำลังคำนวณ... (AI Analysis Logic to be added)");
    }, 1500);
  };

  const handleShare = () => {
    alert("Opening LINE Share... (Share Logic)");
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
    // FIX: pb-32 added here to prevent content overlap with fixed button
    <main className="min-h-screen pb-32 p-4 md:p-8 max-w-lg mx-auto relative overflow-hidden bg-[#0f0c29]">
      
      {/* Background Glow Effects - Opacity Increased for Visibility */}
      <div className="fixed top-0 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse-slow pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-64 h-64 bg-yellow-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse-slow pointer-events-none"></div>

      {/* Header Section */}
      <header className="text-center mb-10 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-white drop-shadow-sm mb-2">
          SiamLuckyAI
        </h1>
        <p className="text-gray-300 font-light text-sm md:text-base tracking-wide">
          ทำนายฝัน & ดูดวง แม่นยำที่สุดด้วย AI
          <br/>
          <span className="text-gold-500 text-xs">(Premium Fortune & Lotto Predictions)</span>
        </p>
      </header>

      {/* Ad Space Placeholder */}
      <div className="w-full h-16 bg-black/30 border border-white/5 rounded-lg mb-8 flex items-center justify-center text-xs text-gray-500 uppercase tracking-widest relative z-10">
        [ Premium Ad Space ]
      </div>

      {/* Dream Analysis Card */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-10 relative z-10 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl animate-float">🔮</span>
          <h2 className="text-xl font-semibold text-gold-400">ทำนายฝัน & เลขเด็ด</h2>
        </div>
        
        <p className="text-sm text-gray-300 mb-3">พิมพ์ความฝันของคุณ...</p>
        
        <textarea 
          className="w-full bg-black/40 border border-purple-500/30 rounded-xl p-4 text-white focus:outline-none focus:border-gold-500 transition-colors h-32 resize-none text-sm placeholder:text-gray-500"
          placeholder="เช่น ฝันเห็นงูใหญ่, ฝันว่าฟันหัก..."
          value={dream}
          onChange={(e) => setDream(e.target.value)}
        />
        
        <button 
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full mt-4 bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-600 hover:to-indigo-700 text-white font-medium py-3 rounded-xl shadow-lg shadow-purple-900/50 border border-white/10 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          {loading ? (
            <span>กำลังวิเคราะห์...</span>
          ) : (
            <>
              <span>วิเคราะห์เลขเด็ด (Analyze)</span>
              <span className="text-gold-400">✨</span>
            </>
          )}
        </button>
      </div>

      {/* Horoscope Section */}
      <section className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-gold-400 text-xl">⭐</span>
          <h2 className="text-xl font-bold text-white text-center">ดูดวงรายวัน (Daily Horoscope)</h2>
          <span className="text-gold-400 text-xl">⭐</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {zodiacs.map((z, index) => (
            <div 
              key={index} 
              onClick={() => alert(`ดูดวง: ${z.thai} (Coming Soon)`)}
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

      {/* Share Button (Fixed Bottom) */}
      <div className="fixed bottom-6 left-0 right-0 px-4 z-50 flex justify-center pointer-events-none">
        <button 
          onClick={handleShare}
          className="pointer-events-auto bg-[#06C755] hover:bg-[#05b54d] text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-green-900/50 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 max-w-sm w-full justify-center"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 12c0-5.2-4-9.5-9-9.5S2.5 6.8 2.5 12c0 2.5 1 4.8 2.6 6.5.3.3.3.7.1 1.1-.3 1.1-1 3.8-1 3.9-.1.3.1.6.4.6 2.3 0 4.6-1.5 5.5-2.1.2-.1.5-.2.8-.1 1.1.4 2.2.6 3.4.6 5 0 9-4.3 9-9.5z"/></svg>
          Line แชร์ให้เพื่อน
        </button>
      </div>

    </main>
  );
}
