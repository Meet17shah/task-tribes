import { 
  Home, 
  FolderOpen, 
  Users, 
  Calendar, 
  BarChart3, 
  Plus,
  ChevronDown,
  Hash
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const projects = [
  { id: 1, name: "Website Redesign", color: "bg-blue-500" },
  { id: 2, name: "Mobile App", color: "bg-green-500" },
  { id: 3, name: "Brand Guidelines", color: "bg-purple-500" },
  { id: 4, name: "Marketing Campaign", color: "bg-orange-500" },
];

const Sidebar = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);

  return (
    <aside className="w-64 h-[calc(100vh-4rem)] bg-sidebar border-r border-sidebar-border overflow-y-auto">
      <div className="p-4 space-y-1">
        {/* Main Navigation */}
        <nav className="space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Users className="h-4 w-4" />
            Team
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Calendar className="h-4 w-4" />
            Calendar
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <BarChart3 className="h-4 w-4" />
            Analytics
          </Button>
        </nav>

        {/* Projects Section */}
        <div className="pt-4">
          <Collapsible open={isProjectsOpen} onOpenChange={setIsProjectsOpen}>
            <div className="flex items-center justify-between mb-2">
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2"
                >
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform",
                    !isProjectsOpen && "-rotate-90"
                  )} />
                  <span className="text-sm font-medium">Projects</span>
                </Button>
              </CollapsibleTrigger>
              
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            
            <CollapsibleContent className="space-y-1">
              {projects.map((project) => (
                <Button
                  key={project.id}
                  variant="ghost"
                  className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground pl-6"
                >
                  <div className={cn("h-2 w-2 rounded-full", project.color)} />
                  <span className="text-sm truncate">{project.name}</span>
                </Button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Create Project Button */}
        <div className="pt-4">
          <Button className="w-full gap-2" variant="hero">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;