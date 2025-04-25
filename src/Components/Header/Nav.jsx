import React from 'react'

const Nav = ({navActivate}) => {
  return (
    <nav className={`absolute ${navActivate ? 'translate-y-28':'-translate-y-50'} transition-all duration-400 ease-in-out ${navActivate? 'bg-primary shadow-md': ''} py-4 px-8 left-0 w-full md:static md:translate-0 md:w-sm md:p-0`}>
        <ul className='flex gap-4 flex-col md:flex-row md:justify-end'>
            <li><a href="" className='hover:text-indigo-500 duration-300 ease-in-out'>Home</a></li>
            <li><a href="" className='hover:text-indigo-500 duration-300 ease-in-out'>About</a></li>
            <li><a href="" className='hover:text-indigo-500 duration-300 ease-in-out'>Project</a></li>
            <li><a href="" className='hover:text-indigo-500 duration-300 ease-in-out'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Nav