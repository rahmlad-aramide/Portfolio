import React, { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import Toggler from './Toggler'

const Navbar = ({darkMode, color, handleTheme}) => {
  // let navBg = darkMode? '#000000' : '#ffffff';
  // console.log('navBg is', navBg)
  const navRef = useRef()
  const showMenu = () => {
    navRef.current.classList.toggle('translate-x-[100%]');
  }
  const pathname = window.location.pathname;
  console.log(pathname);
  return (
    <nav className={`w-full bg-${color.background} transition duration-500 flex justify-center h-fit`}>
    <div className={`flex w-full fixed md:static max-w-[1200px] mx-auto justify-between transition duration-500 bg-${color.background} text-${color.foreground} backdrop-blur h-16 px-4 md:px-0 z-20`}>
        <div className='flex my-auto'>
            <Link to='/' className={`font-logo text-md sm:text-2xl border-2 border-x-0 border-white border-${color.foreground} border-gradient`}>Dev. Rahmlad</Link>
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex font-body uppercase my-auto'>
            <NavLink to="/" end className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Home</NavLink>
            <NavLink to='/about' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>About</NavLink>
            <NavLink to='/tech-stack' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Tech Stack</NavLink>
            <NavLink to='/projects' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Projects</NavLink>
            <NavLink to='/contact' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Contact</NavLink>
        </div>

        {/* Toggle button */}
        <div className='my-auto'>
          <Toggler color={color} handleTheme={handleTheme} />
        </div>

        {/* Mobile nav & toggler */}
        <div className='flex md:hidden'>
          <button onClick={showMenu} className="flex pt-[1rem] absolute right-2 md:hidden p-3 transition active:scale-90">
              <FaBars size={30} />
          </button>
          <div ref={navRef} className={`flex translate-x-[100%] z-10 md:hidden transition flex-col w-[70%] items-center font-body uppercase my-auto h-screen fixed top-0 right-0 bg-${color.background} text-${color.foreground} backdrop-blur`}>
              <div className='flex justify-center mb-4 mt-[50%]' onClick={showMenu}>
                <NavLink to="/" className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')} end>Home</NavLink>
              </div>
              <div className='flex justify-center my-4' onClick={showMenu}>
                <NavLink to='/about' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>About</NavLink>
              </div>
              <div className='flex justify-center my-4' onClick={showMenu}>
                <NavLink to='/tech-stack' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Tech Stack</NavLink>
              </div>
              <div className='flex justify-center my-4' onClick={showMenu}>
                <NavLink to='/projects' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Projects</NavLink>
              </div>
              <div className='flex justify-center my-4' onClick={showMenu}>
                <NavLink to='/contact' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Contact</NavLink>
              </div>
              <button onClick={showMenu} className="flex absolute right-2 md:hidden p-3 ease-in transition duration-500 active:scale-90">
                <FaTimes size={40}/>
              </button>
          </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar;