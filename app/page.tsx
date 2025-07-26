import Image from "next/image";

'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const topics = ['Household issues', 'Jealousy', 'Planning family'];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Боковая панель */}
      <aside className="w-[200px] bg-[#ECECEC] flex flex-col">
        {/* Профиль пользователя */}
        <div className="p-6">
          <div className="w-[60px] h-[60px] bg-gray-400 rounded-full flex items-center justify-center mb-6">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="white"/>
              <path d="M12 14C7.03125 14 3 18.0312 3 23H21C21 18.0312 16.9688 14 12 14Z" fill="white"/>
            </svg>
          </div>
        </div>

        {/* Навигация */}
        <nav className="flex-1 px-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-200 rounded-lg transition-colors">
            <span className="text-xl">💬</span>
            <span className="text-gray-700">Session</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-200 rounded-lg transition-colors">
            <span className="text-xl">☰</span>
            <span className="text-gray-700">Menu</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-200 rounded-lg transition-colors">
            <span className="text-xl">⚙️</span>
            <span className="text-gray-700">Settings</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-200 rounded-lg transition-colors">
            <span className="text-xl">👤</span>
            <span className="text-gray-700">Account</span>
          </button>
        </nav>

        {/* Кнопка выхода */}
        <div className="p-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-200 rounded-lg transition-colors">
            <span className="text-xl">🚪</span>
            <span className="text-gray-700">Log out</span>
          </button>
        </div>
      </aside>

      {/* Основной контент */}
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="w-full max-w-[800px] text-center">
            {/* Логотип Emma */}
            <div className="w-[100px] h-[100px] mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] via-[#4ECDC4] to-[#556270] rounded-full opacity-80 blur-sm"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-[#FF6B6B] via-[#4ECDC4] to-[#556270] rounded-full flex items-center justify-center">
                <div className="w-[70px] h-[70px] bg-white/20 rounded-full"></div>
              </div>
            </div>

            {/* Приветствие */}
            <p className="text-gray-600 text-lg mb-4">
              Welcome, Kseniya and Andrew!
            </p>

            {/* Заголовок */}
            <h1 className="text-[40px] font-bold text-gray-900 mb-4">
              I'm Emma—your relationship coach!
            </h1>

            {/* Подзаголовок */}
            <p className="text-xl text-gray-600 mb-12">
              Let's work through the conflict you're facing right now. Select a topic to begin!
            </p>

            {/* Кнопки тем */}
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-6 py-3 rounded-full border-2 transition-all ${
                    selectedTopic === topic
                      ? 'bg-[#5856D6] text-white border-[#5856D6]'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-[#5856D6]'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* Поле ввода */}
            <div className="relative max-w-[600px] mx-auto mb-16">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your thoughts here..."
                className="w-full px-6 py-4 pr-14 bg-white rounded-full border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#5856D6] transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#5856D6] hover:bg-[#4745B7] rounded-full flex items-center justify-center transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
              </button>
            </div>

            {/* Прогресс */}
            <div className="max-w-[600px] mx-auto">
              <p className="text-sm text-gray-600 mb-3">
                Conflict resolution progress
              </p>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#5856D6] to-[#7C3AED] rounded-full transition-all duration-500"
                  style={{ width: selectedTopic ? '15%' : '0%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}