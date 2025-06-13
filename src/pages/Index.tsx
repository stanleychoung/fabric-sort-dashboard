
import { useState } from 'react';
import { Header } from '@/components/Header';
import { MainDashboard } from '@/components/MainDashboard';
import { ConfigPanel } from '@/components/ConfigPanel';
import { StatisticsPanel } from '@/components/StatisticsPanel';

const Index = () => {
  const [activeView, setActiveView] = useState<'dashboard' | 'config' | 'stats'>('dashboard');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeView={activeView} onViewChange={setActiveView} />
      
      <main className="h-[calc(100vh-5rem)]">
        {activeView === 'dashboard' && <MainDashboard />}
        {activeView === 'config' && <ConfigPanel />}
        {activeView === 'stats' && <StatisticsPanel />}
      </main>
    </div>
  );
};

export default Index;
