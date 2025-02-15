'use client'
import { useState } from "react";
import AdminBlogCard from "./AdminBlogCard";

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([
    {
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
    },
    {
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
    },
    {
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
    },
  ]);

  // Delete a blog
  const handleDelete = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };
  const [search, setSearch] = useState("");

  // const filteredData = data?.data?.filter((item) =>
  //   item.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="container mx-auto px-2 p-6">
           <div className="px-2 md:px-6 my-5">
        <h3 className="text-center md:text-4xl text-2xl font-bold my-2">
          Manage Blog
        </h3>
        <div className="flex justify-between items-center">
          <input
            className="p-2 my-3 border-black border-2 text-black rounded-md"
            type="text"
            placeholder="Search name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Add Blog</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog,index:number) => (
          <AdminBlogCard blog={blog} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default AdminBlog;
