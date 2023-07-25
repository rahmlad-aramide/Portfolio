import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { ThemeContext } from "../Context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Footer from "./Footer";
import { TOP } from "../projectsData";

const ProjectDetail = () => {
  const { name } = useParams();
  const project = TOP.filter((project)=>name === project.name);
  const { theme } = useContext(ThemeContext);
  const color = theme;
  return (
    <div
      className="h-full md:h-[calc(100vh_-_4rem)] overflow-y-auto transition duration-500"
      style={{ backgroundColor: color.background, color: color.foreground }}
    >
      <div className="min-h-[calc(100vh_-_4rem)] pt-20 md:pt-16 pb-8">
        <div className="pb-10 flex w-[90%] md:w-[60%] mx-auto flex-col">
          <h1 className="font-black text-center text-4xl mb-2">{project.name}</h1>
          <p className="text-justify">{project.detail}</p>
        </div>
        <div className="flex flex-col md:flex-row w-[90%] mx-auto">
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">Stack:</h2>
              <ul>
                <li>ReactJS</li>
                <li>TailwindCSS</li>
                <li>NextJS</li>
                <li>Prop Types</li>
                <li>Unit Testing</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">Links:</h2>
              <ul>
                <li>Live url</li>
                <li>Github repo</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">Project type:</h2>
              <ul>
                <li>Internship</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">Project status:</h2>
              <ul>
                <li>Completed and being maintained</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <LazyLoadImage
              effect="blur"
              className=""
              src={project.image}
              alt={project.name}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row m-4">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <LazyLoadImage
              effect="blur"
              className=""
              src={project.image}
              alt={project.name}
            />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="pb-10 flex w-full md:w-[60%] mx-auto md:mx-10 flex-col">
              <h2 className="font-bold text-2xl mb-2">Challenges Encountered</h2>
              <p className="max-w-[60ch] text-justify">As the Frontend Team Lead, one of the challenges I faced was managing my team members especially when communicating and when not following the instruction required to be followed. Also, on my personal end, being an internship program that has a timeline, the timeline falls on my examination period, then the erratic state of power supply coupled with my PC's damaged battery is a serious challenge I faced while on the project</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row m-4">
          <div className="w-full md:w-1/2">
          <div className="pb-10 flex w-full md:w-[60%] mx-auto md:mx-10 flex-col">
              <h2 className="font-bold text-2xl mb-2">Gains from the project</h2>
              <p className="max-w-[60ch] text-justify">Truly after difficulty they say, comes ease. Despite all the hurdle, it later turned out to be a way to shape me for greater obstacles that I may encounter at a later time because for me to be able to scale through successfully, it simply ignite my not giving up spirit which is greatly helping. Also, team work and team management skill and improved coding styles and learning, relearning and unlearning through others.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <LazyLoadImage
              effect="blur"
              className=""
              src={project.image}
              alt={project.name}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
