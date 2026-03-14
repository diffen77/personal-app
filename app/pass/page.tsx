'use client';

import { useState } from 'react';
import { Navigation } from '@/app/components/Navigation';

interface Shift {
  id: string;
  date: string;
  time: string;
  location: string;
}

export default function PassPage() {
  const [availableShifts, setAvailableShifts] = useState<Shift[]>([
    { id: '1', date: 'Mån 17/3', time: '06:00-14:00', location: 'Vardagssal' },
    { id: '2', date: 'Tis 18/3', time: '06:00-14:00', location: 'Köket' },
    { id: '3', date: 'Ons 19/3', time: '14:00-22:00', location: 'Vardagssal' },
    { id: '4', date: 'Tor 20/3', time: '09:00-17:00', location: 'Aktivitet' },
    { id: '5', date: 'Fre 21/3', time: '06:00-14:00', location: 'Vardagssal' },
  ]);

  const [takenShifts, setTakenShifts] = useState<string[]>([]);

  const handleTakeShift = (shiftId: string) => {
    setTakenShifts([...takenShifts, shiftId]);
    setAvailableShifts(availableShifts.filter((s) => s.id !== shiftId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-20">
      <header className="bg-purple-600 text-white p-6 sticky top-0 z-10 shadow-lg">
        <h1 className="text-2xl font-bold">Lediga pass</h1>
        <p className="text-sm text-purple-100">{availableShifts.length} pass tillgängliga</p>
      </header>

      <main className="p-6">
        {availableShifts.length > 0 ? (
          <div className="space-y-3">
            {availableShifts.map((shift) => (
              <div key={shift.id} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{shift.date}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-mono">{shift.time}</span> · {shift.location}
                    </p>
                  </div>
                  <button
                    onClick={() => handleTakeShift(shift.id)}
                    className="ml-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg active:scale-95 transition-all"
                  >
                    ✋ Ta pass
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 text-lg">Inga lediga pass för tillfället</p>
          </div>
        )}

        {takenShifts.length > 0 && (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Du har accepterat {takenShifts.length} pass</h3>
            <p className="text-sm text-green-700">Dessa skickas till schemaläggare för godkännande.</p>
          </div>
        )}
      </main>

      <Navigation />
    </div>
  );
}
