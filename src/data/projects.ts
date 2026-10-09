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
    status: 'completed',
  },
  {
    id: 3,
    title: 'Quantum Algorithms for Maximum Independent Set',
    description:
      'Code from my BSc Physics dissertation at Durham: simulating and comparing adiabatic quantum computing, quantum walks and a hybrid of the two for solving Maximum Independent Set, with the graph encoded as an Ising Hamiltonian. Tidied up in 2026 into a tested Python module, fixing two bugs that changed the results.',
    techStack: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'Jupyter'],
    repoUrl: 'https://github.com/williamcfarlane/Durham-Computing-Project',
    status: 'completed',
  },
  {
    id: 2,
    title: 'This Portfolio Site',
    description:
      'The React + TypeScript site you are looking at right now. Built to learn frontend development.',
    techStack: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    repoUrl: 'https://github.com/williamcfarlane/portfolio',
    status: 'completed',
  },
]
