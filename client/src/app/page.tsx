// import About from "@/components/About/About";
import About from "@/components/About/About";
// import AboutLeft from "@/components/About/AboutLeft";
import Blog from "@/components/blog/Blog";
import Experience from "@/components/experince/Experience";
import Hero from "@/components/hero/Hero";
import Project from "@/components/project/Project";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Experience/>
       {/* <AboutLeft/> */}
      <Project />
      <Blog />
    </div>
  );
}
