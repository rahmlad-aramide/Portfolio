import React, { useContext } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp,
} from "react-icons/fa";
import Resume from "../Assets/ABDRAHMAN_ADEBAYO_OLADIMEJI.pdf";
import { ThemeContext } from "../Context";

const Home = ({darkMode}) => {
  const theme = useContext(ThemeContext)
  const color = darkMode? theme.dark : theme.light;
  console.log(color)
  return (
    <section className="flex bg-hero-mobile md:bg-hero bg-white bg-blend-darken bg-opacity-50 bg-cover bg-right h-[calc(100vh_-_4rem)] text-white">
      <div className="my-auto ml-4 md:ml-20">
        <h1 className="text-xl py-1">Hi there, I'm</h1>
        <h2 className="text-5xl py-1 font-medium">
          Abdrahman Adebayo <br /> Oladimeji
        </h2>
        <h3 className="text-2xl pt-1 pb-2">A Front End Developer</h3>
        <a href={Resume} download={Resume}>
          <button className="bg-white text-black font-medium uppercase text-xl py-1 px-4 rounded-full border border-white hover:text-white hover:bg-transparent transition duration-500">
            My Resume
          </button>
        </a>
      </div>
      <div className="flex z-0 absolute bottom-4 md:bottom-10 left-4 md:left-20 ">
        <div className="flex">
          <a href="https://www.linkedin.com/in/Rahmlad/" target="blank">
            <FaLinkedin
              size={40}
              className="hover:scale-125 mr-2 md:mr-4 transition duration-500"
            />
          </a>
          <a href="https://github.com/rahmlad-aramide">
            <FaGithub
              size={40}
              className="hover:scale-125 mr-2 md:mr-4 transition duration-500"
            />
          </a>
          <a href="https://twitter.com/Dev_Rahmlad">
            <FaTwitter
              size={40}
              className="hover:scale-125 mr-2 md:mr-4 transition duration-500"
            />
          </a>
          <a href="https://facebook.com/abdrahman.oladimeji.aramide/">
            <FaFacebook
              size={40}
              className="hover:scale-125 mr-2 md:mr-4 transition duration-500"
            />
          </a>
          <a href="https://instagram.com/rahmlad">
            <i className="fab fa-instagram fa-2x animatedGrow"></i>
          </a>
          <a href="wa.me/2349023600083">
            <FaWhatsapp
              size={40}
              className="hover:scale-125 mr-2 md:mr-4 transition duration-500"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
