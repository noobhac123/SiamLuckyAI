import './globals.css';
import { Kanit } from 'next/font/google';

// Thai Font
const kanit = Kanit({ 
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '600', '800'],
  variable: '--font-kanit'
});

export const metadata = {
  title: 'SiamLuckyAI - ทำนายฝัน เลขเด็ด',
  description: 'ทำนายฝัน ตีเลขเด็ด ดูดวงรายวัน แม่นยำด้วยระบบ AI',
  themeColor: '#0f0c29',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={kanit.variable}>
      <head>
        {/* MONETAG / MULTITAG SCRIPT PLACEHOLDER */}
        {/* Paste your script from Monetag dashboard here */}
        <script dangerouslySetInnerHTML={{ __html: `
          // console.log("Monetag Script Loaded");
        `}} />
      </head>
      <body className="bg-gradient-to-b from-mystic-dark via-mystic-purple to-black min-h-screen text-white font-sans antialiased selection:bg-mystic-gold selection:text-black">
        <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none z-0"></div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
