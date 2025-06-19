
import { useState } from 'react';

interface MoodTrackerProps {
  currentMood: string;
  setCurrentMood: (mood: string) => void;
}

const moods = [
  { emoji: '😔', label: 'Unhappy', color: 'from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30', glowColor: 'shadow-red-200/50 dark:shadow-red-500/20' },
  { emoji: '😢', label: 'Sad', color: 'from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30', glowColor: 'shadow-blue-200/50 dark:shadow-blue-500/20' },
  { emoji: '😐', label: 'Normal', color: 'from-gray-100 to-gray-200 dark:from-gray-700/30 dark:to-gray-600/30', glowColor: 'shadow-gray-200/50 dark:shadow-gray-500/20' },
  { emoji: '😊', label: 'Good', color: 'from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30', glowColor: 'shadow-green-200/50 dark:shadow-green-500/20' },
  { emoji: '😄', label: 'Happy', color: 'from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30', glowColor: 'shadow-yellow-200/50 dark:shadow-yellow-500/20' },
];

export const MoodTracker = ({ currentMood, setCurrentMood }: MoodTrackerProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMoodSelect = (mood: string) => {
    setIsAnimating(true);
    setCurrentMood(mood);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const selectedMood = moods.find(m => m.label === currentMood) || moods[3];

  return (
    <div className="glass-card rounded-4xl p-6 shadow-xl border">
      <h2 className="text-xl font-bold text-center mb-6 text-gray-800 dark:text-white font-poppins">
        How Do You Feel Today?
      </h2>
      
      <div className="relative mb-6 flex justify-center">
        <div className={`w-32 h-32 mx-auto bg-gradient-to-br ${selectedMood.color} rounded-full flex items-center justify-center shadow-lg ${selectedMood.glowColor} transition-all duration-500 ${isAnimating ? 'animate-pulse-glow' : 'animate-float'}`}>
          <div className={`text-4xl transition-transform duration-300 ${isAnimating ? 'scale-125' : 'scale-100'}`}>
            {selectedMood.emoji}
          </div>
        </div>
        
        {/* Decorative rings */}
        <div className="absolute inset-0 rounded-full border-2 border-white/20 dark:border-white/10 animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute inset-2 rounded-full border border-white/10 dark:border-white/5 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="flex justify-center space-x-3 mb-4">
        {moods.map((mood, index) => (
          <button
            key={mood.label}
            onClick={() => handleMoodSelect(mood.label)}
            className={`p-3 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
              currentMood === mood.label 
                ? `bg-gradient-to-br ${mood.color} scale-110 shadow-lg ${mood.glowColor}` 
                : 'hover:bg-white/20 dark:hover:bg-white/10'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="text-2xl block transition-transform duration-200">
              {mood.emoji}
            </span>
          </button>
        ))}
      </div>
      
      <div className="flex justify-center text-xs text-gray-500 dark:text-gray-400 space-x-8 mb-6 font-inter">
        {moods.map((mood) => (
          <span key={mood.label} className={currentMood === mood.label ? 'text-orange-500 dark:text-orange-400 font-medium' : ''}>
            {mood.label}
          </span>
        ))}
      </div>
      
      <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-500 dark:to-orange-500 text-white py-4 rounded-2xl font-medium hover:shadow-lg hover:shadow-orange-200/50 dark:hover:shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-poppins">
        <span className="flex items-center justify-center space-x-2">
          <span>Note Mood</span>
          <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        </span>
      </button>
    </div>
  );
};
