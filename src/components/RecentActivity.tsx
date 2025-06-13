
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

export const RecentActivity = () => {
  const activities = [
    { id: 1, time: '14:32:15', rfid: 'RFID2A3B4C5D', hotel: '希尔顿酒店', type: '1.5m床单', outlet: 1, status: 'success' },
    { id: 2, time: '14:32:08', rfid: 'RFID8E7F9G1H', hotel: '万豪酒店', type: '被套', outlet: 2, status: 'success' },
    { id: 3, time: '14:31:55', rfid: 'RFID读取失败', hotel: '-', type: '未知', outlet: 5, status: 'error' },
    { id: 4, time: '14:31:42', rfid: 'RFID3K4L5M6N', hotel: '洲际酒店', type: '枕套', outlet: 3, status: 'success' },
    { id: 5, time: '14:31:30', rfid: 'RFID7P8Q9R0S', hotel: '希尔顿酒店', type: '浴巾', outlet: 4, status: 'success' },
  ];

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">最近分拣记录</h3>
      
      <ScrollArea className="h-64">
        <div className="space-y-3">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="text-xs text-muted-foreground font-mono w-20">
                  {activity.time}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{activity.hotel}</span>
                    <span className="text-muted-foreground">•</span>
                    <span>{activity.type}</span>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    {activity.rfid}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Badge 
                  className={`outlet-${activity.outlet}`}
                  variant="secondary"
                >
                  出口 {activity.outlet}
                </Badge>
                <div className={`w-3 h-3 rounded-full ${
                  activity.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};
