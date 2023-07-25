import React, { useContext } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Hero from "./../images/Hero.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ThemeContext } from "../Context";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const color = theme;
  
  const enterVariants = {
    hidden: {
      x: '-100vw'
    },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        delay: 0.5
      }
    }
  }
  const topVariants = {
    hidden: {
      y: '-100vh'
    },
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
      }
    }
  }
  const bottomVariants = {
    hidden: {
      y: '100vh'
    },
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        delay: 1.5
      }
    }
  }
  const opacityVariants = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        type: 'spring',
        stiffness: 120,
        damping: 10,
      }
    }
  }
  const iconVariants = {
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

  const imageVariants = {
    hidden: {
      x: '100vw'
    },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        delay: 2
      }
    }
  }

  return (
    <div
      style={{ backgroundColor: color.background, color: color.foreground }}
      className={`flex mt-10 md:mt-0 transition duration-500 min-h-screen md:min-h-[calc(100vh_-_4rem)] overflow-hidden`}
    >
      <div className="flex h-full flex-col md:flex-row w-[90%] max-w-[1200px] mx-auto my-auto overflow-hidden">
        <div className="text-center md:text-right my-14 md:my-auto w-full md:w-1/2 font-bold">
          <motion.h1 variants={topVariants} initial="hidden" animate="visible" className="text-2xl md:text-4xl py-1 font-medium flex justify-center md:justify-end">
            Hi there
            <span className="rounded w-fit">
              <img
                className="animate-wave h-10 ml-2 -mr-1"
                src="https://em-content.zobj.net/thumbs/120/samsung/349/waving-hand_1f44b.png"
                alt="👋"
              />
            </span>
            ,
          </motion.h1>
          <motion.h1 variants={enterVariants} initial="hidden" animate="visible" className="text-3xl md:text-5xl py-1">My name is</motion.h1>
          <motion.h2 variants={opacityVariants} initial="hidden" animate="visible" className="text-3xl md:text-5xl py-1 text-gradient">
            Abdrahman A.
          </motion.h2>
          <motion.h3 variants={bottomVariants} initial="hidden" animate="visible" className="text-2xl md:text-5xl pt-1 pb-8 md:pb-2">
            A Frontend Engineer
          </motion.h3>
        </div>
        <div className="flex justify-center md:justify-start w-full md:w-1/2 items-center mb-8 -mt-8 md:my-auto ml-0 md:ml-10">
          <motion.div variants={imageVariants} animate="visible" initial="hidden" className="image-gradient flex h-fit">
            <LazyLoadImage
              effect="blur"
              src={Hero}
              alt="Abdrahman Oladimeji"
              className="rounded-[50%] w-full h-full max-w-[300px] max-h-[300px]"
            />
          </motion.div>
        </div>
        <div className="flex justify-center z-0 my-10 md:absolute md:bottom-0">
          <motion.div variants={iconVariants} initial="hidden" animate="visible" className="flex">
            <a href="https://www.linkedin.com/in/Rahmlad/" target="blank">
              <FaLinkedin
                size={40}
                className={`text-${color.foreground} bg-${color.background} rounded hover:scale-125 mr-2 md:mr-4`}
              />
            </a>
            <a href="https://github.com/rahmlad-aramide">
              <FaGithub
                size={40}
                className={`text-${color.foreground} bg-${color.background} rounded-full hover:scale-125 mr-2 md:mr-4`}
              />
            </a>
            <a href="https://twitter.com/Dev_Rahmlad">
              <FaTwitter
                size={40}
                className={`text-${color.foreground} bg-${color.background} rounded hover:scale-125 mr-2 md:mr-4`}
              />
            </a>
            <a href="https://facebook.com/abdrahman.oladimeji.aramide/">
              <FaFacebook
                size={40}
                className={`text-${color.foreground} bg-${color.background} rounded-full hover:scale-125 mr-2 md:mr-4`}
              />
            </a>
            <a href="https://instagram.com/rahmlad">
              <i className="fab fa-instagram fa-2x animatedGrow"></i>
            </a>
            <a href="wa.me/2349023600083">
              <FaWhatsapp
                size={40}
                className={`text-${color.foreground} bg-${color.background} rounded hover:scale-125 mr-2 md:mr-4`}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
