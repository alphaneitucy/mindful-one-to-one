
import { Calendar, Compass, User } from 'lucide-react';

export const BottomNavigation = () => {
  const navItems = [
    { icon: Calendar, label: 'Today', active: true },
    { icon: Compass, label: 'Therapy', active: false },
    { icon: Compass, label: 'Explore', active: false },
    { icon: User, label: 'Profile', active: false },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md">
      <div className="glass-card border-t m-4 rounded-3xl px-6 py-4 shadow-2xl">
        <div className="flex justify-around relative">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              className={`flex flex-col items-center space-y-2 p-3 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95 relative ${
                item.active 
                  ? 'text-orange-500 dark:text-orange-400' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              <div className="relative">
                <item.icon size={20} />
                {item.active && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                )}
              </div>
              <span className="text-xs font-medium font-inter">{item.label}</span>
              
              {/* Active indicator */}
              {item.active && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
