'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Star, Lock, RefreshCw, Share2 } from 'lucide-react';

// Types
type Prediction = {
  luckyNumber: string;
  luckyColor: string;
  description: string;
  zodiac: string;
};

export default function Home() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Prediction | null>(null);

  // Fake AI Processing logic to simulate "Calculation"
  const handlePredict = () => {
    if (!name || !birthDate) return;

    setLoading(true);
    
    // Simulate API delay / Ad viewing time
    setTimeout(() => {
      // Mock Data Generation (In real app, this could be more complex)
      const mockNumbers = Math.floor(10 + Math.random() * 89);
      const colors = ['สีทอง (Gold)', 'สีแดงมงคล (Red)', 'สีเขียวเหนี่ยวทรัพย์ (Green)', 'สีม่วงมหากาฬ (Purple)'];
      
      setResult({
        luckyNumber: `${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`,
        luckyColor: colors[Math.floor(Math.random() * colors.length)],
        description: "ดวงดาวของคุณกำลังส่องแสง พลังงานบวกกำลังเข้ามา หาจังหวะเสี่ยงโชคในช่วงนี้",
        zodiac: "มังกรทอง (Golden Dragon)"
      });
      setLoading(false);
    }, 3000); // 3 seconds delay for "Ad Exposure" or "Suspense"
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-600 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500 rounded-full blur-[100px] opacity-20"></div>
      </div>

      {/* Main Container */}
      <div className="z-10 w-full max-w-md">
        
        {/* Header Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-black/40 rounded-full border border-yellow-500/30 mb-4 backdrop-blur-md">
            <Sparkles className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
            <span className="text-yellow-400 font-bold tracking-widest text-sm">SIAM LUCKY AI</span>
          </div>
          <h1 className="text-5xl font-extrabold text-gold-gradient mb-2 drop-shadow-lg">
            เลขเด็ด AI
          </h1>
          <p className="text-gray-400 text-lg font-light">
            ทำนายดวงชะตาด้วยระบบอัจฉริยะ
          </p>
        </div>

        {/* Input Card */}
        {!result ? (
          <div className="glass-panel p-8 rounded-3xl border-t border-white/10">
            <div className="space-y-6">
              <div>
                <label className="block text-yellow-500 text-sm mb-2 font-semibold">ชื่อของคุณ (Name)</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="กรอกชื่อ..."
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-yellow-500 text-sm mb-2 font-semibold">วันเกิด (Birth Date)</label>
                <input 
                  type="date" 
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                />
              </div>

              <button 
                onClick={handlePredict}
                disabled={loading || !name || !birthDate}
                className="w-full btn-gold py-4 rounded-xl text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="spinner-gold w-5 h-5 border-2"></div>
                    กำลังคำนวณ...
                  </>
                ) : (
                  <>
                    <Star className="w-5 h-5 fill-black" />
                    ดูเลขเด็ดทันที (Reveal)
                  </>
                )}
              </button>
            </div>
            
            <p className="mt-6 text-xs text-center text-gray-500">
              *AI คำนวณตามหลักโหราศาสตร์สากลและสถิติ (For entertainment only)
            </p>
          </div>
        ) : (
          /* Result Card - The "Viral" Part */
          <div className="glass-panel glass-panel-gold p-8 rounded-3xl relative animate-in fade-in zoom-in duration-500">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black border border-yellow-500 px-6 py-2 rounded-full shadow-lg shadow-yellow-500/20">
              <span className="text-yellow-400 font-bold">ผลทำนายของคุณ</span>
            </div>

            <div className="text-center mt-6 space-y-6">
              <div>
                <p className="text-gray-400 text-sm">เลขนำโชค (Lucky Number)</p>
                <h2 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 drop-shadow-sm mt-2">
                  {result.luckyNumber}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <p className="text-xs text-gray-400 mb-1">สีมงคล</p>
                  <p className="text-yellow-300 font-medium text-sm">{result.luckyColor}</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <p className="text-xs text-gray-400 mb-1">สัตว์ประจำงวด</p>
                  <p className="text-yellow-300 font-medium text-sm">{result.zodiac}</p>
                </div>
              </div>

              <div className="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
                <p className="text-gray-300 text-sm italic">"{result.description}"</p>
              </div>

              <div className="flex gap-3">
                 <button 
                  onClick={() => setResult(null)}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  ลองใหม่
                </button>
                <button className="flex-1 btn-gold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20">
                  <Share2 className="w-4 h-4" />
                  แชร์ (Share)
                </button>
              </div>
            </div>
            
            {/* Ad Placeholder Bottom */}
            <div className="mt-6 w-full h-16 bg-black/40 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden">
               <span className="text-xs text-gray-600">AD SPACE (MONITAG 320x50)</span>
            </div>
          </div>
        )}

        {/* Floating Ticker - Social Proof */}
        <div className="mt-8 bg-black/40 backdrop-blur-sm rounded-full py-2 px-4 border border-white/5 flex items-center gap-3 w-max mx-auto overflow-hidden">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <p className="text-xs text-gray-400 whitespace-nowrap">
            <span className="text-yellow-500 font-bold">Somchai</span> เพิ่งได้รับเลข <span className="text-white">88</span>
          </p>
        </div>

      </div>
    </main>
  );
}
