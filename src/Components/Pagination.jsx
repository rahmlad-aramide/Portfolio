import React, { useContext } from "react";
import { useEffect, useState } from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ThemeContext } from "../Context";
import { DATA } from "../projectsData";
import Footer from "./Footer";
const Pagination = ({darkMode}) => {
  const theme = useContext(ThemeContext);
  const color = darkMode ? theme.dark : theme.light;
  console.log('pag', color.background)

  const [singleView, setSingleView] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const items = DATA[currentPosition];
    // setting the states
    setListItems(DATA);
    setProject(items);
    setLoading(false);
  }, [currentPosition]);

  const lastIndex = DATA.length - 1;

  const handlePrev = (e) => {
    e.preventDefault();
    if (currentPosition > 0) {
      setCurrentPosition((prev) => prev - 1);
    } else {
      setCurrentPosition(lastIndex);
    }
  };
  const handleNext = (e) => {
    e.preventDefault();
    if (currentPosition < listItems.length - 1) {
      setCurrentPosition((next) => next + 1);
    } else {
      setCurrentPosition(0);
    }
  };
  const handleView = () => {
    setSingleView((prev) => !prev);
  };
  return (
    <>
      <div className={`h-[cal(100vh_-_4rem)] min-h-[calc(100vh_-_4rem)] mt-16 md:mt-0 text-${color.foreground} bg-${color.background}`}>
        <div className="flex text-center justify-center">
          <button
            onClick={handleView}
            className={`text-${color.foreground} border-${color.foreground} mt-3 font-medium uppercase text-xl py-1 px-4 rounded-full border hover:text-white hover:bg-black hover:scale-90 transition duration-500`}
          >
            {singleView ? "Single Project View" : "All Projects View"}{" "}
          </button>
        </div>
        {singleView ? (
          DATA.map((data) => (
            <div
              className={` text-${color.foreground} bg-${color.background} m-4 border p-4 rounded shadow-lg border-gray-400 flex flex-col md:flex-row`}
              key={data.id}
            >
              <div className="mx-2 w-full md:w-1/2">
                <h1 className="text-2xl">{data.name}</h1>
                <h2 className="mt-2 mb-4">{data.detail}</h2>
                <h3>Languages/Technologies used:</h3>
                <div className="flex my-3">
                  {data.languages.map(language => (<LazyLoadImage src={language.url} effect="blur" alt={language.name} className={`border h-12 bg-white`}/>))}
                </div>
                <div>
                <button
            onClick={handleView}
            className={`text-${color.foreground} border-${color.foreground} my-3 font-medium uppercase text-xl py-1 px-4 rounded-full border hover:text-white hover:bg-black hover:scale-90 transition duration-500`}
          > <a href={data.link} target="_blank" rel="noreferrer">View Live Site</a>
          </button>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <LazyLoadImage effect="blur" src={data.image} alt={`${data.name} Project`} />
              </div>
            </div>
          ))
        ) : (
          <>
            {loading ? (
              <div className="flex text-4xl justify-center items-center">Loading... </div>
            ) : (
              <div className={`text-${color.foreground} bg-${color.background} relative m-4 min-h-[calc(50vh)] border flex flex-col md:flex-row p-4 rounded shadow-lg border-gray-400`}>
                <div className="w-full md:w-1/2 mx-2">
                  <h1 className="text-2xl">{project.name}</h1>
                  <h2 className="mb-4">{project.detail}</h2>
                  <h3>Languages/Technologies used:</h3>
                <div className="flex my-3">
                  {project.languages.map(language => (<LazyLoadImage effect="blur" src={language.url} alt={language.name} className={`border h-12 bg-white`}/>))}
                </div>
                <div className="flex justify-center">
                <button
            onClick={handleView}
            className={`text-${color.foreground} border-${color.foreground} my-3 font-medium uppercase text-xl py-1 px-4 rounded-full border hover:text-white hover:bg-black hover:scale-90 transition duration-500`}
          > <a className="" href={project.link} target="_blank" rel="noreferrer">View Live Site</a>
          </button>
                </div>
                </div>
                <div className="w-full md:w-1/2">
                  <LazyLoadImage effect="blur"
                    src={project.image}
                    alt={`${project.name} Project`}
                    className="h-full"
                  />
                </div>
                <div className="">
                  <button
                    onClick={handlePrev}
                    className="bg-[#333] rounded-full text-white p-2 absolute top-1/2 -left-4"
                  >
                    <FaArrowAltCircleLeft
                      size={30}
                      className="hover:scale-125 hover:text-[#333] focus:scale-125 focus:text-[#333] transition duration-300 hover:bg-white rounded-full"
                    />
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-[#333] rounded-full text-white p-2 absolute top-1/2 -right-4"
                  >
                    <FaArrowAltCircleRight
                      size={30}
                      className="hover:scale-125 hover:text-[#333] focus:scale-125 focus:text-[#333] transition duration-300 hover:bg-white rounded-full"
                    />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {!singleView ? (
        <div className="absolute w-full bottom-0">
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </>
  );
};

export default Pagination;
