import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ProjectCard from "@/components/dashboard/ProjectCard";
import QuickStats from "@/components/dashboard/QuickStats";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Filter, Grid3X3, List, Users, Calendar, MessageCircle } from "lucide-react";
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
    status: "active",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Native iOS and Android app for customer engagement and sales",
    progress: 45,
    totalTasks: 32,
    completedTasks: 14,
    dueDate: "Jan 30",
    members: [
      { id: 5, name: "Tom Brown" },
      { id: 6, name: "Lisa Garcia" },
      { id: 7, name: "David Kim" },
    ],
    status: "active",
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "Brand Guidelines",
    description: "Comprehensive brand identity system including logos, colors, and typography",
    progress: 100,
    totalTasks: 15,
    completedTasks: 15,
    dueDate: "Nov 20",
    members: [
      { id: 8, name: "Maria Rodriguez" },
      { id: 9, name: "Chris Taylor" },
    ],
    status: "completed",
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
    status: "on-hold",
    color: "bg-orange-500",
  },
];

const Index = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [projects, setProjects] = useState(mockProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [tasks, setTasks] = useState({});
  const [comments, setComments] = useState({});
  
  // Form states
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    dueDate: "",
    members: []
  });
  
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    assignee: "",
    priority: "medium",
    dueDate: ""
  });

  const createProject = () => {
    const project = {
      id: Date.now(),
      name: newProject.name,
      description: newProject.description,
      progress: 0,
      totalTasks: 0,
      completedTasks: 0,
      dueDate: newProject.dueDate,
      members: [],
      status: "active",
      color: "bg-blue-500"
    };
    setProjects([...projects, project]);
    setNewProject({ name: "", description: "", dueDate: "", members: [] });
    setShowCreateProject(false);
  };

  const createTask = () => {
    if (!selectedProject) return;
    
    const task = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      assignee: newTask.assignee,
      priority: newTask.priority,
      dueDate: newTask.dueDate,
      status: "pending",
      projectId: selectedProject.id
    };

    const projectTasks = tasks[selectedProject.id] || [];
    setTasks({
      ...tasks,
      [selectedProject.id]: [...projectTasks, task]
    });

    // Update project task count
    const updatedProjects = projects.map(p => 
      p.id === selectedProject.id 
        ? { ...p, totalTasks: p.totalTasks + 1 }
        : p
    );
    setProjects(updatedProjects);

    setNewTask({ title: "", description: "", assignee: "", priority: "medium", dueDate: "" });
    setShowCreateTask(false);
  };

  const addComment = (projectId, taskId, comment) => {
    const key = `${projectId}-${taskId}`;
    const existing = comments[key] || [];
    setComments({
      ...comments,
      [key]: [...existing, {
        id: Date.now(),
        text: comment,
        author: "Current User",
        timestamp: new Date().toLocaleString()
      }]
    });
  };

  const markTaskComplete = (projectId, taskId) => {
    const projectTasks = tasks[projectId] || [];
    const updatedTasks = projectTasks.map(task =>
      task.id === taskId ? { ...task, status: "completed" } : task
    );
    setTasks({ ...tasks, [projectId]: updatedTasks });

    // Update project completion count
    const completedCount = updatedTasks.filter(t => t.status === "completed").length;
    const updatedProjects = projects.map(p =>
      p.id === projectId
        ? { ...p, completedTasks: completedCount, progress: Math.round((completedCount / p.totalTasks) * 100) }
        : p
    );
    setProjects(updatedProjects);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 ml-64">
          {/* Hero Section */}
          <div 
            className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white p-8 mb-8"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8)), url(${heroBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-2">Welcome back, John! 👋</h1>
              <p className="text-xl text-blue-100 mb-6">
                You have {projects.filter(p => p.status === 'active').length} active projects and {
                  Object.values(tasks).flat().filter(t => t.status === 'pending').length
                } pending tasks. Let's make today productive!
              </p>
              <Dialog open={showCreateProject} onOpenChange={setShowCreateProject}>
                <DialogTrigger asChild>
                  <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Project
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Project</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input
                      placeholder="Project Name"
                      value={newProject.name}
                      onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                    />
                    <Textarea
                      placeholder="Project Description"
                      value={newProject.description}
                      onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    />
                    <Input
                      type="date"
                      value={newProject.dueDate}
                      onChange={(e) => setNewProject({...newProject, dueDate: e.target.value})}
                    />
                    <Button onClick={createProject} className="w-full">
                      Create Project
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
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
              {projects.map((project) => (
                <div key={project.id} className="relative">
                  <ProjectCard 
                    project={project} 
                    onClick={() => setSelectedProject(project)}
                  />
                  {selectedProject && selectedProject.id === project.id && (
                    <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white border rounded-lg shadow-lg z-10">
                      <h3 className="font-semibold mb-2">Project Tasks</h3>
                      <div className="space-y-2 mb-4">
                        {(tasks[project.id] || []).map((task) => (
                          <div key={task.id} className="flex items-center justify-between p-2 border rounded">
                            <div>
                              <span className={`${task.status === 'completed' ? 'line-through text-gray-500' : ''}`}>
                                {task.title}
                              </span>
                              <div className="text-sm text-gray-500">
                                {task.assignee} • {task.priority} priority
                              </div>
                            </div>
                            <div className="flex gap-2">
                              {task.status !== 'completed' && (
                                <Button
                                  size="sm"
                                  onClick={() => markTaskComplete(project.id, task.id)}
                                >
                                  Complete
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  const comment = prompt("Add a comment:");
                                  if (comment) addComment(project.id, task.id, comment);
                                }}
                              >
                                <MessageCircle className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Dialog open={showCreateTask} onOpenChange={setShowCreateTask}>
                        <DialogTrigger asChild>
                          <Button className="w-full">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Task
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Create New Task</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <Input
                              placeholder="Task Title"
                              value={newTask.title}
                              onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                            />
                            <Textarea
                              placeholder="Task Description"
                              value={newTask.description}
                              onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                            />
                            <Input
                              placeholder="Assignee"
                              value={newTask.assignee}
                              onChange={(e) => setNewTask({...newTask, assignee: e.target.value})}
                            />
                            <Select
                              value={newTask.priority}
                              onValueChange={(value) => setNewTask({...newTask, priority: value})}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Priority" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                              </SelectContent>
                            </Select>
                            <Input
                              type="date"
                              value={newTask.dueDate}
                              onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                            />
                            <Button onClick={createTask} className="w-full">
                              Create Task
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>
            
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-gradient-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => setShowCreateTask(true)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Task
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Add Team Member
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
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
