import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiamLuckyAI - ทำนายดวงชะตาและเลขเด็ด AI",
  description: "AI ทำนายเลขเด็ดและดวงชะตาแม่นๆ สำหรับคนไทย (Thai Lucky Number AI)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        {/* Monitag Ad Script Placement */}
        {/* <script src="//monitag-url..." /> */}
      </head>
      <body className="antialiased selection:bg-yellow-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
