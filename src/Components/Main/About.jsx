import React from 'react'
import { FileArchiveIcon, MapPin, Mail, Palette } from 'lucide-react'
import { motion } from 'motion/react'

const About = () => {
  const initial = {
    opacity: 0,
    translateY: 25,
  };
  const animate = {
    opacity: 1,
    translateY: 0,
  };
  return (
    <section className='my-16 px-8'>
        <motion.h2 
        initial={initial}
        whileInView={animate}
        transition={{
          duration: 0.5,
          ease: ['easeInOut'],
        }}
        id='about'
        className='text-3xl font-bold'>About Me</motion.h2>
        <motion.p
        initial={initial}
        whileInView={animate} 
        transition={{
          duration: 0.6,
          ease: ['easeInOut'],
        }}
        className='text-slate-500 my-6'>Here you will find information about me, what I do, and my current skills.</motion.p>
        <div className='w-24 h-1 bg-secondary'></div>

        <div className='mt-16 flex flex-col gap-16 md:gap-8 md:flex-row'>
          <motion.div 
          initial={initial}
          whileInView={animate}
          transition={{
            duration: 0.7,
            ease: ['easeInOut'],
          }}
          className='md:flex-1/2'>
            <h3 className='text-xl font-bold'>Got to know me</h3>
            <p className='mt-6 text-slate-500'>I'm a Frontend Developer with a passion for building beautiful and functional web applications. I enjoy the creative process of turning ideas into reality.</p>
            <br />
            <p className='text-slate-500'>With a background in design and development, I bring a unique perspective to my work. I'm constantly learning new technologies and skills to stay ahead in the rapidly evolving web development landscape.</p>
            <br />
            <p className='text-slate-500'>
            My expertise is in building complex web applications, creating intuitive user interfaces, and implementing responsive designs. I'm also skilled at optimizing applications for maximum performance.
            </p>
            <br />
            <p className='text-slate-500'>When I'm not coding, you can find me exploring nature, reading books, or experimenting with new technologies. I'm always open to new opportunities and collaborations.</p>
            <button className='w-full md:w-40 flex gap-2 justify-center items-center bg-secondary mt-2 md:mt-4 py-2 hover:bg-indigo-900 transition-all duration-300 ease-in-out cursor-pointer rounded-md'>
              <FileArchiveIcon size={20} /> Download CV
            </button>
          </motion.div>
          <motion.div 
          initial={initial}
          whileInView={animate}
          transition={{
            duration: 0.8,
            ease: ['easeInOut'],
          }}
          className='md:flex-1/2'>
            <h3 className='text-xl font-bold'>Personal Info</h3>
            <div className='grid grid-rows-3 gap-4 mt-6 md:grid-cols-2 md:grid-rows-2'>
              <div className='px-8 py-4 bg-slate-700/25 rounded-xl'>
                <div className='flex items-center gap-3 mb-4'>
                  <MapPin className='text-secondary' />
                  <p className='font-medium text-lg'>Location</p>
                </div>
                <p className='text-slate-500'>West Java, Indonesia</p>
              </div>
              <div className='px-8 py-4 bg-slate-700/25 rounded-xl'>
                <div className='flex items-center gap-3 mb-4'>
                  <Mail className='text-secondary' />
                  <p className='font-medium text-lg'>Email</p>
                </div>
                <p className='text-slate-500'>achmadfajar712@gmail.com</p>
              </div>
              <div className='px-8 py-4 bg-slate-700/25 rounded-xl'>
                <div className='flex items-center gap-3 mb-4'>
                  <Palette className='text-secondary' />
                  <p className='font-medium text-lg'>Fun Fact</p>
                </div>
                <p className='text-slate-500'>I Like Drawing</p>
              </div>
            </div>
          </motion.div>
        </div>
    </section>
  )
}

export default About