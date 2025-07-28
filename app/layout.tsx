import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Fugaz_One } from 'next/font/google'
import "./globals.css";
import Image from "next/image";
import bg from "@/public/Picture1.png";


const fugazOne = Fugaz_One({
    weight: ['400'],
    subsets: ['latin'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wind A.I",
  description: "Wind AI application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Image src={bg} height={1500} width={1500} alt={'background'} className="fixed top-0 w-[100vw] h-[100vh] z-10" />
      <div className="bg-[#81D8FC] w-[100vw] h-[100vh]">
        {children}
      </div>
      </body>
    </html>
  );
}
