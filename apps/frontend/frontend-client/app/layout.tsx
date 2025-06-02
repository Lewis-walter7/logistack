import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import LoginModal from "./components/modal/LoginModal";
import RegisterModal from "./components/modal/RegisterModal";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <LoginModal />
        <RegisterModal />
        {children}
      </body>
    </html>
  );
}
