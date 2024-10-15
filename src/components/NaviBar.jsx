import React, { useState } from 'react'


const NaviBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = ()=> {
        setIsMenuOpen(!isMenuOpen) //:false = true
    }
    console.log(isMenuOpen)


  return (

<>
    {/* <nav className='bg-blue-500 p-4'>
        <div className="flex items-center justify-between"> */}
        {/* Logo */}
        {/* <div className="text-white text-2xl font-bold flex">
        <img className='h-8 w-10' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8
        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" alt="" />
            Tailwind</div> */}
      
    {/* menu bar */}
{/* 
    <div className=' md:hidden'>
        <button className=' text-white ' onClick={toggleMenu}>
        <svg
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={3}
        viewBox='0 0 24 24'
        className='w-8 h-8'
        >
        <path d='M4 6h16M4 12h16M4 18h16'></path>
        </svg>
        </button>
    </div> */}
    
    {/* <ul className=' hidden md:flex gap-6 justify-end items-center'>
        <li><a href="#" className=' text-white text-xl shadow-lg cursor-pointer p-4'>Home</a></li>
        <li><a href="#" className=' text-white text-xl shadow-lg cursor-pointer p-4'>About</a></li>
        <li><a href="#" className=' text-white text-xl shadow-lg cursor-pointer p-4'>Services</a></li>
        <li><a href="#" className=' text-white text-xl shadow-lg cursor-pointer p-4'>Contact</a></li>

    </ul>
    </div> */}
    
    {/* mobile menu */}
    {/* {isMenuOpen ? (
          <ul className=' flex-col md:hidden'>
          <li className=' py-1'><a href="#" className=' text-white text-lg shadow-lg '>Home</a></li>
          <li className=' py-1'><a href="#" className=' text-white text-lg shadow-lg '>About</a></li>
          <li className=' py-1'><a href="#" className=' text-white text-lg shadow-lg '>Services</a></li>
          <li className=' py-1'><a href="#" className=' text-white text-lg shadow-lg '>Contact</a></li>
      </ul>  
    ) : null}
    
    
    </nav> */}



{/* </div> */}

</>
  )
}

export default NaviBar