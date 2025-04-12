import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-6 space-y-6">
      <h1 className="text-2xl font-bold">📊 WinnerAI</h1>
      <nav className="flex flex-col space-y-4 mt-8">
        <Link to="/" className="hover:text-blue-400">🤖 Trading Bots</Link>
        <Link to="/strategies" className="hover:text-blue-400">📈 Strategies</Link>
        <Link to="/settings" className="hover:text-blue-400">⚙️ Settings</Link>
      </nav>
    </div>
  );
}

