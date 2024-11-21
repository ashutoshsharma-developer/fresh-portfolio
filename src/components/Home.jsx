import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import pic from "../../public/bgRemovedImage.png";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to my Portfolio</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I am a </h1>

              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={60}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-lg font-semibold from-neutral-800  md:text-md text-justify ">
              Passionate Full-Stack Developer | MongoDB, Express.js, React,
              Node.js
            </p>
            <br />

            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between space-x-2">
              <div className="space-y-2">
                <h1 className="font-bold">
                  Available on{" "}
                  <span className="font-thin text-sm">
                    (account not present)
                  </span>
                </h1>

                <ul className="flex space-x-5  text-center">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebookSquare className="text-2xl md:text-3xl hover:scale-110 duration- 200 rounded-full  border-2px cursor-pointer " />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.linkedIn.com/" target="_blank">
                      <FaLinkedin className="text-2xl md:text-3xl hover:scale-110 duration- 200 rounded-full  border-2px cursor-pointer " />
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareInstagram className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full  border-2px cursor-pointer " />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.telegram.com/" target="_blank">
                      <FaTelegram className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full  border-2px cursor-pointer " />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>

                <ul className="flex space-x-5">
                  <li>
                    {" "}
                    <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full  border-2px cursor-pointer " />
                  </li>
                  <li>
                    {" "}
                    <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full  border-2px cursor-pointer " />
                  </li>
                  <li>
                    {" "}
                    <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full  border-2px cursor-pointer " />
                  </li>
                  <li>
                    {" "}
                    <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full  border-2px cursor-pointer" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 ">
            <img
              src={pic}
              className="rounded-full md:h-[400px] md:w-[350px] mt-5"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
