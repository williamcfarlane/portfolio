export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  repoUrl?: string
  liveUrl?: string
  status: 'in-progress' | 'completed' | 'archived'
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Connect-N Winning AI',
    description:
      'The winning entry in an internal competition: an AI player for a 10×7 Connect Four variant, built in Java. Uses Monte Carlo Tree Search to choose moves within a strict 10-second, 2GB-heap budget per turn. Built in collaboration with a colleague.',
    techStack: ['Java', 'Maven'],
    repoUrl: 'https://github.com/WilliamMcFarlane/connect-n-winning-ai',
    status: 'completed',
  },
  {
    id: 2,
    title: 'This Portfolio Site',
    description:
      'The React + TypeScript site you are looking at right now. Built to learn frontend development.',
    techStack: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    status: 'in-progress',
  },
]
