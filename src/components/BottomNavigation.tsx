
import { Calendar, Compass, Home, User } from 'lucide-react';

export const BottomNavigation = () => {
  const navItems = [
    { icon: Calendar, label: 'Today', active: true },
    { icon: Compass, label: 'Therapy', active: false },
    { icon: Compass, label: 'Explore', active: false },
    { icon: User, label: 'Profile', active: false },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md">
      <div className="bg-white/90 backdrop-blur-sm border-t border-gray-100 px-6 py-4">
        <div className="flex justify-around">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                item.active ? 'text-orange-500' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <item.icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
