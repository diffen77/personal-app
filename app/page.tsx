import { Navigation } from '@/app/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pb-20">
      <header className="bg-emerald-600 text-white p-6 sticky top-0 z-10 shadow-lg">
        <h1 className="text-2xl font-bold">Mitt schema idag</h1>
        <p className="text-sm text-emerald-100">{new Date().toLocaleDateString('sv-SE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </header>

      <main className="p-6">
        <div className="space-y-4">
          {/* Today's shifts */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Idag&#39;s pass</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="font-medium text-gray-900">09:00 - 17:00</p>
                <p className="text-sm text-gray-600">Vardagssal</p>
                <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">INSTÄMPLAD</span>
              </div>
            </div>
          </div>

          {/* Quick Clock In/Out */}
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-8 px-6 rounded-lg shadow-lg active:scale-95 transition-transform duration-100 text-2xl">
            🕐 Stämpla ut
          </button>

          {/* Status */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Status:</span> Du är instämplad sedan 09:15
            </p>
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
