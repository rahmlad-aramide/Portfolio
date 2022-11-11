import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Footer from "./Footer";

const Skills = ({ darkMode }) => {
  const theme = useContext(ThemeContext);
  const color = darkMode ? theme.dark : theme.light;
  console.log(color.background)
  return (
    <div
      className={`h-[calc(100vh_-_4rem)] overflow-y-auto text-${color.foreground} bg-${color.background}`}
    >
      <div className=" mt-20 md:mt-0">
        <div
          className={`mb-6 text-[${color.foreground}] bg-[${color.background}]`}
        >
          <h1 className={`flex justify-center mt-6 text-3xl font-medium text-[${color.foreground}] bg-[${color.background}]`}>
            Skills
          </h1>
          <h3 className="mx-4 md:mx-20 text-center">
            These are the languages and technologies that I'm familiar with, if
            you have a project that required using any of it, you're just a{" "}
            <Link to="/contact" className="underline">
              contact
            </Link>{" "}
            away
          </h3>
        </div>
        <div className="bg-skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 bg-[#ffffff20] backdrop-blur items-center p-20">
            <div className="bg-[#ffffff10] backdrop-blur p-4 m-4">
              <LazyLoadImage effect="blur"
                className="hover:scale-90 transition duration-500"
                src="./images/Assets/html5-with-wordmark-color.svg"
                title="HTML 5"
                alt="HTML 5"
              />
            </div>
            <div className="bg-[#ffffff10] backdrop-blur p-4 m-4">
              <LazyLoadImage effect="blur"
                className="hover:scale-90 transition duration-500"
                src="./images/Assets/css-3-seeklogo.com.svg"
                title="CSS 3"
                alt="CSS 3"
              />
            </div>
            <div className="bg-[#ffffff10] backdrop-blur p-4 m-4">
              <LazyLoadImage effect="blur"
                className="hover:scale-90 transition duration-500"
                src="./images/Assets/javascript-js-seeklogo.com.svg"
                title="JavaScript"
                alt="JavaScript"
              />
            </div>
            <div className="bg-[#ffffff10] backdrop-blur p-4 m-4">
              <LazyLoadImage effect="blur"
                className="hover:scale-90 transition duration-500"
                src="./images/Assets/jquery-seeklogo.com.svg"
                title="JQuery"
                alt="JQuery"
              />
            </div>
            <div className="bg-[#ffffff10] backdrop-blur p-4 m-4">
              <LazyLoadImage effect="blur"
                className="hover:scale-90 transition duration-500"
                src="./images/Assets/tailwind-css-seeklogo.com.svg"
                title="Tailwind"
                alt="TailwindCSS"
              />
            </div>
            <div className="bg-[#ffffff10] backdrop-blur p-4 m-4">
              <LazyLoadImage effect="blur"
                className="hover:scale-90 transition duration-500"
                src="./images/Assets/react-seeklogo.com.svg"
                title="ReactJS"
                alt="ReactJS"
              />
            </div>
            <div className="bg-[#ffffff10] backdrop-blur p-4 m-4">
              <LazyLoadImage effect="blur"
                className="hover:scale-90 transition duration-500"
                src="./images/Assets/next-js-seeklogo.com.svg"
                title="NextJS"
                alt="NextJS"
              />
            </div>
            <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 text-center">
              <LazyLoadImage effect="blur"
                className="hover:scale-90 transition duration-500"
                src="./images/Assets/node-node-js-seeklogo.com.svg"
                title="NodeJS"
                alt="NodeJS"
              />
            </div>
            <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 text-center">
              <LazyLoadImage effect="blur"
                className="hover:scale-90 transition duration-500"
                src="./images/Assets/npm-node-package-manager.svg"
                title="NPM"
                alt="NPM"
              />
            </div>
            <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 text-center">
              <LazyLoadImage effect="blur"
                className="hover:scale-90 transition duration-500 w-40"
                src="./images/Assets/github.svg"
                title="Github"
                alt="Github"
              />
            </div>
            <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 text-center">
              <LazyLoadImage effect="blur"
                className="hover:scale-90 transition duration-500 w-40"
                src="./images/Assets/firebase-icon.svg"
                title="Firebase"
                alt="Firebase"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
