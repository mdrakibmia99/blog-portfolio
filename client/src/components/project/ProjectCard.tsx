import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, techStack }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md transition transform group-hover:scale-105 group-hover:shadow-lg bg-white dark:bg-gray-900 flex flex-col ">
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <Image src={image} alt={title} width={400} height={250} className="w-full h-full object-cover hover:scale-[1.1] duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>

        {/* Description (limited to 2 lines) */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">
          {truncateText(description,60)}{" "}
          <Link href={link} className="text-red-500 font-semibold hover:underline">
            ... See More
          </Link>
        </p>

        {/* Tech Stack */}
        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {techStack.map((tech, index) => (
            <span key={index} className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg">
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
