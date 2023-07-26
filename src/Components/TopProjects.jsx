import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Footer from "./Footer";
import { TOP } from "../projectsData";
// import { FaArrowAltCircleRight } from "react-icons/fa";

const TopProjects = () => {
  const { theme } = useContext(ThemeContext);
  const color = theme;
  return (
    <div
      className="min-h-screen transition duration-500"
      style={{ backgroundColor: color.background, color: color.foreground }}
    >
      <div className="min-h-[calc(100vh_-_4rem)] pt-20 md:pt-16 pb-8">
        <div className="pb-10 flex justify-center items-center flex-col">
          <h1 className="font-black text-3xl md:text-4xl mb-2">Projects</h1>
          <h2 className="text-xl md:text-2xl">These are some of my projects</h2>
        </div>
        <div className="grid grid-cols-12 max-w-[1200px] gap-0 md:gap-10 mx-8">
          {TOP.map((project) => (
            <div
              key={project.id}
              style={{ backgroundColor: color.projectBg }}
              className="col-span-12 md:col-span-4 hover:scale-95 flex justify-between flex-col transition duration-500 shadow-lg rounded-lg p-4 mb-4"
            >
              <div>
                <div className="mb-4 -mx-4 -mt-4 scale-90 hover:scale-100 transition duration-500">
                  <LazyLoadImage
                    effect="blur"
                    src={project.framedImage}
                    alt={project.name}
                    className="rounded-t-md mt-2 hover:mt-0"
                  />
                </div>
                <div className="transition duration-500 cursor-default">
                  <h2
                    style={{ color: color.natural }}
                    className="transition text-center font-bold text-2xl my-2"
                  >
                    {project.name}
                  </h2>
                  <p style={{ color: color.content }} className="text-justify">
                    {project.desc}
                  </p>
                </div>
              </div>
              <div className="flex justify-end items-end my-4">
                <Link to={`/projects/${project.name.toLowerCase().replaceAll(' ', '-')}`}>
                  <div style={{ borderColor: color.content, color: color.content }} className="flex w-fit border rounded-full px-4 py-1 hover:scale-90 active:scale-100 transition cursor-pointer">
                    View Project Details
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Link to="/archive">
            <button
              style={{ borderColor: color.content, color: color.content }}
              className={`flex items-center justify-center mt-3 mr-8 font-medium text-xl py-1 px-4 rounded-full border hover:scale-90 transition`}
            >
              See my Archive
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopProjects;
