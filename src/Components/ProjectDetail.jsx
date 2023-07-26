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
  const { theme } = useContext(ThemeContext);
  const color = theme;
  const filteredProj = TOP.filter((project) => name === project.name.toLowerCase().replaceAll(' ', '-'));
  const project = filteredProj[0];

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
          <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">Stack:</h2>
              <ul>
                {project?.languages?.map((language, index) =>
                  <li key={index}>{language.name}</li>
                )}
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">Links:</h2>
              <ul>
                <li>Live url: <a className="underline" href={project.link} target="_blank" rel="noreferrer noopener">{project.link}</a></li>
                <li>Github repo: <a className="underline" href={project.repo} target="_blank" rel="noreferrer noopener">{project.repo}</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">Project type:</h2>
              <ul>
                <li>{project.type}</li>
              </ul>
            </div>
            <div className="flex flex-col mb-4">
              <h2 className="font-bold text-2xl">Project status:</h2>
              <ul>
                <li>{project.status}</li>
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
              <p className="max-w-[60ch] text-justify">{project.challenge}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row m-4">
          <div className="w-full md:w-1/2">
            <div className="pb-10 flex w-full md:w-[60%] mx-auto md:mx-10 flex-col">
              <h2 className="font-bold text-2xl mb-2">Gains from the project</h2>
              <p className="max-w-[60ch] text-justify">{project.gains}</p>
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
