
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { OutletStatus } from '@/components/OutletStatus';
import { RFIDReader } from '@/components/RFIDReader';
import { RecentActivity } from '@/components/RecentActivity';

export const MainDashboard = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentItem, setCurrentItem] = useState<any>(null);

  // Mock real-time data
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        // Simulate RFID reading
        const mockItem = {
          rfid: `RFID${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
          hotel: ['希尔顿酒店', '万豪酒店', '洲际酒店'][Math.floor(Math.random() * 3)],
          type: ['1.5m床单', '1.8m被套', '枕套', '浴巾'][Math.floor(Math.random() * 4)],
          outlet: Math.floor(Math.random() * 6) + 1,
          timestamp: new Date()
        };
        setCurrentItem(mockItem);
        
        setTimeout(() => setCurrentItem(null), 2000);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <div className="h-full p-6 grid grid-cols-12 gap-6">
      {/* Left Column - Control and RFID */}
      <div className="col-span-3 space-y-6">
        {/* Control Panel */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className={`w-4 h-4 rounded-full ${isRunning ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-lg font-medium">
                {isRunning ? '运行中' : '已停止'}
              </span>
            </div>
            <Badge variant="secondary" className="text-sm px-3 py-2 w-full justify-center">
              酒店+类别分拣
            </Badge>
            <Button
              onClick={() => setIsRunning(!isRunning)}
              variant={isRunning ? 'destructive' : 'default'}
              className="h-14 w-full text-lg"
            >
              {isRunning ? '停止分拣' : '开始分拣'}
            </Button>
          </div>
        </Card>

        {/* RFID Reader */}
        <div className="flex-1">
          <RFIDReader currentItem={currentItem} isRunning={isRunning} />
        </div>
      </div>

      {/* Center Column - Outlet Status */}
      <div className="col-span-6">
        <OutletStatus />
      </div>

      {/* Right Column - Recent Activity */}
      <div className="col-span-3">
        <RecentActivity />
      </div>
    </div>
  );
};
