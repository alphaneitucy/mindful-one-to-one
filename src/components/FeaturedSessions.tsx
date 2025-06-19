
import { Clock, MapPin } from 'lucide-react';

const sessions = [
  {
    title: 'Breathing Exercise',
    duration: '2 min',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
    bgColor: 'bg-gradient-to-br from-orange-200 to-yellow-200',
    featured: true
  },
  {
    title: 'Yoga Class',
    duration: '15 min',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop',
    bgColor: 'bg-gradient-to-br from-purple-200 to-pink-200'
  },
  {
    title: 'Guided Meditation',
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
    bgColor: 'bg-gradient-to-br from-green-200 to-teal-200'
  }
];

export const FeaturedSessions = () => {
  return (
    <div className="space-y-4">
      {sessions.map((session, index) => (
        <div key={session.title} className={`relative rounded-3xl overflow-hidden shadow-sm ${session.bgColor}`}>
          {session.featured && (
            <div className="absolute top-4 left-4 z-10">
              <MapPin className="text-yellow-600" size={20} />
            </div>
          )}
          
          <div className="flex items-center p-6">
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-lg mb-2">{session.title}</h3>
              <div className="flex items-center space-x-1 text-gray-600">
                <Clock size={16} />
                <span className="text-sm">{session.duration}</span>
              </div>
            </div>
            
            <div className="w-20 h-20 rounded-2xl overflow-hidden ml-4">
              <img 
                src={session.image} 
                alt={session.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
