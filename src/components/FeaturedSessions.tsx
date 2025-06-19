
import { Clock, Play, Bookmark } from 'lucide-react';
import { useState } from 'react';

const sessions = [
  {
    title: 'Breathing Exercise',
    duration: '2 min',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
    bgColor: 'from-orange-200/80 to-yellow-200/80 dark:from-orange-900/40 dark:to-yellow-900/40',
    featured: true,
    difficulty: 'Beginner',
    progress: 0
  },
  {
    title: 'Yoga Class',
    duration: '15 min',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop',
    bgColor: 'from-purple-200/80 to-pink-200/80 dark:from-purple-900/40 dark:to-pink-900/40',
    difficulty: 'Intermediate',
    progress: 45
  },
  {
    title: 'Guided Meditation',
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
    bgColor: 'from-green-200/80 to-teal-200/80 dark:from-green-900/40 dark:to-teal-900/40',
    difficulty: 'Advanced',
    progress: 20
  }
];

export const FeaturedSessions = () => {
  const [bookmarked, setBookmarked] = useState<string[]>([]);

  const toggleBookmark = (title: string) => {
    setBookmarked(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="space-y-4">
      {sessions.map((session, index) => (
        <div 
          key={session.title} 
          className={`relative rounded-4xl overflow-hidden shadow-xl border glass-card bg-gradient-to-br ${session.bgColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center p-6 relative">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-800 dark:text-white text-lg font-poppins group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {session.title}
                </h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleBookmark(session.title);
                  }}
                  className="p-2 rounded-xl hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200 hover:scale-110 active:scale-95"
                >
                  <Bookmark 
                    size={16} 
                    className={`transition-colors ${
                      bookmarked.includes(session.title) 
                        ? 'text-orange-500 fill-current' 
                        : 'text-gray-600 dark:text-gray-300'
                    }`} 
                  />
                </button>
              </div>
              
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                  <Clock size={14} />
                  <span className="text-sm font-inter">{session.duration}</span>
                </div>
                <div className="px-2 py-1 bg-white/20 dark:bg-black/20 rounded-full">
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200 font-inter">
                    {session.difficulty}
                  </span>
                </div>
              </div>

              {session.progress > 0 && (
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mb-1">
                    <span>Progress</span>
                    <span>{session.progress}%</span>
                  </div>
                  <div className="bg-white/20 dark:bg-black/20 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="h-full bg-orange-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${session.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative ml-6">
              <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={session.image} 
                  alt={session.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200">
                <Play className="text-white ml-0.5" size={14} />
              </button>
            </div>
          </div>

          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
};
