'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Moon, Smartphone, User } from 'lucide-react';
import { clsx } from 'clsx';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'หน้าหลัก (Home)', href: '/', icon: Home },
    { name: 'ทำนายฝัน (Dream)', href: '/dream', icon: Moon },
    { name: 'เบอร์มงคล (Sim)', href: '/phone', icon: Smartphone },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 px-4 pb-4 pt-2">
      <div className="glass-card mx-auto max-w-md rounded-2xl flex justify-around items-center py-3 border-t border-yellow-500/20 bg-black/80">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={clsx(
                "flex flex-col items-center gap-1 transition-all duration-300",
                isActive ? "text-yellow-400 scale-110" : "text-gray-500 hover:text-gray-300"
              )}
            >
              <div className={clsx(
                "p-2 rounded-xl transition-all",
                isActive ? "bg-yellow-500/10 shadow-[0_0_15px_rgba(253,216,53,0.3)]" : "bg-transparent"
              )}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className="text-[10px] font-medium">{item.name.split(' ')[0]}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
