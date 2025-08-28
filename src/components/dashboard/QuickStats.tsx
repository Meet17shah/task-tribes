import { TrendingUp, Clock, CheckCircle2, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Active Projects",
    value: "12",
    change: "+2 this week",
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "bg-primary-light",
  },
  {
    title: "Tasks Due Today",
    value: "8",
    change: "3 overdue",
    icon: Clock,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    title: "Completed This Week",
    value: "24",
    change: "+18%",
    icon: CheckCircle2,
    color: "text-success",
    bgColor: "bg-accent-light",
  },
  {
    title: "Team Members",
    value: "16",
    change: "2 online",
    icon: Users,
    color: "text-accent",
    bgColor: "bg-accent-light",
  },
];

const QuickStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:scale-[1.02] transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickStats;