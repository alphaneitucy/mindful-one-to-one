
import { Play, X, Star, Award } from 'lucide-react';
import { useState } from 'react';

export const ProgramCard = () => {
  const [showDetails, setShowDetails] = useState(false);

  const features = [
    { 
      title: 'Guided Meditation', 
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=120&fit=crop',
      progress: 80,
      sessions: 12
    },
    { 
      title: 'Breathing Exercise', 
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=120&fit=crop',
      progress: 60,
      sessions: 8
    },
    { 
      title: 'Healthy Recipes', 
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=200&h=120&fit=crop',
      progress: 40,
      sessions: 15
    },
    { 
      title: 'Yoga Classes', 
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=200&h=120&fit=crop',
      progress: 90,
      sessions: 10
    }
  ];

  return (
    <div className="glass-card bg-gradient-to-br from-yellow-100/80 to-orange-100/80 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-4xl p-6 shadow-xl border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Award className="text-orange-500" size={20} />
          <h2 className="text-xl font-bold text-gray-800 dark:text-white font-poppins">
            Your Program Is Ready!
          </h2>
        </div>
        {showDetails && (
          <button 
            onClick={() => setShowDetails(false)}
            className="p-2 rounded-xl hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <X className="text-gray-600 dark:text-gray-300" size={20} />
          </button>
        )}
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 font-inter">
        Just 30 minutes a day to change your life.
      </p>
      
      {!showDetails ? (
        <button 
          onClick={() => setShowDetails(true)}
          className="text-gray-800 dark:text-gray-200 font-medium mb-4 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 hover:translate-x-1 font-inter"
        >
          What Is Included? →
        </button>
      ) : (
        <div className="mb-6 animate-fade-in">
          <h3 className="font-medium text-gray-800 dark:text-white mb-4 font-poppins">What Is Included?</h3>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="glass rounded-3xl p-4 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-3">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-16 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-black/20 backdrop-blur-sm rounded-xl px-2 py-1">
                    <span className="text-xs text-white font-medium">{feature.sessions}</span>
                  </div>
                </div>
                <p className="text-xs font-medium text-gray-800 dark:text-white mb-2 font-inter">
                  {feature.title}
                </p>
                <div className="bg-white/20 dark:bg-black/20 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${feature.progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                  {feature.progress}% complete
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="glass rounded-3xl p-4 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 group">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop"
                alt="Meditation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute -top-1 -right-1">
              <Star className="text-yellow-400 fill-current" size={16} />
            </div>
          </div>
          
          <div className="flex-1">
            <h4 className="font-medium text-gray-800 dark:text-white font-poppins">Morning Meditation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 font-inter">Start your day with mindfulness</p>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-600 dark:text-gray-300 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full font-inter">
                Beginner
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full font-inter">
                5 min
              </span>
            </div>
          </div>
          
          <button className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-green-200/50 dark:hover:shadow-green-500/20 hover:scale-110 active:scale-95 transition-all duration-200 group-hover:animate-pulse-glow">
            <Play className="text-white ml-1" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
