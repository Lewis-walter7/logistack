import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import LoginModal from "./components/modal/LoginModal";
import RegisterModal from "./components/modal/RegisterModal";
import Sidebar from "./components/sidebar/sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <LoginModal />
        <RegisterModal />
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 bg-gray-50 overflow-y-auto">
            <Navbar />
            <div className="p-4">{children}</div>
          </main>
        </div>
        {/* <Sidebar />
        {children} */}
      </body>
    </html>
  );
}
