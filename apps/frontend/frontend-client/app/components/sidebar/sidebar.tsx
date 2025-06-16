// components/layout/Sidebar.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import Item from "./item";
import { Home, Package, PlusCircle, MapPin, User, Settings, Menu, LogOut, Icon } from "lucide-react";


export const navItems = [
  { label: "Dashboard", href: "/", icon: Home },
  { label: "My Orders", href: "/orders", icon: Package },
  { label: "New Order", href: "/orders/new", icon: PlusCircle },
  { label: "Track Order", href: "/track", icon: MapPin },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen bg-white border-r border-gray-400 shadow-sm">
        <h2 className="p-4 text-xl font-bold text-blue-600">LogiStack</h2>
        <nav className="flex flex-col gap-1 px-2">
          {navItems.map((item) => (
            <Item
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </nav>
        <div className="mt-auto p-4 border-t">
          <button className="flex items-center gap-2 text-red-600 hover:text-red-800">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
