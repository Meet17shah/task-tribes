import { MessageSquare, CheckCircle2, UserPlus, FileText, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    type: "comment",
    user: { name: "Sarah Wilson", avatar: "SW" },
    action: "commented on",
    target: "Mobile App Design",
    time: "2 minutes ago",
    icon: MessageSquare,
    color: "text-blue-500",
  },
  {
    id: 2,
    type: "task",
    user: { name: "Mike Chen", avatar: "MC" },
    action: "completed task",
    target: "User Authentication",
    time: "5 minutes ago",
    icon: CheckCircle2,
    color: "text-success",
  },
  {
    id: 3,
    type: "member",
    user: { name: "Alex Johnson", avatar: "AJ" },
    action: "joined project",
    target: "Website Redesign",
    time: "1 hour ago",
    icon: UserPlus,
    color: "text-purple-500",
  },
  {
    id: 4,
    type: "file",
    user: { name: "Emma Davis", avatar: "ED" },
    action: "uploaded file",
    target: "Brand Guidelines.pdf",
    time: "2 hours ago",
    icon: FileText,
    color: "text-orange-500",
  },
  {
    id: 5,
    type: "task",
    user: { name: "Tom Brown", avatar: "TB" },
    action: "created task",
    target: "API Integration",
    time: "3 hours ago",
    icon: Clock,
    color: "text-gray-500",
  },
];

const RecentActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-card-hover transition-colors">
            <div className={`p-2 rounded-lg bg-muted`}>
              <activity.icon className={`h-4 w-4 ${activity.color}`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                    {activity.user.avatar}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{activity.user.name}</span>
              </div>
              
              <p className="text-sm text-muted-foreground mt-1">
                {activity.action}{" "}
                <span className="font-medium text-foreground">{activity.target}</span>
              </p>
            </div>
            
            <div className="text-xs text-muted-foreground">
              {activity.time}
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t">
          <button className="text-sm text-primary hover:text-primary-hover font-medium">
            View all activity
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;