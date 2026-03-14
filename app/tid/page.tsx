'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';

export default function TidPage() {
  const [time, setTime] = useState<string>('');
  const [isClocked, setIsClocked] = useState(false);
  const [clockEvents, setClockEvents] = useState<{ time: string; action: string }[]>([
    { time: '09:15', action: 'IN' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClock = (action: 'IN' | 'OUT') => {
    const now = new Date().toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' });
    setClockEvents([...clockEvents, { time: now, action }]);
    setIsClocked(action === 'IN');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 pb-20">
      <header className="bg-orange-600 text-white p-6 sticky top-0 z-10 shadow-lg">
        <h1 className="text-2xl font-bold">Stämpelklocka</h1>
        <p className="text-3xl font-bold font-mono mt-2">{time || '--:--:--'}</p>
      </header>

      <main className="p-6">
        {/* Big Clock Button */}
        <div className="space-y-6">
          <button
            onClick={() => handleClock(isClocked ? 'OUT' : 'IN')}
            className={`w-full py-16 px-6 rounded-2xl shadow-lg active:scale-95 transition-all duration-100 font-bold text-3xl ${
              isClocked
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isClocked ? '👋 STÄMPLA UT' : '👋 STÄMPLA IN'}
          </button>

          {/* Status */}
          <div className={`p-4 rounded-lg text-center font-semibold ${isClocked ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
            {isClocked ? '✓ Du är instämplad' : '◯ Du är utstämplad'}
          </div>

          {/* Event Log */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Idag&#39;s stämpel</h2>
            <div className="space-y-2">
              {clockEvents.map((event, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded border-l-4 border-orange-500">
                  <span className="font-mono text-lg">{event.time}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    event.action === 'IN' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {event.action === 'IN' ? 'IN' : 'UT'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
