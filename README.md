# TaskTribes - Collaborative Project Management Platform

A modern, feature-rich project management application built with React and JavaScript. TaskTribes enables teams to create group projects, manage tasks, assign jobs, and collaborate through comments.

## Features

### 🚀 Core Functionality
- **Group Project Creation**: Create and manage multiple projects with custom descriptions and deadlines
- **Task Management**: Add, assign, and track tasks within projects
- **Team Collaboration**: Comment system for task discussions and feedback
- **Real-time Updates**: Live project progress tracking and task completion
- **User-Friendly Interface**: Modern, responsive design with intuitive navigation

### 📊 Dashboard Features
- Project overview with progress visualization
- Quick stats showing active projects, due tasks, and team metrics
- Recent activity feed
- Grid and list view modes for projects
- Quick action buttons for common operations

### 🎯 Task Management
- Create tasks with titles, descriptions, and due dates
- Assign tasks to team members
- Set priority levels (Low, Medium, High)
- Mark tasks as completed
- Track task progress within projects

### 💬 Collaboration Tools
- Comment on tasks for team communication
- Real-time activity tracking
- Team member management
- Project status updates

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Meet17shah/task-tribes.git
   cd task-tribes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` (or the port shown in terminal)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build

## Technologies Used

This project is built with modern web technologies:

- **React 18** - UI library with hooks and functional components
- **JavaScript (ES6+)** - Converted from TypeScript for broader compatibility
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern React component library
- **Radix UI** - Accessible UI primitives
- **React Router** - Client-side routing
- **React Query** - Data fetching and state management
- **Lucide React** - Modern icon library

## Project Structure

```
task-tribes/
├── src/
│   ├── components/
│   │   ├── dashboard/          # Dashboard-specific components
│   │   ├── layout/             # Layout components (Header, Sidebar)
│   │   └── ui/                 # Reusable UI components
│   ├── pages/                  # Page components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   └── assets/                 # Static assets
├── public/                     # Public assets
└── package.json               # Dependencies and scripts
```

## How to Use

### Creating a Project
1. Click the "Create New Project" button on the dashboard
2. Fill in project name, description, and due date
3. Click "Create Project" to add it to your workspace

### Managing Tasks
1. Click on any project card to view its details
2. Use the "Add Task" button to create new tasks
3. Fill in task details including title, description, assignee, and priority
4. Tasks appear in the project view with completion tracking

### Team Collaboration
1. Assign tasks to team members using the assignee field
2. Click the comment icon on any task to add comments
3. Track team activity in the Recent Activity section
4. Mark tasks as complete when finished

### Project Tracking
- View project progress through visual progress bars
- Monitor task completion ratios
- Check due dates and project status
- Use dashboard stats for quick overview

## Deployment

### Local Production Build
```bash
npm run build
npm run preview
```

### Deploy to Popular Platforms
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automated deployment

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue on the GitHub repository.
