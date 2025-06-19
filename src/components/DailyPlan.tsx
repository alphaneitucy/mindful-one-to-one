
import { Heart, Calendar } from 'lucide-react';

export const DailyPlan = () => {
  const days = [
    { day: 'Mon', date: '12', active: false },
    { day: 'Tue', date: '13', active: false },
    { day: 'Wed', date: '14', active: true },
    { day: 'Thu', date: '15', active: false },
    { day: 'Fri', date: '16', active: false },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">72%</span>
          </div>
          <span className="text-gray-600 text-sm">Enjoy your day, Ash</span>
        </div>
        <Heart className="text-red-400" size={20} />
      </div>
      
      <h3 className="font-bold text-gray-800 mb-4">Today's plan</h3>
      
      <div className="flex justify-between mb-6">
        {days.map((day) => (
          <div key={day.date} className="text-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${
              day.active ? 'bg-yellow-400 text-white' : 'bg-gray-100 text-gray-600'
            }`}>
              <span className="text-sm font-medium">{day.date}</span>
            </div>
            <span className="text-xs text-gray-500">{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
