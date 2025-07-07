import React from 'react'
import { Github, Mail, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-primary'>
        <div className='w-full h-full px-8 py-16 bg-gray-700/25'>
            <div className='md:flex justify-between items-center'>
                <div>
                    <h3 className='text-indigo-500 font-bold'>AchmadFajarNugraha</h3>
                    <p className='text-slate-500 mt-2'>Building the future, one project at a time.</p>
                </div>
                <div className='flex gap-4 justify-center mt-8 md:m-0'>
                    <a href="" className='block p-2 rounded-full bg-gray-700/25 group'><Linkedin className='text-slate-500 group-hover:text-secondary transition-all duration-300 ease-in-out'/></a>
                    <a href="" className='block p-2 rounded-full bg-gray-700/25 group'><Github className='text-slate-500 group-hover:text-secondary transition-all duration-300 ease-in-out'/></a>
                    <a href="" className='block p-2 rounded-full bg-gray-700/25 group'><Mail className='text-slate-500 group-hover:text-secondary transition-all duration-300 ease-in-out'/></a>
                </div>
            </div>
            <hr className='my-8 text-slate-500' />
            <div className='flex flex-col items-center md:flex-row md:justify-between'>
                <p className='text-slate-500 text-sm'>© 2025 AchmadFajar. All rights reserved.</p>
                <div className="flex gap-8 mt-2 md:m-0">
                    <a href="#hero" className='text-slate-500 text-sm hover:text-indigo-500 duration-300 ease-in-out'>Privacy Policy</a>
                    <a href="#hero" className='text-slate-500 text-sm hover:text-indigo-500 duration-300 ease-in-out'>Terms of Service</a>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer
