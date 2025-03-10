import Link from "next/link"
import { Project } from "@/types"

interface ProjectsCardProps {
    project: Project
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ project }) => {
  return (
    <div className="w-full md:w-[calc(50%-12px)] p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
      <Link 
        href={project.link} 
        className="text-green-500 hover:text-green-600 font-medium inline-flex items-center gap-2 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </Link>
    </div>
  )
}

export default ProjectsCard;
