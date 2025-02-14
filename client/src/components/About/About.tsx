'use client'
import { motion } from "motion/react"

import AboutLeft from './AboutLeft';
import { fadeTop, motionStep } from './motion';
const About = () => {
  return (
    <section  className="mt-16 text-white h-auto mb-5">
      <motion.div variants={fadeTop} {...motionStep} className='col-span-3' >
        <div className="text-center mt-8">
          <h3 className="text-4xl mb-10 font-semibold">
            <span className="text-cyan-600 font-bold mr-2">1.</span>
            <span className="text-black dark:text-white text-shadow">About Me</span>
          </h3>

          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div className="p-2 text-start lg:w-1/2 md:w-1/2 w-full z-0">
              <AboutLeft />
            </div>
            <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center lg:w-1/2 md:w-1/2 w-full">
              <div className=" lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg z-0 ">
                {/* <img
                  loading="lazy"
                  src={aboutImg}
                  alt=""
                  className="w-full rotate-6  hover:rotate-0 duration-300 ease-in-out object-cover bg-cyan-600 rounded-xl opacity-70  "
                /> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;