
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

export const ConfigPanel = () => {
  const [sortingStrategy, setSortingStrategy] = useState('hotel-type');
  const [outletCount, setOutletCount] = useState('4');
  const [autoMode, setAutoMode] = useState(true);

  const strategies = [
    { value: 'hotel-type', label: '酒店+类别分拣' },
    { value: 'type-only', label: '仅按类别分拣' },
    { value: 'order', label: '订单分拣' },
    { value: 'hotel-only', label: '仅按酒店分拣' }
  ];

  return (
    <div className="p-8 space-y-8">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6">分拣策略配置</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-3 block">分拣策略</label>
              <Select value={sortingStrategy} onValueChange={setSortingStrategy}>
                <SelectTrigger className="h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {strategies.map((strategy) => (
                    <SelectItem key={strategy.value} value={strategy.value}>
                      {strategy.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">出口数量配置</label>
              <Select value={outletCount} onValueChange={setOutletCount}>
                <SelectTrigger className="h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4">4个出口</SelectItem>
                  <SelectItem value="6">6个出口</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium">自动分拣模式</label>
                <p className="text-xs text-muted-foreground">启用后设备将自动处理所有布草</p>
              </div>
              <Switch checked={autoMode} onCheckedChange={setAutoMode} />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">当前配置预览</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">策略:</span>
                <Badge variant="default">
                  {strategies.find(s => s.value === sortingStrategy)?.label}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">出口数:</span>
                <span>{outletCount}个正常出口 + 2个垃圾出口</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">模式:</span>
                <span>{autoMode ? '自动模式' : '手动模式'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-8">
          <Button className="h-12 px-8">保存配置</Button>
          <Button variant="outline" className="h-12 px-8">重置默认</Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6">出口映射配置</h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: parseInt(outletCount) }, (_, i) => i + 1).map((outlet) => (
            <div key={outlet} className="space-y-3">
              <div className={`h-16 outlet-${outlet} rounded-lg flex items-center justify-center`}>
                <span className="text-white font-bold">出口 {outlet}</span>
              </div>
              <Select defaultValue={`config-${outlet}`}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={`config-${outlet}`}>希尔顿-床单</SelectItem>
                  <SelectItem value={`config-${outlet}-2`}>万豪-被套</SelectItem>
                  <SelectItem value={`config-${outlet}-3`}>洲际-枕套</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ))}
          
          <div className="space-y-3">
            <div className="h-16 outlet-reject rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">垃圾出口A</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">RFID读取失败</p>
          </div>
          
          <div className="space-y-3">
            <div className="h-16 outlet-reject rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">垃圾出口B</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">非法布草</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
