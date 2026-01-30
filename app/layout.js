import './globals.css'
import { Kanit } from 'next/font/google'

// Thai & English compatible premium font
const kanit = Kanit({ 
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-kanit'
})

export const metadata = {
  title: 'SiamLuckyAI - Royal Thai Fortune',
  description: 'AI Generated Lucky Numbers & Horoscope Prediction',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  )
}
