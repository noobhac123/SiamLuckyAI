'use client';

import { useState } from 'react';
import { Moon, Search, ArrowRight } from 'lucide-react';

export default function DreamPage() {
  const [dream, setDream] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const interpretDream = () => {
    if(!dream) return;
    setAnalyzing(true);
    // Fake Analysis
    setTimeout(() => {
      setResult(`${Math.floor(Math.random()*9)}${Math.floor(Math.random()*9)}`);
      setAnalyzing(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen pt-10 pb-24 px-4 max-w-md mx-auto">
      <div className="text-center mb-8">
        <Moon className="w-12 h-12 text-purple-400 mx-auto mb-3" />
        <h1 className="text-3xl font-bold text-white">ทำนายฝัน (Dream)</h1>
        <p className="text-gray-400 text-sm">ฝันเห็นอะไร? บอกเรา...เราจะแปลงเป็นตัวเลข</p>
      </div>

      <div className="glass-card p-6 rounded-2xl border-t border-purple-500/30">
        {!result ? (
          <div className="space-y-4">
            <textarea
              value={dream}
              onChange={(e) => setDream(e.target.value)}
              placeholder="เช่น ฝันเห็นงูใหญ่รัดตัว..."
              className="w-full h-32 bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-purple-500 focus:outline-none resize-none placeholder-gray-600"
            />
            
            <button 
              onClick={interpretDream}
              disabled={analyzing || !dream}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)]"
            >
              {analyzing ? (
                <span className="animate-pulse">กำลังถอดรหัสฝัน...</span>
              ) : (
                <>
                  ทำนายเลข (Analyze)
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            
            {/* Ad Space */}
            <div className="ad-slot h-16 rounded-lg mt-4">
              <span className="text-[10px] text-gray-600">AD SPACE</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 animate-in zoom-in">
            <p className="text-gray-400 mb-2">จากความฝันของคุณ ตีเป็นเลขได้ว่า:</p>
            <h2 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-600 drop-shadow-2xl my-6">
              {result}
            </h2>
            <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/20 mb-6">
              <p className="text-purple-200 text-sm">"มีเกณฑ์จะได้รับโชคจากผู้ใหญ่ หรือสิ่งที่มองไม่เห็น"</p>
            </div>
            <button 
              onClick={() => {setResult(null); setDream('');}}
              className="text-gray-400 hover:text-white underline text-sm"
            >
              ทำนายฝันอื่น (Try Another)
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
