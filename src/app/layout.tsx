import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShelfRadar Dashboard",
  description: "Charts and Graphs using React and AmCharts for ShelfRadar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-gray-800 p-4 text-white flex gap-4">
          {/* <Link href="/">Home</Link>
          <Link href="/about">About</Link> */}
          <Link href="/reactcharts">React-Charts</Link>
          {/* <Link href="/contact">Contact</Link> */}
          <Link href="/amcharts">AmCharts</Link>
          <Link href="/echarts">Echarts</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
