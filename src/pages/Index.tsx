
import { useState } from 'react';
import { Header } from '../components/Header';
import { MoodTracker } from '../components/MoodTracker';
import { DailyPlan } from '../components/DailyPlan';
import { FeaturedSessions } from '../components/FeaturedSessions';
import { ProgramCard } from '../components/ProgramCard';
import { BottomNavigation } from '../components/BottomNavigation';
import { ThemeProvider } from '../contexts/ThemeContext';

const Index = () => {
  const [currentMood, setCurrentMood] = useState<string>('');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
        <div className="max-w-md mx-auto glass-card min-h-screen relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-pink-200/30 dark:from-orange-500/10 dark:to-pink-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-200/30 to-blue-200/30 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-3xl translate-y-24 -translate-x-24" />
          
          <div className="relative z-10">
            <Header />
            
            <div className="px-6 pb-20 space-y-6">
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <MoodTracker currentMood={currentMood} setCurrentMood={setCurrentMood} />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <DailyPlan />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <FeaturedSessions />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <ProgramCard />
              </div>
            </div>
            
            <BottomNavigation />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
