import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import AboutImg from "./../images/About_me.jpg"
import Footer from "./Footer";
import { Link } from "react-router-dom";

const About = ({darkMode}) => {
  const theme = useContext(ThemeContext)
  const color = darkMode? theme.dark : theme.light;
  return (
    <div className={`overflow-y-auto h-full md:h-[calc(100vh_-_4rem)] bg-${color.background} text-${color.foreground}`}>
              <div className="flex flex-col md:flex-row justify-between overflow-hidden mt-16 md:mt-0">
                <div className="w-full md:w-1/2">
                  <h1 className="flex justify-center mt-6 text-3xl font-medium">
                    About Me
                  </h1>
                  <p className="mx-10 mt-4 mb-10 md:mb-4">
                    Hello, I am Abdrahman Adebayo a Frontend Web Developer with a passion for creating visually appealing
                    and user-friendly websites.
                    <br /> <br />
                    With over 2 years of experience, I have a strong understanding of HTML, CSS, 
                    and JavaScript, as well as experience with some of the popular frameworks and libraries
                    like ReactJS, TailwindCSS, VueJS and few others. You can checkout my <Link to='/tech-stack' className="underline">Tech Stack</Link> for others
                    <br /> <br />
                    My portfolio showcases a variety of projects that demonstrate my skills in design, layout, 
                    and functionality.
                    <br /> <br />
                    I am always eager to learn new technologies and techniques to stay 
                     up-to-date with industry standards.
                    <br />
                    <br />
                    I am a team player and enjoy working with others to bring a project to fruition. 
                    I am excited to share my work with you and hope to collaborate on future projects.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="rounded-4xl">
                    <LazyLoadImage effect="blur"
                      src={AboutImg}
                      alt="Abdrahman Oladimeji"
                      className="w-full rounded-4xl"
                    />
                  </div>
                </div>
              </div>
      <Footer/>
    </div>
  );
};

export default About;
