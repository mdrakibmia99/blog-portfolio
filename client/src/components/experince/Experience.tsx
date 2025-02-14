/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import "react-vertical-timeline-component/style.min.css";
import { fadeTop } from "../About/motion";

// Import icons from react-icons
import { FaReact,  FaFacebook, FaLaptopCode, FaRobot } from "react-icons/fa";

// Fix Next.js SSR issue
const VerticalTimeline = dynamic(
  () => import("react-vertical-timeline-component").then((mod) => mod.VerticalTimeline),
  { ssr: false }
);

const VerticalTimelineElement = dynamic(
  () => import("react-vertical-timeline-component").then((mod) => mod.VerticalTimelineElement),
  { ssr: false }
);

// Experience Data
const experiences = [
  {
    title: "Web Developer",
    company_name: "Freelancer (2021)",
    icon: <FaLaptopCode size={30} />,
    iconBg: "#1D4ED8", // Cyan-600
    date: "2021",
    points: [
      "Built responsive websites using HTML, CSS, and JavaScript.",
      "Optimized website performance and ensured cross-browser compatibility.",
      "Worked on eCommerce platforms and simple business websites.",
      "Collaborated with clients to deliver tailored web solutions.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Freelancer (2022)",
    icon: <FaReact size={30} />,
    iconBg: "#61DAFB", // React Blue
    date: "2022",
    points: [
      "Developed interactive web applications using React.js.",
      "Integrated APIs for dynamic content loading and real-time features.",
      "Improved UI/UX based on user feedback and design principles.",
      "Optimized performance with React Hooks and state management.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "Freelancer (2023)",
    icon: <FaFacebook size={30} />,
    iconBg: "#232931", // Dark Background for Next.js
    date: "2023",
    points: [
      "Built full-stack applications using Next.js and Node.js.",
      "Utilized server-side rendering (SSR) and static site generation (SSG) for SEO optimization.",
      "Developed API routes and integrated with databases like MongoDB.",
      "Focused on performance improvements and code splitting for faster load times.",
    ],
  },
  {
    title: "AI Developer on Fiverr",
    company_name: "Freelancer (2023)",
    icon: <FaRobot size={30} />,
    iconBg: "#10B981", // Green for AI
    date: "2023",
    points: [
      "Utilized AI tools to automate processes and enhance workflows.",
      "Worked on AI-based chatbots and custom solutions for clients.",
      "Integrated machine learning models to predict trends and improve decision-making.",
      "Offered consultation services for businesses adopting AI technologies.",
    ],
  },
];

const ExperienceCard = ({ experience }: { experience: any }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #10b981" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={experience.icon}
    >
      <div>
        <h3 className="text-white text-lg font-bold">{experience.title}</h3>
        <p className="text-gray-400 text-sm font-semibold mt-1">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-4 list-disc ml-5 space-y-2">
        {experience?.points?.map((point: string, index: number) => (
          <li key={index} className="text-gray-300 text-sm tracking-wide">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div variants={fadeTop} initial="hidden" animate="visible">
        <p className="text-center text-gray-400 text-sm uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-black dark:text-white mt-2">
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-16">
        <VerticalTimeline className="custom-vertical-timeline">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
