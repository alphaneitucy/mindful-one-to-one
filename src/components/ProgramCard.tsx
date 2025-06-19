
import { Play, X } from 'lucide-react';
import { useState } from 'react';

export const ProgramCard = () => {
  const [showDetails, setShowDetails] = useState(false);

  const features = [
    { title: 'Guided Meditation', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=120&fit=crop' },
    { title: 'Breathing Exercise', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=120&fit=crop' },
    { title: 'Healthy Recipes', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=200&h=120&fit=crop' },
    { title: 'Yoga Classes', image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=200&h=120&fit=crop' }
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Your Program Is Ready!</h2>
        {showDetails && (
          <button onClick={() => setShowDetails(false)}>
            <X className="text-gray-600" size={20} />
          </button>
        )}
      </div>
      
      <p className="text-gray-600 text-sm mb-4">Just 30 minutes a day to change your life.</p>
      
      {!showDetails ? (
        <button 
          onClick={() => setShowDetails(true)}
          className="text-gray-800 font-medium mb-4 hover:text-gray-600 transition-colors"
        >
          What Is Included? →
        </button>
      ) : (
        <div className="mb-6">
          <h3 className="font-medium text-gray-800 mb-3">What Is Included?</h3>
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white/70 rounded-2xl p-3">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-16 object-cover rounded-xl mb-2"
                />
                <p className="text-xs font-medium text-gray-800">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="bg-white/80 rounded-2xl p-4">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop"
              alt="Meditation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-800">Morning Meditation</h4>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs text-gray-600 bg-green-100 px-2 py-1 rounded-full">Beginner</span>
              <span className="text-xs text-gray-600 bg-blue-100 px-2 py-1 rounded-full">Intermediate</span>
            </div>
          </div>
          <button className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
            <Play className="text-white ml-1" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
