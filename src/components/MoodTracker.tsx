
import { useState } from 'react';

interface MoodTrackerProps {
  currentMood: string;
  setCurrentMood: (mood: string) => void;
}

const moods = [
  { emoji: '😔', label: 'Unhappy', color: 'bg-red-100' },
  { emoji: '😢', label: 'Sad', color: 'bg-blue-100' },
  { emoji: '😐', label: 'Normal', color: 'bg-gray-100' },
  { emoji: '😊', label: 'Good', color: 'bg-green-100' },
  { emoji: '😄', label: 'Happy', color: 'bg-yellow-100' },
];

export const MoodTracker = ({ currentMood, setCurrentMood }: MoodTrackerProps) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
        How Do You Feel Today?
      </h2>
      
      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center">
        <div className="text-4xl">
          {currentMood ? moods.find(m => m.label === currentMood)?.emoji : '😊'}
        </div>
      </div>
      
      <div className="flex justify-center space-x-4 mb-4">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => setCurrentMood(mood.label)}
            className={`p-3 rounded-full transition-all hover:scale-110 ${
              currentMood === mood.label ? mood.color + ' scale-110' : 'hover:bg-gray-50'
            }`}
          >
            <span className="text-2xl">{mood.emoji}</span>
          </button>
        ))}
      </div>
      
      <div className="flex justify-center text-xs text-gray-500 space-x-8">
        {moods.map((mood) => (
          <span key={mood.label}>{mood.label}</span>
        ))}
      </div>
      
      <button className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-shadow">
        Note Mood
      </button>
    </div>
  );
};
