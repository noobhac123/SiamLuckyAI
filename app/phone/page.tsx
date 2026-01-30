'use client';

import { useState } from 'react';
import { Smartphone, CheckCircle, AlertCircle } from 'lucide-react';

export default function PhonePage() {
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [score, setScore] = useState(0);

  const analyzePhone = () => {
    if(phone.length < 9) return;
    setStatus('loading');
    setTimeout(() => {
      setScore(Math.floor(Math.random() * (100 - 60) + 60)); // Random score 60-100
      setStatus('success');
    }, 2500);
  };

  return (
    <main className="min-h-screen pt-10 pb-24 px-4 max-w-md mx-auto">
      <div className="text-center mb-8">
        <Smartphone className="w-12 h-12 text-green-400 mx-auto mb-3" />
        <h1 className="text-3xl font-bold text-white">วิเคราะห์เบอร์ (Sim)</h1>
        <p className="text-gray-400 text-sm">เบอร์มือถือของคุณ ส่งเสริมความรวยหรือไม่?</p>
      </div>

      <div className="glass-card p-6 rounded-2xl border-t border-green-500/30">
        {status !== 'success' ? (
          <div className="space-y-4">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="08X-XXX-XXXX"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-xl text-center text-white tracking-widest focus:border-green-500 focus:outline-none"
            />
            
            <button 
              onClick={analyzePhone}
              disabled={status === 'loading' || phone.length < 9}
              className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(22,163,74,0.3)] transition-all"
            >
              {status === 'loading' ? 'กำลังตรวจสอบ...' : 'เกรดเบอร์ของคุณ (Check Grade)'}
            </button>
            
             <div className="ad-slot h-60 rounded-lg mt-6">
               <span className="text-[10px] text-gray-600">NATIVE AD (High CPM)</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 animate-in fade-in slide-in-from-bottom-4">
            <div className="mb-4">
              <span className={`text-6xl font-black ${score > 80 ? 'text-green-400' : 'text-yellow-400'}`}>
                {score > 90 ? 'A+' : score > 75 ? 'B+' : 'C'}
              </span>
              <p className="text-gray-400 text-sm mt-2">เกรดเบอร์โทรศัพท์ (Grade)</p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 mb-6 text-left space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-300">ความรัก: {score > 80 ? 'โดดเด่นมาก' : 'ปานกลาง'}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-300">การเงิน: {score > 70 ? 'ไหลมาเทมา' : 'พอใช้'}</span>
              </div>
              {score < 90 && (
                 <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-gray-300">ระวัง: เลขท้ายไม่ค่อยดี</span>
                </div>
              )}
            </div>

            <button 
              onClick={() => {setStatus('idle'); setPhone('');}}
              className="w-full py-3 bg-white/10 rounded-xl text-white hover:bg-white/20"
            >
              เช็คเบอร์อื่น
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
