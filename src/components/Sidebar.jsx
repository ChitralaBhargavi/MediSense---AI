import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 min-h-screen bg-blue-600 text-white p-4">
      <div className="font-bold text-xl mb-6">MediSense</div>

      <div className="space-y-3">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add">Medicine Schedule</Link>
        <Link to="/scan">Scan Medicine</Link>
        <Link to="/history">History</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
