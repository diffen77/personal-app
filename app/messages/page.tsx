import { Navigation } from '@/app/components/Navigation';

export default function Messages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 pb-20">
      <header className="bg-blue-600 text-white p-6 sticky top-0 z-10 shadow-lg">
        <h1 className="text-2xl font-bold">Teammeddelanden</h1>
        <p className="text-sm text-blue-100">Kommunicera med ditt team</p>
      </header>

      <main className="p-6">
        <div className="space-y-4">
          {/* Messages */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Senaste meddelanden</h2>
            
            <div className="space-y-3">
              {/* Message 1 */}
              <div className="border-l-4 border-blue-500 pl-4 py-3">
                <div className="flex justify-between items-start">
                  <p className="font-medium text-gray-900">Johan (Ledare)</p>
                  <span className="text-xs text-gray-500">10:30</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Kom ihåg mötet klockan 14:00 med hela teamet!</p>
              </div>

              {/* Message 2 */}
              <div className="border-l-4 border-green-500 pl-4 py-3">
                <div className="flex justify-between items-start">
                  <p className="font-medium text-gray-900">Maria (Kollega)</p>
                  <span className="text-xs text-gray-500">09:15</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Jag hoppar över lunch imorgon. Kan någon täcka?</p>
              </div>

              {/* Message 3 */}
              <div className="border-l-4 border-yellow-500 pl-4 py-3">
                <div className="flex justify-between items-start">
                  <p className="font-medium text-gray-900">Systemmeddelande</p>
                  <span className="text-xs text-gray-500">08:00</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Nya schemat är publicerat för nästa vecka</p>
              </div>
            </div>
          </div>

          {/* New Message Input */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Skicka meddelande</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Skriv ett meddelande..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
                Skicka
              </button>
            </div>
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
