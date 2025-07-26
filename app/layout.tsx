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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="app-container">
          {/* Боковая панель */}
          <aside className="sidebar">
            <div className="user-profile">
              {/* Аватар пользователя */}
            </div>
            <nav className="menu">
              <button>Session</button>
              <button>Menu</button>
              <button>Settings</button>
              <button>Account</button>
            </nav>
            <button className="logout">Log out</button>
          </aside>
          
          {/* Основной контент */}
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
