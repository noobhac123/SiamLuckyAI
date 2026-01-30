import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "SiamLuckyAI - เลขเด็ด & ทำนายดวงสุดแม่น",
  description: "สุดยอด AI ทำนายเลขเด็ด ทำนายฝัน และวิเคราะห์เบอร์มงคล อันดับ 1 ในไทย",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;800&display=swap" rel="stylesheet" />
        {/* MONITAG SCRIPT ZONE */}
        {/* Place your Monitag Direct Link / Push Notification Script Here */}
      </head>
      <body className="antialiased selection:bg-yellow-500 selection:text-black">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
