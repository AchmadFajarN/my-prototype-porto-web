import React from 'react'

const Hamburger = ({hamburgerActive, hamburgerActiveHandler}) => {
  
  return (
    <div onClick={hamburgerActiveHandler} className='flex flex-col gap-1.5 cursor-pointer md:hidden'>
        <div className={`w-6 h-0.5 bg-slate-200 transition-all duration-500 ease-in-out ${hamburgerActive? 'rotate-45 origin-top-left' : 'rotate-0'}`}></div>
        <div className={`w-6 h-0.5 bg-slate-200 transition-all duration-500 ease-in-out ${hamburgerActive? 'scale-0' : 'scale-100'} `}></div>
        <div className={`w-6 h-0.5 bg-slate-200 transition-all duration-500 ease-in-out ${hamburgerActive? '-rotate-45 origin-bottom-left': 'rotate-0'} `}></div>
    </div>
  )
}

export default Hamburger