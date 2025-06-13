
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  activeView: 'dashboard' | 'config' | 'stats';
  onViewChange: (view: 'dashboard' | 'config' | 'stats') => void;
}

export const Header = ({ activeView, onViewChange }: HeaderProps) => {
  return (
    <header className="h-20 bg-card border-b border-border flex items-center justify-between px-8">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xl">布</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold">酒店布草分拣系统</h1>
          <p className="text-muted-foreground text-sm">Hotel Linen Sorting System</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Badge variant={activeView === 'dashboard' ? 'default' : 'secondary'} className="h-10 px-6">
          运行状态: 正常
        </Badge>
        
        <nav className="flex space-x-2 ml-8">
          <Button
            variant={activeView === 'dashboard' ? 'default' : 'ghost'}
            onClick={() => onViewChange('dashboard')}
            className="h-12 px-6 text-base"
          >
            实时监控
          </Button>
          <Button
            variant={activeView === 'config' ? 'default' : 'ghost'}
            onClick={() => onViewChange('config')}
            className="h-12 px-6 text-base"
          >
            策略配置
          </Button>
          <Button
            variant={activeView === 'stats' ? 'default' : 'ghost'}
            onClick={() => onViewChange('stats')}
            className="h-12 px-6 text-base"
          >
            数据统计
          </Button>
        </nav>
      </div>
    </header>
  );
};
