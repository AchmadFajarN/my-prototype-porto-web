import React from 'react'
import './style/main.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

const App = () => {
  return (
    <div className='font-poppins min-h-screen relative w-[100%] overflow-x-hidden text-slate-200'>
      <Header />
      <Main />
      Hello world
    </div>
  )
}

export default App