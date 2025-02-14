'use client'
import Image from "next/image";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "@/assets/images/portfolioimage.png";

const Hero = () => {
  return (
    <div className="bg-[url('https://github.com/mdrakibmia99/blog-portfolio/blob/main/client/src/assets/images/herobg.png?raw=true')] 
    bg-cover bg-no-repeat bg-center min-h-[70vh] flex items-center justify-center py-12">
      
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 container mx-auto px-5 md:px-0">
        
        {/* Left Side - Your Details */}
        <div className="text-center md:text-left space-y-4 text-white">
          <p className="text-md text-gray-300">Hi, I&apos;m </p>
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            <span className="text-red-400 font-medium text-[2rem] leading-normal md:text-[76px] md:leading-[87px] font-serif">
              Md Rakib Mia
            </span>
          </h1>
          <p className="text-lg text-gray-300 md:text-[36px]">Full Stack Developer</p>
          <p className="text-base md:text-[28px] text-gray-400 max-w-lg mx-auto md:mx-0 leading-tight">
            Passionate about building impactful web apps and delivering high-quality solutions.
          </p>

          <div className="mt-4 flex space-x-4 text-gray-600  justify-center md:justify-start">
            <a href="https://www.facebook.com/devrakibmia" target="_blank" className="hover:text-red-400 duration-300">
              <FaFacebookF className="w-7 h-7" />
            </a>
            <a href="https://wa.me/+8801913547448" target="_blank" className="hover:text-red-400 duration-300">
              <FaWhatsapp className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/md-rakib-mia" target="_blank" className="hover:text-red-400 duration-300">
              <FaLinkedinIn className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Right Side - Image with Animated Border with Gaps */}
        <div className="relative flex items-center justify-center">
          {/* Animated Circular Border with Gaps */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute w-[240px] h-[240px] md:w-[350px] md:h-[350px] 
            rounded-full border-[6px] border-red-400 border-dashed"
          ></motion.div>

          {/* Image inside a fully rounded container */}
          <div className="w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-blue-900 shadow-lg relative z-10">
            <Image
              width={320}
              height={320}
              src={img} 
              alt="Your Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
