import DreamForm from '../components/DreamForm';
import HoroscopeGrid from '../components/HoroscopeGrid';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start pt-8 pb-12 px-4 gap-12 overflow-x-hidden">
      
      {/* HEADER & HERO */}
      <header className="text-center space-y-2 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-mystic-gold to-yellow-200 drop-shadow-lg">
          SiamLuckyAI
        </h1>
        <p className="text-purple-200 text-lg md:text-xl">
          ทำนายฝัน & ดูดวง แม่นยำที่สุดด้วย AI
        </p>
      </header>

      {/* TOP AD PLACEHOLDER */}
      <div className="w-full max-w-md h-[100px] bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-sm">
        [Ad Banner Space - Top]
      </div>

      {/* FEATURE 1: DREAM INTERPRETER (MONEY TRAP) */}
      <section className="w-full z-10">
        <DreamForm />
      </section>

      {/* FEATURE 2: HOROSCOPE GRID */}
      <section className="w-full z-10">
        <HoroscopeGrid />
      </section>

      {/* BOTTOM AD PLACEHOLDER */}
      <div className="w-full max-w-md h-[250px] bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-sm">
        [Ad Banner Space - Bottom]
      </div>

      <footer className="text-center text-gray-500 text-xs mt-8">
        © 2024 SiamLuckyAI. เพื่อความบันเทิงเท่านั้น (For entertainment purposes only).
      </footer>

    </main>
  );
}
