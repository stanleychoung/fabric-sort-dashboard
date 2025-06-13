
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export const StatisticsPanel = () => {
  const hourlyData = [
    { hour: '08:00', count: 45 },
    { hour: '09:00', count: 78 },
    { hour: '10:00', count: 92 },
    { hour: '11:00', count: 86 },
    { hour: '12:00', count: 35 },
    { hour: '13:00', count: 67 },
    { hour: '14:00', count: 89 },
    { hour: '15:00', count: 94 }
  ];

  const outletData = [
    { name: '出口1', value: 156, color: 'hsl(217, 91%, 60%)' },
    { name: '出口2', value: 134, color: 'hsl(142, 71%, 45%)' },
    { name: '出口3', value: 89, color: 'hsl(38, 92%, 50%)' },
    { name: '出口4', value: 76, color: 'hsl(280, 100%, 70%)' },
    { name: '垃圾出口', value: 20, color: 'hsl(0, 84%, 60%)' }
  ];

  const totalProcessed = outletData.reduce((sum, item) => sum + item.value, 0);
  const successRate = ((totalProcessed - 20) / totalProcessed * 100).toFixed(1);

  return (
    <div className="p-8 space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">475</div>
          <div className="text-sm text-muted-foreground">今日总处理量</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-green-500 mb-2">{successRate}%</div>
          <div className="text-sm text-muted-foreground">分拣成功率</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-blue-500 mb-2">59</div>
          <div className="text-sm text-muted-foreground">每小时平均</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-orange-500 mb-2">7.2h</div>
          <div className="text-sm text-muted-foreground">今日运行时间</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hourly Chart */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">每小时处理量</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Outlet Distribution */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">出口分布统计</h3>
          <div className="flex items-center justify-center h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={outletData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {outletData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {outletData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Detailed Statistics */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">详细统计报表</h3>
          <div className="flex space-x-2">
            <Button variant="outline" className="h-10">导出报表</Button>
            <Button variant="outline" className="h-10">清空数据</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3">时间段</th>
                <th className="text-center py-3">处理总量</th>
                <th className="text-center py-3">成功数量</th>
                <th className="text-center py-3">失败数量</th>
                <th className="text-center py-3">成功率</th>
                <th className="text-center py-3">状态</th>
              </tr>
            </thead>
            <tbody>
              {[
                { period: '08:00-09:00', total: 45, success: 44, failed: 1, rate: '97.8%', status: 'normal' },
                { period: '09:00-10:00', total: 78, success: 75, failed: 3, rate: '96.2%', status: 'normal' },
                { period: '10:00-11:00', total: 92, success: 90, failed: 2, rate: '97.8%', status: 'normal' },
                { period: '11:00-12:00', total: 86, success: 83, failed: 3, rate: '96.5%', status: 'normal' },
                { period: '13:00-14:00', total: 67, success: 64, failed: 3, rate: '95.5%', status: 'warning' },
                { period: '14:00-15:00', total: 89, success: 87, failed: 2, rate: '97.8%', status: 'normal' }
              ].map((row, index) => (
                <tr key={index} className="border-b border-border/50">
                  <td className="py-3">{row.period}</td>
                  <td className="text-center py-3">{row.total}</td>
                  <td className="text-center py-3 text-green-500">{row.success}</td>
                  <td className="text-center py-3 text-red-500">{row.failed}</td>
                  <td className="text-center py-3">{row.rate}</td>
                  <td className="text-center py-3">
                    <Badge variant={row.status === 'normal' ? 'default' : 'destructive'}>
                      {row.status === 'normal' ? '正常' : '警告'}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
