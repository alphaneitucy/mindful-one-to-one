
import { Bell, User } from 'lucide-react';

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 pt-12">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Good Morning</h1>
        <p className="text-gray-600 text-sm">Take a moment for yourself</p>
      </div>
      <div className="flex items-center space-x-3">
        <button className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
          <Bell size={20} className="text-gray-600" />
        </button>
        <button className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
          <User size={20} className="text-gray-600" />
        </button>
      </div>
    </header>
  );
};
