"use client";

import { useState, useEffect } from "react";
import { Sparkles, Brain, Lock, RefreshCw, Star, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState<"en" | "th">("th"); // Default to Thai
  const [input, setInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  // Content Dictionary for Multi-language
  const content = {
    en: {
      title: "SIAM LUCKY AI",
      subtitle: "Unlock Your Destiny with Artificial Intelligence",
      inputPlaceholder: "Describe your dream or feeling...",
      analyzeBtn: "REVEAL LUCKY NUMBER",
      analyzing: "Consulting the Spirits...",
      resultTitle: "YOUR SACRED NUMBERS",
      tip: "Tip: Use this number for the next Thai Government Lottery.",
      features: {
        ai: "AI Dream Analysis",
        secure: "Blockchain Verified",
        accurate: "98% Accuracy Rate"
      }
    },
    th: {
      title: "สยามลัคกี้ AI", // Siam Lucky AI
      subtitle: "ปลดล็อคโชคชะตาของคุณด้วยระบบอัจฉริยะ", // Unlock destiny with AI
      inputPlaceholder: "พิมพ์ความฝัน หรือ ความรู้สึกของคุณ...", // Type dream...
      analyzeBtn: "ดูเลขเด็ด AI", // See AI Lucky Number
      analyzing: "กำลังคำนวณตัวเลข...", // Calculating...
      resultTitle: "เลขมงคลของคุณ", // Your auspicious numbers
      tip: "คำแนะนำ: ใช้เลขนี้สำหรับสลากกินแบ่งรัฐบาลงวดถัดไป", // Tip for Thai gov lottery
      features: {
        ai: "ทำนายฝันด้วย AI",
        secure: "แม่นยำด้วยระบบใหม่",
        accurate: "โอกาสถูกรางวัลสูง"
      }
    }
  };

  const t = content[lang];

  // Logic to simulate AI Prediction
  const handlePrediction = () => {
    if (!input) return;
    
    setIsAnalyzing(true);
    setResult(null);

    // Simulate Network/AI Delay
    setTimeout(() => {
      // Generate "Thai Style" Lucky Numbers (2 digit and 3 digit)
      const num2 = Math.floor(Math.random() * 99).toString().padStart(2, '0');
      const num3 = Math.floor(Math.random() * 999).toString().padStart(3, '0');
      
      setResult(`${num2} - ${num3}`);
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Ambient Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Header / Language Switch */}
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <Sparkles className="text-yellow-500 w-6 h-6 animate-pulse" />
          <span className="font-bold text-xl tracking-wider text-white">SIAM<span className="text-[#D4AF37]">AI</span></span>
        </div>
        <button 
          onClick={() => setLang(lang === "en" ? "th" : "en")}
          className="glass-card px-4 py-2 flex items-center gap-2 text-sm font-semibold hover:bg-white/10 transition"
        >
          <Languages className="w-4 h-4 text-[#D4AF37]" />
          {lang === "en" ? "TH / ไทย" : "EN / English"}
        </button>
      </nav>

      {/* Main Content */}
      <div className="max-w-md w-full z-10 space-y-8 mt-10">
        
        {/* Title Section */}
        <div className="text-center space-y-2">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-gold leading-tight"
          >
            {t.title}
          </motion.h1>
          <p className="text-gray-400 text-lg font-light">{t.subtitle}</p>
        </div>

        {/* Card Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 md:p-8 space-y-6"
        >
          {/* Input Area */}
          <div className="space-y-4">
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.inputPlaceholder}
                className="premium-input w-full h-32 rounded-xl p-4 resize-none text-lg"
              />
              <Star className="absolute top-4 right-4 text-white/20 w-5 h-5" />
            </div>

            {/* Monetag Ad Placeholder (Invisible for now, ready for scripts) */}
            <div id="monetag-ad-block" className="hidden"></div>

            <button
              onClick={handlePrediction}
              disabled={isAnalyzing || !input}
              className={`w-full py-4 rounded-xl text-lg shadow-lg flex items-center justify-center gap-2 ${
                isAnalyzing ? "bg-gray-800 cursor-wait" : "btn-gold cursor-pointer"
              }`}
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="animate-spin w-5 h-5" />
                  {t.analyzing}
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5" />
                  {t.analyzeBtn}
                </>
              )}
            </button>
          </div>

          {/* Result Display */}
          <AnimatePresence>
            {result && !isAnalyzing && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-4 border-t border-white/10 text-center space-y-3"
              >
                <h3 className="text-sm uppercase tracking-widest text-gray-400">{t.resultTitle}</h3>
                <div className="flex justify-center gap-4">
                  {result.split(" - ").map((num, i) => (
                    <div key={i} className="bg-black/40 border border-[#D4AF37]/50 rounded-lg px-6 py-3">
                      <span className="text-4xl font-bold text-gold text-glow">{num}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-green-400/80 mt-2">{t.tip}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4 text-center text-xs text-gray-500">
          <div className="flex flex-col items-center gap-1">
            <Brain className="w-5 h-5 text-purple-500" />
            <span>{t.features.ai}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Lock className="w-5 h-5 text-blue-500" />
            <span>{t.features.secure}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>{t.features.accurate}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-xs text-gray-600">
        © 2024 SiamLuckyAI. Premium Thai Prediction Engine.
      </footer>
    </main>
  );
}
