import React, { useContext } from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaWhatsapp,
  } from "react-icons/fa";
import { ThemeContext } from '../Context';

const Footer = ({ darkMode}) => {
  const color = useContext(ThemeContext)

  const theme = darkMode? color.dark : color.light;
  return (
    <div className={`flex flex-row bg-${theme.background} text-${theme.foreground} px-4 py-2 md:px-20 h-35 items-center justify-between`}>
        <div className={`flex justify-between bg-${theme.background} text-${theme.foreground}`}>
        <div className="flex">
          <a href="https://www.linkedin.com/in/Rahmlad/" target="blank">
            <FaLinkedin size={35} className="hover:scale-125 mr-2 md:mr-4 transition duration-500" />
          </a>
          <a href="https://github.com/rahmlad-aramide">
            <FaGithub size={35} className="hover:scale-125 mr-2 md:mr-4 transition duration-500" />
          </a>
          <a href="https://twitter.com/Dev_Rahmlad">
            <FaTwitter size={35} className="hover:scale-125 mr-2 md:mr-4 transition duration-500" />
          </a>
          <a href="https://facebook.com/abdrahman.oladimeji.aramide/">
            <FaFacebook size={35} className="hover:scale-125 mr-2 md:mr-4 transition duration-500" />
          </a>
          <a href="https://instagram.com/rahmlad">
            <i className="fab fa-instagram fa-2x animatedGrow"></i>
          </a>
          <a href="wa.me/2349023600083">
            <FaWhatsapp size={35} className="hover:scale-125 mr-2 md:mr-4 transition duration-500" />
          </a>
        </div>
      </div>
      <div className={`bg-${theme.background} text-${theme.foreground} text-right`}> Copyright - Rahmlad &copy; 2022</div>
    </div>
  )
}

export default Footer