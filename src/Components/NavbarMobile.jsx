import { useContext, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../Context";
import Toggler from "./Toggler";
import { motion } from "framer-motion";

const Navbar = () => {
  const windowWidth = window.innerWidth

  const { theme } = useContext(ThemeContext);
  const color = theme;
  const navRef = useRef();
  const showMenu = () => {
    navRef.current.classList.toggle("translate-x-[100%]");
  };

  const navVariants = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 2.5,
        type: 'spring',
        stiffness: 120,
        damping: 10,
      }
    }
  }

  return (
    <nav 
      style={{ backgroundColor: color.background, color: color.foreground }}
      className={`transition duration-500 flex md:hidden justify-center h-fit overflow-hidden`}
    >
      <div  style={{ width: windowWidth }} className={color.name === 'light'? `fixed z-40 h-16 w-full md:hidden bg-white/50 backdrop-blur-lg overflow-hidden`: `fixed z-40 h-16 w-full md:hidden bg-[${color.background}] backdrop-blur-lg` }></div>
      <div style={{ maxWidth: windowWidth }} 
        className={`flex w-full fixed md:static  mx-auto justify-between h-16 px-4 md:px-0 z-50 overflow-hidden`}
      >
        <motion.div variants={navVariants} initial="hidden" animate="visible" className="flex my-auto">
          <Link
            to="/"
            className={`font-logo text-md sm:text-2xl border-2 border-x-0 border-white border-gradient`}
          >
            Dev. Rahmlad
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div  variants={navVariants} initial="hidden" animate="visible" className="hidden md:flex font-body uppercase my-auto">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "px-4 underline decoration-2 underline-offset-4"
                : "px-4 hover:underline decoration-2 underline-offset-4"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "px-4 underline decoration-2 underline-offset-4"
                : "px-4 hover:underline decoration-2 underline-offset-4"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/tech-stack"
            className={({ isActive }) =>
              isActive
                ? "px-4 underline decoration-2 underline-offset-4"
                : "px-4 hover:underline decoration-2 underline-offset-4"
            }
          >
            Tech Stacks
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "px-4 underline decoration-2 underline-offset-4"
                : "px-4 hover:underline decoration-2 underline-offset-4"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "px-4 underline decoration-2 underline-offset-4"
                : "px-4 hover:underline decoration-2 underline-offset-4"
            }
          >
            Contact
          </NavLink>
        </motion.div>

        {/* Toggle button */}
        <motion.div variants={navVariants} initial="hidden" animate="visible" className="my-auto">
          <Toggler />
        </motion.div>

        {/* Mobile nav & toggler */}
        <div className="flex md:hidden overflow-hidden">
          <motion.button variants={navVariants} initial="hidden" animate="visible"
            onClick={showMenu}
            className="flex pt-[1rem] absolute right-2 md:hidden p-3 active:scale-90"
          >
            <FaBars size={30} />
          </motion.button>
          <div
            ref={navRef}
            className={color.name === 'light'? `bg-white/50 text-2xl flex translate-x-[100%] z-10 md:hidden transition flex-col w-[70%] items-center font-body uppercase my-auto h-screen fixed top-0 right-0 backdrop-blur-lg`: `bg-black/50 text-2xl flex translate-x-[100%] z-10 md:hidden transition flex-col w-[70%] items-center font-body uppercase my-auto h-screen fixed top-0 right-0 backdrop-blur-lg`}
          >
            <div
              className="flex justify-center mb-4 mt-[50%]"
              onClick={showMenu}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 underline decoration-2 underline-offset-4"
                    : "px-4 hover:underline decoration-2 underline-offset-4"
                }
                end
              >
                Home
              </NavLink>
            </div>
            <div className="flex justify-center my-4" onClick={showMenu}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 underline decoration-2 underline-offset-4"
                    : "px-4 hover:underline decoration-2 underline-offset-4"
                }
              >
                About
              </NavLink>
            </div>
            <div className="flex justify-center my-4" onClick={showMenu}>
              <NavLink
                to="/tech-stack"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 underline decoration-2 underline-offset-4"
                    : "px-4 hover:underline decoration-2 underline-offset-4"
                }
              >
                Tech Stack
              </NavLink>
            </div>
            <div className="flex justify-center my-4" onClick={showMenu}>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 underline decoration-2 underline-offset-4"
                    : "px-4 hover:underline decoration-2 underline-offset-4"
                }
              >
                Projects
              </NavLink>
            </div>
            <div className="flex justify-center my-4" onClick={showMenu}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 underline decoration-2 underline-offset-4"
                    : "px-4 hover:underline decoration-2 underline-offset-4"
                }
              >
                Contact
              </NavLink>
            </div>
            <button
              onClick={showMenu}
              className="flex absolute right-2 md:hidden p-3 ease-in transition duration-500 active:scale-90"
            >
              <FaTimes size={40} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
