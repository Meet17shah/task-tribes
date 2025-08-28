import { MoreHorizontal, Users, Calendar, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    progress: number;
    totalTasks: number;
    completedTasks: number;
    dueDate: string;
    members: Array<{ id: number; name: string; avatar?: string }>;
    status: "active" | "completed" | "on-hold";
    color: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success text-success-foreground";
      case "completed":
        return "bg-primary text-primary-foreground";
      case "on-hold":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card className="group hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden">
      {/* Color accent bar */}
      <div className={`h-1 w-full ${project.color}`} />
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg leading-none tracking-tight">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit Project</DropdownMenuItem>
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Archive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Status Badge */}
        <div className="flex items-center justify-between">
          <Badge className={getStatusColor(project.status)} variant="secondary">
            {project.status === "active" && "Active"}
            {project.status === "completed" && "Completed"}
            {project.status === "on-hold" && "On Hold"}
          </Badge>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {project.dueDate}
          </div>
        </div>
        
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
        
        {/* Task Stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <CheckCircle2 className="h-3 w-3" />
            {project.completedTasks}/{project.totalTasks} tasks
          </div>
          
          {/* Team Members */}
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3 text-muted-foreground" />
            <div className="flex -space-x-1">
              {project.members.slice(0, 3).map((member) => (
                <Avatar key={member.id} className="h-6 w-6 border-2 border-background">
                  <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              ))}
              {project.members.length > 3 && (
                <div className="h-6 w-6 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">
                    +{project.members.length - 3}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;