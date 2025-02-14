"use client";
import BlogCard from "@/components/blog/BlogCard ";
import Link from "next/link";
import { fadeTop, motionStep } from "../About/motion";
import { motion } from "motion/react";

const blogs = [
  {
    _id: "1",
    title: "Blog 1",
    description:
      "A deep dive into Next.js and why it's a great framework for building modern web apps.",
    image:
      "https://www.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg",
    link: "/blogs/nextjs",
  },
  {
    _id: "2",
    title: "Blog 2",
    description:
      "Learn how to optimize and structure your Tailwind CSS code efficiently.",
    image:
      "https://www.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg",
    link: "/blogs/tailwind",
  },
  {
    _id: "3",
    title: "Blog 3",
    description:
      "Learn how to optimize and structure your Tailwind CSS code efficiently.",
    image:
      "https://www.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg",
    link: "/blogs/tailwind",
  },
];

export default function Blog() {
  return (
    <section className="mt-16  text-white h-auto container mx-auto">
      <motion.div variants={fadeTop} {...motionStep} className="col-span-3">
        <div className="text-center mt-8 px-6">
          <h3 className="text-4xl mb-10 font-semibold">
            <span className="text-cyan-600 font-bold mr-2">1.</span>
            <span className="text-black dark:text-white text-shadow">
              Blog
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 px-2">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} {...blog} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/blog">
              <button className="px-3 py-2 text-lg font-semibold rounded-lg transition-all duration-300 bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:scale-105 hover:shadow-lg">
                All Projects
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
