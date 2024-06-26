import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Footer from "./Footer";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const color = theme;
  return (
    <div
      style={{ backgroundColor: color.background, color: color.foreground }}
      className={`h-[calc(100vh_-_4rem)] md:overflow-y-auto transition duration-500`}
    >
      <div className="h-full">
        <div className=" pt-16 md:-mt-12">
          <div className={`mb-6`}>
            <h1
              className={`flex justify-center mt-6 text-3xl md:text-4xl font-medium text-[${color.foreground}] bg-[${color.background}]`}
            >
              Tech Stack
            </h1>
            <h3 className="mx-4 md:mx-20 text-center text-xl md:text-2xl">
              These are my tech stacks, if you have a project that requires
              using any of it, you're just a{" "}
              <Link to="/contact" className="underline">
                contact
              </Link>{" "}
              away
            </h3>
          </div>
          <div className="bg-skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 bg-[#ffffff20] backdrop-blur items-center p-20">
            <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500"
                  src="./images/Assets/next-js-seeklogo.com.svg"
                  title="NextJS"
                  alt="NextJS"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500"
                  src="./images/Assets/typescript-seeklogo.svg"
                  title="TypeScript"
                  alt="TypeScript"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500"
                  src="./images/Assets/react-seeklogo.com.svg"
                  title="ReactJS & React Native"
                  alt="ReactJS"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500"
                  src="./images/Assets/javascript-js-seeklogo.com.svg"
                  title="JavaScript"
                  alt="JavaScript"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500"
                  src="./images/Assets/tailwind-css-seeklogo.com.svg"
                  title="Tailwind"
                  alt="TailwindCSS"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500"
                  src="./images/Assets/html5-with-wordmark-color.svg"
                  title="HTML 5"
                  alt="HTML 5"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500"
                  src="./images/Assets/css-3-seeklogo.com.svg"
                  title="CSS 3"
                  alt="CSS 3"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500 w-40"
                  src="./images/Assets/bootstrap-logo.svg"
                  title="Bootstrap"
                  alt="Bootstrap"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500 w-40"
                  src="./images/Assets/sass-logo.svg"
                  title="Sass"
                  alt="sass"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500"
                  src="./images/Assets/jquery-seeklogo.com.svg"
                  title="JQuery"
                  alt="JQuery"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500"
                  src="./images/Assets/node-node-js-seeklogo.com.svg"
                  title="NodeJS"
                  alt="NodeJS"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500"
                  src="./images/Assets/npm-node-package-manager.svg"
                  title="NPM"
                  alt="NPM"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500 w-60"
                  src="./images/Assets/git-logo.svg"
                  title="Git"
                  alt="Git"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500 w-40"
                  src="./images/Assets/github.svg"
                  title="Github"
                  alt="Github"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500 w-40"
                  src="./images/Assets/firebase-icon.svg"
                  title="Firebase"
                  alt="Firebase"
                />
              </div>
              <div className="bg-[#ffffff10] backdrop-blur p-4 m-4 w-[90%] h-[90%] flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  className="hover:scale-90 transition duration-500"
                  src="./images/Assets/vue-logo.svg"
                  title="Vue"
                  alt="Vue"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
