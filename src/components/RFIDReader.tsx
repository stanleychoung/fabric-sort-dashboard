
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RFIDReaderProps {
  currentItem: any;
  isRunning: boolean;
}

export const RFIDReader = ({ currentItem, isRunning }: RFIDReaderProps) => {
  return (
    <Card className="p-4 h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4">RFID读取状态</h3>
      
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">读取器状态</span>
          <Badge variant={isRunning ? 'default' : 'secondary'} className="text-xs">
            {isRunning ? '准备就绪' : '停止'}
          </Badge>
        </div>

        {currentItem ? (
          <div className="space-y-3 p-3 bg-secondary/50 rounded-lg border-2 border-primary">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full mx-auto flex items-center justify-center mb-2">
                <span className="text-primary-foreground text-lg">📡</span>
              </div>
              <p className="text-sm font-medium text-primary">正在读取...</p>
            </div>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">RFID:</span>
                <span className="font-mono">{currentItem.rfid}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">酒店:</span>
                <span>{currentItem.hotel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">类型:</span>
                <span>{currentItem.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">出口:</span>
                <Badge className={`outlet-${currentItem.outlet} text-xs`}>出口 {currentItem.outlet}</Badge>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-muted rounded-full mx-auto flex items-center justify-center mb-2">
              <span className="text-muted-foreground text-lg">📡</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {isRunning ? '等待布草通过...' : '设备已停止'}
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
          <div className="text-center">
            <div className="text-xl font-bold text-green-500">1,247</div>
            <div className="text-xs text-muted-foreground">今日成功</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-red-500">23</div>
            <div className="text-xs text-muted-foreground">读取失败</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
