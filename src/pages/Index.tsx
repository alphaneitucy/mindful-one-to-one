
import { useState } from 'react';
import { Header } from '../components/Header';
import { MoodTracker } from '../components/MoodTracker';
import { DailyPlan } from '../components/DailyPlan';
import { FeaturedSessions } from '../components/FeaturedSessions';
import { ProgramCard } from '../components/ProgramCard';
import { BottomNavigation } from '../components/BottomNavigation';

const Index = () => {
  const [currentMood, setCurrentMood] = useState<string>('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm min-h-screen">
        <Header />
        
        <div className="px-6 pb-20 space-y-6">
          <MoodTracker currentMood={currentMood} setCurrentMood={setCurrentMood} />
          
          <DailyPlan />
          
          <FeaturedSessions />
          
          <ProgramCard />
        </div>
        
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Index;
