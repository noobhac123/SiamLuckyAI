
'use client';

import { useState } from 'react';

export default function DreamForm() {
  const [dream, setDream] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [luckyNumbers, setLuckyNumbers] = useState({ two: '', three: '' });

  // Ad Link - Replace with your actual Direct Link or Monetag URL
  const DIRECT_LINK_URL = "https://google.com"; 

  const generateNumbers = (text) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const val = Math.abs(hash);
    const two = String(val % 100).padStart(2, '0');
    const three = String(val % 1000).padStart(3, '0');
    setLuckyNumbers({ two, three });
  };

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!dream.trim()) return;

    setLoading(true);
    setShowResult(false);
    setIsUnlocked(false);

    // Simulate AI Processing
    setTimeout(() => {
      generateNumbers(dream);
      setLoading(false);
      setShowResult(true);
    }, 3000);
  };

  const handleUnlock = () => {
    // 1. Open Ad in New Tab
    window.open(DIRECT_LINK_URL, '_blank');
    // 2. Reveal Content in Current Tab
    setIsUnlocked(true);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl border border-purple-500/30">
      <h2 className="text-2xl font-bold text-center mb-4 text-mystic-gold drop-shadow-md">
        🔮 ทำนายฝัน & เลขเด็ด
      </h2>
      
      <form onSubmit={handleAnalyze} className="space-y-4">
        <div>
          <label className="block text-purple-200 mb-2">พิมพ์ความฝันของคุณ...</label>
          <textarea
            value={dream}
            onChange={(e) => setDream(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/40 border border-purple-400 text-white placeholder-purple-400/50 focus:outline-none focus:ring-2 focus:ring-mystic-gold h-24"
            placeholder="เช่น ฝันเห็นงูใหญ่, ฝันว่าฟันหัก..."
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50 disabled:opacity-50"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              กำลังวิเคราะห์ด้วย AI...
            </span>
          ) : (
            "วิเคราะห์เลขเด็ด (Analyze)"
          )}
        </button>
      </form>

      {/* RESULT SECTION */}
      {showResult && (
        <div className="mt-6 text-center animate-fadeIn">
          <div className="bg-black/50 rounded-lg p-4 border border-mystic-gold/50 relative overflow-hidden">
            
            <h3 className="text-xl text-purple-200 mb-2">เลขนำโชคของคุณ</h3>
            
            {/* BLURRED / REVEALED CONTENT */}
            <div className={`transition-all duration-500 ${isUnlocked ? 'filter-none' : 'blur-md select-none'}`}>
              <div className="flex justify-center gap-8 my-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400">2 ตัวท้าย</span>
                  <span className="text-4xl font-bold text-mystic-gold">{luckyNumbers.two}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400">3 ตัวท้าย</span>
                  <span className="text-4xl font-bold text-mystic-gold">{luckyNumbers.three}</span>
                </div>
              </div>
              <p className="text-green-400 text-sm mt-2">โชคลาภ: 95%</p>
            </div>

            {/* UNLOCK BUTTON OVERLAY */}
            {!isUnlocked && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
                <button
                  onClick={handleUnlock}
                  className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-red-500/50 animate-pulse-fast transform hover:scale-110 transition-all border-2 border-white"
                >
                  🔒 ดูเลขเด็ด (คลิกเพื่อปลดล็อก)
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
