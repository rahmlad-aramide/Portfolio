import React, { useContext } from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaWhatsapp,
  } from "react-icons/fa";
import { ThemeContext } from '../Context';

const Footer = ({darkMode}) => {
  const color = useContext(ThemeContext)

  const theme = darkMode? color.dark : color.light;
  return (
    <div className={`flex flex-row bg-${theme.background} text-${theme.foreground} px-4 md:px-20 h-16 items-center justify-between`}>
        <div className={`flex bg-${theme.background} text-${theme.foreground}`}>
        <div className="flex">
          <a href="https://www.linkedin.com/in/Rahmlad/" target="blank">
            <FaLinkedin size={40} className="hover:scale-125 mr-2 md:mr-4 transition duration-500" />
          </a>
          <a href="https://github.com/rahmlad-aramide">
            <FaGithub size={40} className="hover:scale-125 mr-2 md:mr-4 transition duration-500" />
          </a>
          <a href="https://twitter.com/Dev_Rahmlad">
            <FaTwitter size={40} className="hover:scale-125 mr-2 md:mr-4 transition duration-500" />
          </a>
          <a href="https://facebook.com/abdrahman.oladimeji.aramide/">
            <FaFacebook size={40} className="hover:scale-125 mr-2 md:mr-4 transition duration-500" />
          </a>
          <a href="https://instagram.com/rahmlad">
            <i className="fab fa-instagram fa-2x animatedGrow"></i>
          </a>
          <a href="wa.me/2349023600083">
            <FaWhatsapp size={40} className="hover:scale-125 mr-2 md:mr-4 transition duration-500" />
          </a>
        </div>
        {/* <div className="flex z-0 absolute bottom-4 md:bottom-10 left-4 md:left-20">
        <div className="flex">
          <a href="https://www.linkedin.com/in/Rahmlad/" target="blank">
            <FaLinkedin
              size={40}
              className={`text-${color.foreground} hover:scale-125 mr-2 md:mr-4 transition duration-500`}
            />
          </a>
          <a href="https://github.com/rahmlad-aramide">
            <FaGithub
              size={40}
              className={`text-${color.foreground} hover:scale-125 mr-2 md:mr-4 transition duration-500`}
            />
          </a>
          <a href="https://twitter.com/Dev_Rahmlad">
            <FaTwitter
              size={40}
              className={`text-${color.foreground} hover:scale-125 mr-2 md:mr-4 transition duration-500`}
            />
          </a>
          <a href="https://facebook.com/abdrahman.oladimeji.aramide/">
            <FaFacebook
              size={40}
              className={`text-${color.foreground} hover:scale-125 mr-2 md:mr-4 transition duration-500`}
            />
          </a>
          <a href="https://instagram.com/rahmlad">
            <i className="fab fa-instagram fa-2x animatedGrow"></i>
          </a>
          <a href="wa.me/2349023600083">
            <FaWhatsapp
              size={40}
              className={`text-${color.foreground} hover:scale-125 mr-2 md:mr-4 transition duration-500`}
            />
          </a>
        </div>
      </div> */}
      </div>
        <div> Copyright - Rahmlad &copy; 2022</div>
    </div>
  )
}

export default Footer