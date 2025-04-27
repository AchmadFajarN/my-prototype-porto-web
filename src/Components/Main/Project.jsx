import { motion } from 'motion/react' 
import { ExternalLink, Github } from 'lucide-react';
import React from 'react'
import { useState } from 'react';

const Project = () => {
  const initial = {
    opacity: 0,
    translateY: 25,
  };
  const animate = {
    opacity: 1,
    translateY: 0,
  };
  const tag = ['All', 'React', 'MonggoDB', 'Node.js', 'Firebase', 'TypeScript']
  const project = [
    {
      name: 'E-Commerce-Platform',
      title: 'A full-featured online shopping platform with cart, checkout, and payment integration.',
      tag: ['React', 'Node.js', 'MonggoDB', 'Stripe'],
      img: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Task Management App',
      title: 'A productivity application to manage tasks, projects, and deadlines.',
      tag: ['React', 'Firebase', 'Tailwindcss'],
      img: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Weather Dashboard',
      title: 'A weather application showing forecasts and historical data with interactive charts.',
      tag: ['JavaScript', 'REST API', 'Chart Js'],
      img: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Social Media Dashboard',
      title: 'Analytics dashboard for social media accounts with data visualization.',
      tag: ['Vue.js', 'TypeScript', 'D3.js'],
      img: 'https://images.pexels.com/photos/7172646/pexels-photo-7172646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Fitnes Tracker',
      title: 'Mobile-first application to track workouts, nutrition, and health metrics.',
      tag: ['React Native', 'GraphQL', 'MonggoDb'],
      img: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Podcast Platform',
      title: 'Audio streaming platform with podcast discovery and playback features.',
      tag: ['React', 'AWS', 'Node.js'],
      img: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
  const [dataProj, setDataProj] = useState(project);

  const buttonProjectHandler = (tag) => {
    const filter = project.filter((item) => item.tag.includes(tag));
    setDataProj(filter);

    if (tag === 'All') {
      setDataProj(project)
    }
  }
  return (
    <section 
    className='my-24 px-8'>
      <motion.h2 
        initial={initial}
        whileInView={animate}
        transition={{
          duration: 0.5,
          ease: ['easeInOut'],
        }}
        id='about'
        className='text-3xl font-bold text-center'>My Project</motion.h2>
      <motion.p
        initial={initial}
        whileInView={animate} 
        transition={{
          duration: 0.6,
          ease: ['easeInOut'],
        }}
        className='text-slate-500 my-6 text-center md:text-left'>Here are some of my recent projects that showcase my skills and experience.</motion.p>
      <div className='w-24 h-1 bg-secondary'></div>

      <div className='mt-16'>
        <div className='flex gap-2 flex-wrap justify-center'>
          { tag.map((d) => (
            <button onClick={ () => {buttonProjectHandler(d)}}  className='px-4 py-1 cursor-pointer hover:bg-indigo-900 duration-300 ease-in-out rounded-full bg-secondary'>{ d }</button>
          )) }
        </div>
        <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          { dataProj.map((proj, index) => (
            <motion.div 
            initial={initial}
            whileInView={animate}
            transition={{duration: `0.${5 + index}`, ease: ['easeInOut']}}
            className='shadow-md flex pb-8 flex-col h-[30rem] rounded-xl bg-gray-700/25 overflow-hidden'>
              <div className="h-1/2 overflow-hidden">
                <img src={proj.img} alt="img" className='w-full h-full object-cover object-bottom hover:scale-[1.1] transition-all duration-300 ease-in-out' />
              </div>
              <div className="pt-4 px-4">
                <h3 className='text-xl font-bold my-4'>{ proj.name }</h3>
                <p className='text-md text-slate-500 mb-4'>{ proj.title}</p>
                { proj.tag.map((t) => (
                  <span className='mr-2 text-sm py-1 px-2 bg-gray-800 rounded-full'>{ t }</span>
                )) }
                <div className="flex gap-4 mt-4">
                  <a href='#' className='flex items-center gap-2 hover:text-secondary duration-300 ease-in-out text-sm'>
                    <ExternalLink size={20} />
                    <p>Live Demo</p>
                  </a>
                  <a href="" className='flex items-center gap-2 hover:text-secondary duration-300 ease-in-out text-sm'>
                    <Github size={20} />
                    <p>View Code</p>
                  </a>
                </div>
              </div>
            </motion.div>
          )) }
        </div>
      </div>
    </section>
  )
}

export default Project