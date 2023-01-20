import React, { useContext } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import Hero from "./../images/Hero.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ThemeContext } from "../Context";

const Home = ({ darkMode }) => {
  const theme = useContext(ThemeContext);
  const color = darkMode ? theme.dark : theme.light;
  return (
    <div
      className={`flex bg-${color.background} text-${color.foreground} pt-28 transition duration-500 md:min-h-[calc(100vh_-_4rem)]`}
    >
      <div className="flex h-full flex-col md:flex-row w-[90%] max-w-[1200px] mx-auto">
        <div className="text-center md:text-left my-14 md:my-auto w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl py-1">Hi 👋,</h1>
          <h1 className="text-3xl md:text-5xl py-1">My name is</h1>
          <h2 className="text-3xl md:text-5xl py-1 text-gradient">
            Abdrahman A. <br /> <span className=""> Oladimeji</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-normal pt-1 pb-8 md:pb-2">
            A Frontend Developer
          </h3>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-1/2 items-center mb-8 -mt-8 md:my-auto mr-4 md:mr-10">
          <div className="image-gradient flex h-fit">
            <LazyLoadImage
              effect="blur"
              src={Hero}
              alt="Abdrahman Oladimeji"
              className="rounded-[50%] w-full h-full max-w-[300px] max-h-[300px]"
            />
          </div>
        </div>
        <div className="flex justify-center z-0 my-10 md:absolute md:bottom-0">
          <div className="flex">
            <a href="https://www.linkedin.com/in/Rahmlad/" target="blank">
              <FaLinkedin
                size={40}
                className={`text-${color.foreground} bg-${color.background} rounded hover:scale-125 mr-2 md:mr-4 transition duration-500`}
              />
            </a>
            <a href="https://github.com/rahmlad-aramide">
              <FaGithub
                size={40}
                className={`text-${color.foreground} bg-${color.background} rounded-full hover:scale-125 mr-2 md:mr-4 transition duration-500`}
              />
            </a>
            <a href="https://twitter.com/Dev_Rahmlad">
              <FaTwitter
                size={40}
                className={`text-${color.foreground} bg-${color.background} rounded hover:scale-125 mr-2 md:mr-4 transition duration-500`}
              />
            </a>
            <a href="https://facebook.com/abdrahman.oladimeji.aramide/">
              <FaFacebook
                size={40}
                className={`text-${color.foreground} bg-${color.background} rounded-full hover:scale-125 mr-2 md:mr-4 transition duration-500`}
              />
            </a>
            <a href="https://instagram.com/rahmlad">
              <i className="fab fa-instagram fa-2x animatedGrow"></i>
            </a>
            <a href="wa.me/2349023600083">
              <FaWhatsapp
                size={40}
                className={`text-${color.foreground} bg-${color.background} rounded hover:scale-125 mr-2 md:mr-4 transition duration-500`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
