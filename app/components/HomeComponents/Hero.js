"use client";

import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { ContainerTextFlip } from "./Textflip";
import { motion, AnimatePresence } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export default function Hero() {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <Image src="/images/bg5.jpg" alt="Hero image" fill className="object-cover z-0" />
        <div className="relative z-10 h-full overflow-y-auto bg-black/5 hide-scrollbar">
          <div className="flex flex-col md:flex-row justify-center items-center h-full">
            <div className="flex flex-col justify-center items-end h-full md:w-3/5">
              <div className="text-pop-up-top text-3xl md:text-5xl font-medium text-center md:text-left text-stone-600">
                Hi! I&apos;m{" "}
                <span className="montserrat-unique-class font-extrabold text-4xl md:text-7xl text-teal-500">
                  Niranjan Ram
                </span>
              </div>
              <ContainerTextFlip className="mx-4" />
              <button
                onClick={() => setShowModal(true)}
                className="text-white poppins-medium mt-4 bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                About Me
              </button>

              <AnimatePresence>
                {showModal && (
                  <motion.div
                    className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="bg-stone-900 p-6 rounded-xl max-w-sm md:max-w-2xl shadow-lg absolute right-10 md:right-160"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-stone-200 border-b-4 border-teal-500 montserrat-unique-class text-lg md:text-2xl font-semibold">
                        Niranjan Muniraj Ram
                      </span>
                      <span
                        className="absolute right-5 text-4xl text-teal-500"
                        onClick={() => setShowModal(false)}
                      >
                        <AiFillCloseCircle />
                      </span>
                      <div className="mt-8 text-md md:text-lg poppins-medium text-stone-300">
                        — I&apos;m a{" "}
                        <span className="text-teal-500 font-bold px-1">Software Developer</span>{" "}
                        working in a product-based company in Mumbai. I&apos;ve gained experience
                        developing applications using{" "}
                        <span className="text-teal-500 font-bold  px-1">
                          .NET, MySQL, and AngularJS
                        </span>
                        . Over the past year, I&apos;ve also worked on modern web development,
                        building responsive and dynamic applications using{" "}
                        <span className="text-teal-500 font-bold  px-1">React, Next.js</span> and{" "}
                        <span className="text-teal-500 font-bold  px-1">MERN stack</span>. I enjoy
                        creating clean, user-centric interfaces and integrating real-world APIs.
                        I&apos;m actively seeking opportunities/collaborations where I can grow as a
                        React developer and contribute to meaningful, design-focused projects.
                      </div>
                      <div className="flex flex-row gap-6 mt-8 text-stone-400">
                        <IoLogoJavascript className="text-5xl" />
                        <FaReact className="text-5xl" />
                        <FaAngular className="text-5xl" />
                        <RiNextjsFill className="text-5xl" />
                        <FaNodeJs className="text-5xl" />
                        <AiOutlineDotNet className="text-5xl" />
                        <SiMysql className="text-5xl" />
                        <SiMongodb className="text-5xl" />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="hidden md:block w-1/5"></div>
            <div className="fixed z-30 left-0 top-0 p-2 text-teal-50 italic text-3xl bg-teal-500 montserrat-unique-class">
              NR
            </div>

            {!sidebar && (
              <FaBarsStaggered
                className="text-3xl text-stone-700 fixed z-20 top-3 right-10 md:right-3"
                onClick={handleSidebar}
              />
            )}
            {sidebar && (
              <div className="w-full md:w-1/5 h-full fixed z-20 top-0 right-0 flex flex-col justify-center md:items-start text-center md:text-left mt-0 bg-gray-100 border border-stone-200">
                <AiFillCloseCircle
                  className="text-5xl text-stone-600 absolute z-20 top-70 md:top-113 right-52 md:right-88"
                  onClick={handleSidebar}
                />
                <div className="flex flex-row">
                  <div className="w-1/2 hidden md:block"></div>
                  <div className="w-full md:w-1/2 text-lg font-medium text-stone-800">
                    <div>HOME</div>
                    <div>INTRODUCTION</div>
                    <div>PROJECTS</div>
                    <div>SKILLS</div>
                    <div>CONTACT</div>
                    <div className="flex flex-row gap-2 mt-8 justify-center text-teal-600">
                      <FaLinkedinIn />
                      <FaGithub />
                      <FaInstagram />
                      <FaLinkedinIn />
                    </div>
                    <div className="text-md text-sm mt-2 text-stone-600">
                      niranjanram3657@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-pop-up-top {
          animation: text-pop-up-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }

        @keyframes text-pop-up-top {
          0% {
            transform: translateY(0);
            transform-origin: 50% 50%;
            text-shadow: none;
          }
          100% {
            transform: translateY(-30px);
            transform-origin: 50% 50%;
            text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc,
              0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc, 0 50px 80px rgba(0, 0, 0, 0.3);
          }
        }
      `}</style>
    </>
  );
}
