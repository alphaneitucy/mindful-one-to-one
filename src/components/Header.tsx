
import { Bell, User, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Header = () => {
  const { theme, setTheme, isDark } = useTheme();

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <header className="flex items-center justify-between p-6 pt-12 relative">
      <div className="animate-slide-up">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white font-poppins">
          {getGreeting()}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm font-inter">
          Take a moment for yourself
        </p>
      </div>
      
      <div className="flex items-center space-x-3">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-2xl glass hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          {isDark ? (
            <Sun size={20} className="text-orange-400 animate-scale-in" />
          ) : (
            <Moon size={20} className="text-slate-600 animate-scale-in" />
          )}
        </button>
        
        <button className="p-2 rounded-2xl glass hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110 active:scale-95 relative">
          <Bell size={20} className="text-gray-600 dark:text-gray-300" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse-glow" />
        </button>
        
        <button className="p-2 rounded-2xl glass hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110 active:scale-95">
          <User size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </header>
  );
};
