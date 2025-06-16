// components/layout/Navbar.tsx
"use client";

import { Bell, ChevronDown, LogOut, Settings, User, Search, Menu } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./toggleTheme";
import Item from "./sidebar/item";
import { navItems } from "./sidebar/sidebar";

export default function Navbar() {
  const [userOpen, setUserOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-500  shadow-sm sticky top-0 z-30">
      {/* Search input */}
      <div className="relative w-full max-w-sm hidden md:block">
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        <input
          type="search"
          placeholder="Track order ID, #ref, etc..."
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
        />
      </div>

      {/* Mobile Top Bar + Drawer */}
      <div className="md:hidden flex items-center justify-between space-x-2 py-4 sticky top-0">
        <button onClick={() => setOpen(!open)}>
          <Menu className="w-8 h-8 text-gray-700" />
        </button>
        <h2 className="text-xl font-bold text-blue-600">LogiStack</h2>
      </div>
      {open && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40 p-4 flex flex-col">
            <div className="md:hidden flex items-center space-x-4 py-4 sticky top-0">
                <button onClick={() => setOpen(!open)}>
                <Menu className="w-8 h-8 text-gray-700" />
                </button>
                <h2 className="text-xl font-bold text-blue-600">LogiStack</h2>
            </div>
          <nav className="flex flex-col gap-1 pt-5">
            {navItems.map((item => (
              <Item key={item.href} href={item.href} icon={item.icon} label={item.label} />
            )))}
          </nav>
          <div className="mt-auto border-t pt-4">
            <button className="flex items-center gap-2 text-red-600">
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Right area */}
      <div className="flex items-center gap-6 relative">
        <ThemeToggle />

        {/* Notifications */}
        <div className="relative">
          <button onClick={() => setNotifOpen(!notifOpen)}>
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {notifOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-500 rounded-md shadow-lg z-50 text-sm">
              <div className="p-2 font-semibold border-b">Notifications</div>
              <ul className="divide-y text-gray-700">
                <li className="p-2">🟢 Order #1234 delivered</li>
                <li className="p-2">🔴 Order #1236 delayed</li>
                <li className="p-2">🟡 New driver assigned</li>
              </ul>
            </div>
          )}
        </div>

        {/* User menu */}
        <div className="relative">
          <button
            className="flex items-center gap-1 text-sm text-gray-700"
            onClick={() => setUserOpen(!userOpen)}
          >
            <User className="w-5 h-5" />
            Client
            <ChevronDown className="w-4 h-4" />
          </button>

          {userOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-500  rounded-md shadow-lg z-50 text-sm">
              <li className="p-2 hover:bg-gray-50 flex items-center gap-2 text-red-600">
                  <LogOut className="w-4 h-4" />
                  Logout
              </li>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
