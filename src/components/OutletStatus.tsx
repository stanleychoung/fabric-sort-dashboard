
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const OutletStatus = () => {
  const outlets = [
    { id: 1, name: '希尔顿-床单', count: 156, color: 'outlet-1' },
    { id: 2, name: '万豪-被套', count: 134, color: 'outlet-2' },
    { id: 3, name: '洲际-枕套', count: 89, color: 'outlet-3' },
    { id: 4, name: '通用-浴巾', count: 76, color: 'outlet-4' },
    { id: 5, name: '垃圾出口A', count: 12, color: 'outlet-reject' },
    { id: 6, name: '垃圾出口B', count: 8, color: 'outlet-reject' }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-6">分拣出口状态</h3>
      
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {outlets.map((outlet) => (
          <div key={outlet.id} className="space-y-3">
            <div className={`h-24 ${outlet.color} rounded-lg flex items-center justify-center relative overflow-hidden`}>
              <div className="text-center text-white">
                <div className="text-2xl font-bold">{outlet.count}</div>
                <div className="text-sm opacity-90">出口 {outlet.id}</div>
              </div>
              
              {/* Animated flow indicator */}
              <div className="absolute top-0 left-0 w-full h-1 bg-white/30">
                <div className="w-8 h-full bg-white/80 animate-pulse"></div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="font-medium">{outlet.name}</p>
              <Badge variant="secondary" className="text-xs">
                {outlet.id <= 4 ? '正常分拣' : '异常处理'}
              </Badge>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-500">455</div>
            <div className="text-sm text-muted-foreground">正常分拣总数</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-500">20</div>
            <div className="text-sm text-muted-foreground">异常总数</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-500">95.8%</div>
            <div className="text-sm text-muted-foreground">分拣成功率</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
