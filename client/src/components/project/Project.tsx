import ProjectCard from "./ProjectCard";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform with authentication and payment integration. asdfa with authentication and payment integration. asdfa with authentication and payment integration. asdfa fsafs fasdffffffffffsafsafsdf fasd",
    image: "https://www.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg",
    link: "/projects/ecommerce",
    techStack: ["Next.js", "Tailwind", "Stripe"],
  },
  {
    title: "Portfolio Website",
    description: "A high-performance personal portfolio with dark/light mode.",
    image: "https://www.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg",
    link: "/projects/portfolio",
    techStack: ["React", "Tailwind", "Next.js"],
  },
  {
    title: "Blog Platform",
    description: "A modern blog platform with markdown support and dynamic routing.",
    image: "https://www.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg",
    link: "/projects/blog",
    techStack: ["Next.js", "Tailwind", "Sanity.io"],
  },
];

export default function Project() {
  return (
    <section className="px-6 container mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        My Projects
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Centered Button for "All Projects" */}
      <div className="flex justify-center mt-10">
        <Link href="/projects">
          <button className="px-3 py-2 text-lg font-semibold rounded-lg transition-all duration-300 bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:scale-105 hover:shadow-lg">
            All Projects
          </button>
        </Link>
      </div>
    </section>
  );
}
