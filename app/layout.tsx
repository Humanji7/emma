import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emma - Your Relationship Coach",
  description: "AI-powered relationship coaching assistant",
};

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {/* Временно скрываем сайдбар */}
          {/* <Sidebar /> */}
          
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
