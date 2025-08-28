import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ProjectCard from "@/components/dashboard/ProjectCard";
import QuickStats from "@/components/dashboard/QuickStats";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { Button } from "@/components/ui/button";
import { Plus, Filter, Grid3X3, List } from "lucide-react";
import { useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";

const mockProjects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Complete overhaul of the company website with modern design and improved UX",
    progress: 75,
    totalTasks: 24,
    completedTasks: 18,
    dueDate: "Dec 15",
    members: [
      { id: 1, name: "Sarah Wilson" },
      { id: 2, name: "Mike Chen" },
      { id: 3, name: "Alex Johnson" },
      { id: 4, name: "Emma Davis" },
    ],
    status: "active" as const,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Native iOS and Android app for customer engagement and sales",
    progress: 45,
    totalTasks: 32,
    completedTasks: 14,
    dueDate: "Jan 20",
    members: [
      { id: 5, name: "Tom Brown" },
      { id: 6, name: "Lisa Garcia" },
      { id: 7, name: "David Kim" },
    ],
    status: "active" as const,
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "Brand Guidelines",
    description: "Comprehensive brand identity system including logos, colors, and typography",
    progress: 100,
    totalTasks: 16,
    completedTasks: 16,
    dueDate: "Nov 30",
    members: [
      { id: 8, name: "Anna Lee" },
      { id: 9, name: "Chris Taylor" },
    ],
    status: "completed" as const,
    color: "bg-purple-500",
  },
  {
    id: 4,
    name: "Marketing Campaign",
    description: "Q1 digital marketing campaign across social media and web platforms",
    progress: 25,
    totalTasks: 20,
    completedTasks: 5,
    dueDate: "Feb 15",
    members: [
      { id: 10, name: "Rachel White" },
      { id: 11, name: "James Miller" },
      { id: 12, name: "Sophie Clark" },
    ],
    status: "on-hold" as const,
    color: "bg-orange-500",
  },
];

const Index = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-8">
          {/* Hero Section */}
          <div 
            className="relative rounded-2xl overflow-hidden bg-gradient-primary p-8 text-primary-foreground"
            style={{
              backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.8), rgba(37, 99, 235, 0.9)), url(${heroBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-3xl font-bold mb-4">
                Welcome back, John! 👋
              </h1>
              <p className="text-primary-foreground/90 mb-6 text-lg">
                You have 8 tasks due today and 3 projects need your attention. 
                Let's make today productive!
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Plus className="h-4 w-4 mr-2" />
                Create New Project
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <QuickStats />

          {/* Projects Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Your Projects</h2>
                <p className="text-muted-foreground">Manage and track your active projects</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                
                <div className="flex items-center border rounded-lg p-1">
                  <Button
                    variant={viewMode === "grid" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="h-8 w-8 p-0"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="h-8 w-8 p-0"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-4"
            }>
              {mockProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>
            
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-gradient-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Task
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Team Member
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
