import Image from "next/image";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import img from "@/assets/images/portfolioimage.png";
const Hero = () => {
  return (
    <div className="bg-[url('https://github.com/mdrakibmia99/blog-portfolio/blob/main/client/src/assets/images/herobg.png?raw=true')] bg-cover bg-no-repeat bg-center">
      <div className="flex items-center justify-center min-h-screen py-12 bg-opacity-60 container mx-auto ">
        {" "}
        {/* Adding a slight overlay */}
        <div className="container flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Left Side - Your Details */}
          <div className="text-center md:text-left space-y-4 text-white">
            <p className="text-md text-gray-300">Hi, I&apos;m </p>
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              <span className="text-red-400 !font-medium !bg-clip-text !text-[2rem] !leading-normal md:!text-7xl md:!leading-[87px] font-serif justify-center lg:justify-start">Md Rakib Mia</span>
            </h1>
            <p className="text-lg text-gray-300">Full Stack Developer</p>
            <p className="text-base text-gray-400 max-w-sm mx-auto md:mx-0">
              Passionate about building impactful web apps and delivering
              high-quality solutions.
            </p>

            <div className="mt-4 flex space-x-4 text-gray-600 dark:text-gray-400">
              <a
                href="https://www.facebook.com/devrakibmia"
                target="_blank"
                className="hover:text-red-400  duration-300 "
              >
                {" "}
                <FaFacebookF className="w-7 h-7" />
              </a>
              <a
                href="https://wa.me/+8801913547448"
                target="_blank"
                className="hover:text-red-400  duration-300 "
              >
                {" "}
                <FaWhatsapp className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/md-rakib-mia"
                target="_blank"
                className="hover:text-red-400  duration-300 "
              >
                {" "}
                <FaLinkedinIn className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="image-container w-full md:w-1/2 max-w-md">
            <Image
              width={600}
              height={400}
              src={img} // Replace with your actual image path
              alt="Your Image"
              className="rounded-lg drop-shadow-[0_10px_15px_rgba(255,0,0,0.2)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
