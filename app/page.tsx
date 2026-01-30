'use client';

import { useState } from 'react';
import { Sparkles, Gift, Lock, RefreshCw, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const generateLuck = () => {
    setLoading(true);
    // Simulate complex AI calculation + Ad viewing time (3.5s)
    setTimeout(() => {
      setResult({
        number: String(Math.floor(Math.random() * 90) + 10),
        secondary: [Math.floor(Math.random() * 999), Math.floor(Math.random() * 999)],
        desc: "พลังงานดาวศุกร์เคลื่อนย้าย โชคลาภกำลังมาหาคุณ"
      });
      setLoading(false);
    }, 3500);
  };

  return (
    <main className="min-h-screen pt-8 pb-24 px-4 max-w-md mx-auto relative">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mb-2 w-full max-w-[200px]"></div>
        <h1 className="text-4xl font-black text-gold-gradient uppercase tracking-tighter">SIAM AI LOTTO</h1>
        <p className="text-gray-400 text-sm mt-1">ระบบคำนวณหวยด้วยปัญญาประดิษฐ์</p>
      </div>

      {/* Main Card */}
      <div className="glass-card p-6 rounded-3xl relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[50px] rounded-full"></div>

        {!result ? (
          <div className="space-y-6 text-center py-4">
            <div className="w-24 h-24 mx-auto rounded-full bg-black/40 border border-yellow-500/30 flex items-center justify-center relative">
              <Sparkles className="text-yellow-400 w-10 h-10 animate-pulse" />
              <div className="absolute inset-0 border-2 border-yellow-500/20 rounded-full animate-ping opacity-20"></div>
            </div>
            
            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">พร้อมรับโชคหรือยัง?</p>
              <p className="text-xs text-gray-500">ระบบจะวิเคราะห์ดวงดาวและสถิติย้อนหลัง 10 ปี</p>
            </div>

            <button 
              onClick={generateLuck}
              disabled={loading}
              className="w-full btn-premium py-4 rounded-xl text-lg shadow-lg flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="animate-pulse">กำลังสวดมนต์... (AI Processing)</span>
              ) : (
                <>
                  <Gift className="w-5 h-5" />
                  ขอเลขเด็ดงวดนี้ (START)
                </>
              )}
            </button>
            
            {/* Ad Space */}
            <div className="ad-slot h-16 rounded-lg">
              <span className="text-[10px] text-gray-600">SPONSOR AD (320x50)</span>
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <div className="bg-gradient-to-b from-yellow-500/20 to-transparent p-6 rounded-2xl border border-yellow-500/30">
              <p className="text-yellow-200 text-sm font-medium mb-2">เลขนำโชคของคุณ (Main Number)</p>
              <h2 className="text-8xl font-black text-gold-gradient drop-shadow-2xl">
                {result.number}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <p className="text-[10px] text-gray-400">เลขรอง (Secondary)</p>
                <p className="text-xl font-bold text-white">{result.secondary[0]}</p>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 relative overflow-hidden group">
                {/* Viral Lock */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 cursor-pointer">
                  <Lock className="w-4 h-4 text-yellow-500 mb-1" />
                  <span className="text-[9px] text-yellow-500">Share to Unlock</span>
                </div>
                <p className="text-[10px] text-gray-400">เลขลับ (Secret)</p>
                <p className="text-xl font-bold text-white blur-sm">999</p>
              </div>
            </div>

            <p className="text-sm text-gray-300 italic">"{result.desc}"</p>

            <div className="flex gap-3">
              <button 
                onClick={() => setResult(null)}
                className="flex-1 py-3 rounded-xl bg-white/5 text-white text-sm hover:bg-white/10"
              >
                ลองใหม่
              </button>
              <button className="flex-1 py-3 rounded-xl btn-premium text-sm flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                แชร์รับโชค
              </button>
            </div>
            
            {/* Native Ad Space */}
            <div className="ad-slot h-60 rounded-lg">
               <span className="text-[10px] text-gray-600">NATIVE AD (300x250)</span>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
