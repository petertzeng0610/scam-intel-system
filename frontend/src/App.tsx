import { useState, useEffect } from 'react'

function App() {
  const [url, setUrl] = useState('')
  const [results, setResults] = useState([
    { id: 1, url: 'http://free-money-now.xyz', risk: 'High', source: 'Facebook', date: '2026-02-08' },
    { id: 2, url: 'https://line.me/ti/p/scammer123', risk: 'Medium', source: 'Line', date: '2026-02-08' },
    { id: 3, url: 'https://shopee-fake-login.com', risk: 'High', source: 'SMS', date: '2026-02-07' },
  ])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">🚨 Scam Intelligence Dashboard</h1>
        
        {/* Search Box */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter suspicious URL or keyword..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Analyze
            </button>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 font-semibold text-gray-600">Risk Level</th>
                <th className="p-4 font-semibold text-gray-600">URL / Content</th>
                <th className="p-4 font-semibold text-gray-600">Source</th>
                <th className="p-4 font-semibold text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.risk === 'High' ? 'bg-red-100 text-red-800' : 
                      item.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {item.risk}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-sm text-gray-700">{item.url}</td>
                  <td className="p-4 text-gray-600">{item.source}</td>
                  <td className="p-4 text-gray-500">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
