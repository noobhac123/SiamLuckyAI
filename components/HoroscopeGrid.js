'use client';

import { zodiacSigns, getRandomPrediction } from '../data/predictions';

export default function HoroscopeGrid() {
  
  const handleZodiacClick = (signName) => {
    const prediction = getRandomPrediction();
    // Using standard alert for simplicity and mobile compatibility, or a custom modal could be built
    alert(`ดวงของคุณ (${signName}):\n\n${prediction}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-white drop-shadow-md">
        🌟 ดูดวงรายวัน (Daily Horoscope)
      </h2>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {zodiacSigns.map((sign, index) => (
          <button
            key={index}
            onClick={() => handleZodiacClick(sign.name)}
            className="flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 border border-purple-500/20 rounded-xl p-3 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 group"
          >
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">{sign.icon}</span>
            <span className="text-xs sm:text-sm text-purple-200 font-medium">{sign.name}</span>
            <span className="text-[10px] text-gray-500">{sign.dates}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-8 text-center">
         <button className="text-white bg-[#00C300] hover:bg-[#00E000] px-6 py-2 rounded-full font-bold shadow-lg flex items-center justify-center gap-2 mx-auto">
           Line แชร์ให้เพื่อน
         </button>
      </div>
    </div>
  );
}
