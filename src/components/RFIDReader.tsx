
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RFIDReaderProps {
  currentItem: any;
  isRunning: boolean;
}

export const RFIDReader = ({ currentItem, isRunning }: RFIDReaderProps) => {
  return (
    <Card className="p-6 space-y-6">
      <h3 className="text-xl font-semibold">RFID读取状态</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">读取器状态</span>
          <Badge variant={isRunning ? 'default' : 'secondary'}>
            {isRunning ? '准备就绪' : '停止'}
          </Badge>
        </div>

        {currentItem ? (
          <div className="space-y-3 p-4 bg-secondary/50 rounded-lg border-2 border-primary animate-pulse">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center mb-3">
                <span className="text-primary-foreground text-2xl">📡</span>
              </div>
              <p className="text-lg font-medium text-primary">正在读取布草信息...</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">RFID编号:</span>
                <span className="font-mono">{currentItem.rfid}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">所属酒店:</span>
                <span>{currentItem.hotel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">布草类型:</span>
                <span>{currentItem.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">分拣出口:</span>
                <Badge className={`outlet-${currentItem.outlet}`}>出口 {currentItem.outlet}</Badge>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-muted rounded-full mx-auto flex items-center justify-center mb-3">
              <span className="text-muted-foreground text-2xl">📡</span>
            </div>
            <p className="text-muted-foreground">
              {isRunning ? '等待布草通过...' : '设备已停止'}
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">1,247</div>
            <div className="text-sm text-muted-foreground">今日成功</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">23</div>
            <div className="text-sm text-muted-foreground">读取失败</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
