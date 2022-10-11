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
  console.log(theme)
  return (
    <div className='flex flex-row bg-[#333] px-4 md:px-20 text-white h-16 items-center justify-between'>
        <div className="flex">
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
      </div>
        <div> Copyright - Rahmlad &copy; 2022</div>
    </div>
  )
}

export default Footer