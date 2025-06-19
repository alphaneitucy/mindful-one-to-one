
import { Heart, Calendar } from 'lucide-react';

export const DailyPlan = () => {
  const days = [
    { day: 'Mon', date: '12', active: false },
    { day: 'Tue', date: '13', active: false },
    { day: 'Wed', date: '14', active: true },
    { day: 'Thu', date: '15', active: false },
    { day: 'Fri', date: '16', active: false },
  ];

  const progressPercentage = 72;

  return (
    <div className="glass-card rounded-4xl p-6 shadow-xl border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white text-sm font-bold font-poppins">{progressPercentage}%</span>
            <svg className="absolute inset-0 w-10 h-10 transform -rotate-90" viewBox="0 0 40 40">
              <circle
                cx="20"
                cy="20"
                r="16"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="20"
                cy="20"
                r="16"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="2"
                fill="none"
                strokeDasharray={`${progressPercentage * 1.005} 100.5`}
                className="transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-gray-600 dark:text-gray-300 text-sm font-inter">Enjoy your day, Ash</span>
        </div>
        <Heart className="text-red-400 hover:scale-110 transition-transform duration-200 cursor-pointer" size={20} />
      </div>
      
      <h3 className="font-bold text-gray-800 dark:text-white mb-4 font-poppins">Today's plan</h3>
      
      <div className="flex justify-between mb-6">
        {days.map((day, index) => (
          <div key={day.date} className="text-center group cursor-pointer">
            <div 
              className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-2 transition-all duration-300 hover:scale-110 ${
                day.active 
                  ? 'bg-gradient-to-br from-yellow-400 to-orange-400 text-white shadow-lg shadow-yellow-200/50 dark:shadow-yellow-500/20 animate-pulse-glow' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-sm font-medium font-poppins">{day.date}</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-inter group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
              {day.day}
            </span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-inter">
        {progressPercentage}% of daily goal completed
      </p>
    </div>
  );
};
