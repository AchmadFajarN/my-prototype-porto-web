import React from 'react';
import { Linkedin, Mail, Github, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div 
    className='h-[100vh] relative px-8 py-2 text-center bg-gradient-to-r from-slate-800 to-bg-primary flex flex-col gap-2 items-center pt-30'>
      <motion.h1 
      initial={{translateY: 25, opacity: 0}}
      whileInView={{translateY: 0, opacity: 1}}
      transition={{duration: 0.5, ease: ['easeInOut']}}
      className=' text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold text-slate-100'>Hello I'm <span className='block md:inline text-indigo-500'>Achmad Fajar</span></motion.h1>
      <motion.h2 
      initial={{translateY: 25, opacity: 0}}
      whileInView={{translateY: 0, opacity: 1}}
      transition={{duration: 0.6, ease: ['easeInOut']}}
      className='mt-4 text-slate-400 text-xl md:text-2xl lg:text-3xl tracking-wide'>Web Developer</motion.h2>
      <motion.p
      initial={{translateY: 25, opacity: 0}}
      whileInView={{translateY: 0, opacity: 1}}
      transition={{duration: 0.7, ease: ['easeInOut']}} 
      className='mt-8 max-w-lg text-slate-400 md:w-md lg:w-lg text-sm sm:text-lg'>I build exceptional digital experiences with modern technologies. Focused on creating clean, user-friendly, and innovative solutions.</motion.p>
      <motion.div 
      initial={{translateY: 25, opacity: 0}}
      whileInView={{translateY: 0, opacity: 1}}
      transition={{duration: 0.8, ease: ['easeInOut']}}
      className='mt-8 flex gap-4 md:gap-8'>
        <a href="" className="px-4 py-2 md:px-6 md:py-3 flex justify-center items-center rounded-lg bg-secondary hover:bg-indigo-900 transition-all duration-300 ease-in-out">Get in Touch</a>
        <a href="" className="px-4 py-2 md:px-6 md:py-3 rounded-lg border-2 text-secondary border-secondary hover:bg-slate-300/5 transition-all duration-300 ease-in-out">View My Work</a>
      </motion.div>
      <motion.div 
      initial={{translateY: 25, opacity: 0}}
      whileInView={{translateY: 0, opacity: 1}}
      transition={{duration: 0.9, ease: ['easeInOut']}}
      className='mt-8 flex gap-2'>
        <a href="" className='block p-2 rounded-full bg-gray-700/25 group'><Linkedin className='text-slate-500 group-hover:text-secondary transition-all duration-300 ease-in-out'/></a>
        <a href="" className='block p-2 rounded-full bg-gray-700/25 group'><Github className='text-slate-500 group-hover:text-secondary transition-all duration-300 ease-in-out'/></a>
        <a href="" className='block p-2 rounded-full bg-gray-700/25 group'><Mail className='text-slate-500 group-hover:text-secondary transition-all duration-300 ease-in-out'/></a>
      </motion.div>
      <a href="" className='absolute bottom-10 animate-bounce text-slate-500 transition-colors duration-300 ease-in-out hover:text-secondary'>
        <ArrowDown size={25} />
      </a>
    </div>
  )
}

export default Hero