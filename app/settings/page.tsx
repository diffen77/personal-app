import { Navigation } from '@/app/components/Navigation';

export default function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-20">
      <header className="bg-purple-600 text-white p-6 sticky top-0 z-10 shadow-lg">
        <h1 className="text-2xl font-bold">Inställningar</h1>
        <p className="text-sm text-purple-100">Hantera ditt konto och preferenser</p>
      </header>

      <main className="p-6">
        <div className="space-y-4">
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Profil</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Namn</label>
                <input
                  type="text"
                  defaultValue="Anders Svensson"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-post</label>
                <input
                  type="email"
                  defaultValue="anders@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input
                  type="tel"
                  defaultValue="+46701234567"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Befattning</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Personal</option>
                  <option>Ledare</option>
                  <option>Vikarieledare</option>
                </select>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Preferenser</h2>
            
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-5 h-5 text-purple-600" />
                <span className="text-gray-800">Aktivera push-notifieringar</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-5 h-5 text-purple-600" />
                <span className="text-gray-800">E-post-aviseringar om ändringar i schema</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-purple-600" />
                <span className="text-gray-800">Mörk läge</span>
              </label>

              <div className="mt-4 pt-4 border-t">
                <label className="block text-sm font-medium text-gray-700 mb-2">Språk</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Svenska</option>
                  <option>English</option>
                </select>
              </div>
            </div>
          </div>

          {/* App Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Om appen</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">Version:</span> 0.1.0</p>
              <p><span className="font-medium">Senast uppdaterad:</span> 2026-03-15</p>
              <p><span className="font-medium">Installerat lokalt:</span> Ja (PWA)</p>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-red-900 mb-4">Farligare åtgärder</h2>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium">
              Logga ut
            </button>
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg font-medium mt-2">
              Radera konto
            </button>
          </div>

          {/* Save Button */}
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-bold">
            Spara ändringar
          </button>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
