// import About from "@/components/About/About";
import About from "@/components/About/About";
import AllBlog from "@/components/blog/AllBlog";
// import AboutLeft from "@/components/About/AboutLeft";

import Education from "@/components/education/Education";
import Experience from "@/components/experince/Experience";
import Hero from "@/components/hero/Hero";
import Project from "@/components/project/Project";
import Link from "next/link";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  // console.log("Data: ", data);
  const blogs = data?.data;
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      {/* <AboutLeft/> */}
      <Project />
      <Education />
      <div>
        <AllBlog blogs={blogs} limit={3} />
        <div className="flex justify-center my-10">
          <Link href="/blog">
            <button className="px-3 py-2 text-lg font-semibold rounded-lg transition-all duration-300 bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:scale-105 hover:shadow-lg">
              All Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
