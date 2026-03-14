import { Navigation } from '@/app/components/Navigation';

export default function SchemaPage() {
  const weekDays = [
    { date: 'Mån 17/3', shifts: ['09:00-17:00'] },
    { date: 'Tis 18/3', shifts: ['14:00-22:00'] },
    { date: 'Ons 19/3', shifts: ['09:00-17:00'] },
    { date: 'Tor 20/3', shifts: [] },
    { date: 'Fre 21/3', shifts: ['10:00-18:00'] },
    { date: 'Lör 22/3', shifts: ['12:00-20:00'] },
    { date: 'Sön 23/3', shifts: ['12:00-18:00'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pb-20">
      <header className="bg-indigo-600 text-white p-6 sticky top-0 z-10 shadow-lg">
        <h1 className="text-2xl font-bold">Veckoschema</h1>
        <p className="text-sm text-indigo-100">17 mars - 23 mars 2026</p>
      </header>

      <main className="p-6">
        <div className="space-y-3">
          {weekDays.map((day) => (
            <div key={day.date} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-indigo-500">
              <h3 className="font-semibold text-gray-900 mb-2">{day.date}</h3>
              {day.shifts.length > 0 ? (
                <div className="space-y-2">
                  {day.shifts.map((shift, idx) => (
                    <div key={idx} className="text-sm text-gray-700 bg-indigo-50 p-2 rounded flex justify-between items-center">
                      <span>{shift}</span>
                      <span className="text-xs text-gray-500">Vardagssal</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 italic">Ledigt</p>
              )}
            </div>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
