import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Footer from "./Footer";

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
                    I am Abdrahman Adebayo, a self-taught Frontend web developer from Nigeria.
                    <br /> <br />
                    I am one of the current HNG Internship [HNGi9] Finalist from Team plug in which we deliver the project <a className="underline" rel="noreferrer" target="_blank" href="https://yieldvest.hng.tech">Yieldvest</a>, 
                    a Project that track, analyze and recommend best stocks for investors and more.
                    <br /> <br />
                    I'm open to learning new things and love getting my hands on project.
                    During my leisure you'll find me surfing the net/social media for
                    learning/catching fun or watching tech contents on YouTube.
                    <br /> <br />
                    Likewise, I love making friends, let's connect and you'll definitely
                    find me interesting.
                    <br />
                    <br />
                    Do you have any info on how I can learn, relearn unlearn or even earn
                    for me or you want to know more about me? Please don't hesitate to
                    reach out to me. Would love to hear from you.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="rounded-4xl">
                    <LazyLoadImage effect="blur"
                      src="./images/About_me.jpg"
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
