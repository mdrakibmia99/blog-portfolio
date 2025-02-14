import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const project = {
  _id: "2",
  title: "Portfolio Website",
  description: "A high-performance personal portfolio with dark mode and animations.",
  image: "https://www.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg",
  liveLink: "https://portfolio-demo.com",
  githubLink: "https://github.com/yourgithub/portfolio",
  techStack: ["React", "Framer Motion", "Next.js"],
};

export default function PortfolioProject() {
  return (
    <div className="container mx-auto max-w-4xl p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-600">{project.title}</h1>

      {/* Project Image */}
      <div className="mt-6">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="rounded-lg shadow-md w-full object-cover"
        />
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-4">
        <a
          href={project.githubLink}
          target="_blank"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          <ExternalLink className="w-5 h-5" />
          Live Demo
        </a>
      </div>

      {/* Tech Stack */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Tech Stack:</h3>
        <div className="flex gap-2 flex-wrap mt-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Description (Now placed below Tech Stack) */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Description:</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
      </div>
    </div>
  );
}
