// import About from "@/components/About/About";
import About from "@/components/About/About";
// import AboutLeft from "@/components/About/AboutLeft";
import Blog from "@/components/blog/Blog";
import Hero from "@/components/hero/Hero";
import Project from "@/components/project/Project";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      
       {/* <AboutLeft/> */}
      <Project />
      <Blog />
    </div>
  );
}
