import Image from "next/image";
import Link from "next/link";

const blogPost = {
  title: "Understanding React Server Components",
  description:
    "React Server Components (RSC) are a new paradigm in React, allowing for improved performance by shifting rendering logic to the server.",
  image: "https://www.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg",
  content: `
    React Server Components (RSC) allow developers to offload rendering from the client to the server, reducing bundle size and improving performance. 
    Unlike traditional React components, RSCs do not run on the client side, meaning they do not include event handlers or local state.
    
    This new model enables developers to build faster applications with improved SEO and reduced JavaScript execution time on the client.
    
    In this article, we'll explore the core principles of React Server Components, how they differ from Client Components, and how you can leverage them in your Next.js projects.
  `,
  author: "John Doe",
  date: "February 15, 2025",
};

export default function BlogDetails() {
  return (
    <div className="container mx-auto max-w-3xl p-6">
      {/* Back Button */}
      <div className="mb-4">
        <Link href="/blog">
          <button className="text-cyan-500 dark:text-cyan-400 hover:underline flex items-center">
            ← Back to Blog
          </button>
        </Link>
      </div>

      {/* Blog Image */}
      <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          width={800}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">{blogPost.title}</h1>

      {/* Meta Info */}
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
        By <span className="font-semibold">{blogPost.author}</span> • {blogPost.date}
      </p>

      {/* Blog Content */}
      <div className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        {blogPost.content.split("\n").map((para, index) => (
          <p key={index} className="mb-4">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
