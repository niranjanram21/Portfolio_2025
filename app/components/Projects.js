"use client";

import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "GoTrip – Travel Search App",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "Mongodb",
        "Bootstrap",
        "Custom CSS",
        "Amadeus API",
      ],
      description:
        "A travel search app built with React and Next.js that allows users to find flights using the Amadeus API. Features include dynamic search, responsive UI, and integration with MongoDB for storing user queries.",
      image: "/images/gotrip.png",
      link: "https://gotriptravels.vercel.app",
      github: "https://github.com/niranjanram21/NextJsTravelApp",
      x: -50,
      y: 50,
    },
    {
      name: "TrendHub- An ECommerce App (Clothing)",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Mongodb",
        "Tailwind",
        "Custom CSS",
        "Express",
      ],
      description:
        "An E-commerce app based on React JS, where you can find a list of clothing items categorized as men, women and kids. An admin panel is used to add or delete products in the database.",
      image: "/images/trendhub.png",
      link: "https://trendhubstore.netlify.app",
      github: "https://github.com/niranjanram21/EcomClothingApp",
      x: 50,
      y: 50,
    },
    {
      name: "CineSearch",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Mongodb",
        "Tailwind",
        "Custom CSS",
        "Express",
      ],
      description:
        "An search application for movies and Tv shows fetched from TMDB API. Login and Signup functionality is implemented using Firebase. Movies/Tv shows can also searched and filtered.",
      image: "/images/cinesearch.png",
      link: "https://cinesearchapp.netlify.app/",
      github: "https://github.com/niranjanram21/MovieAPIMERN",
      x: -50,
      y: 50,
    },
  ];

  return (
    <>
      <div className="mx-auto md:w-1/2 px-4 md:px-0 mt-16">
        <h2 className="montserrat-unique-class text-xl text-stone-800 border-b-4 border-teal-500 inline-block">
          PROJECTS
        </h2>
        {projects.map((p, index) => {
          return (
            <motion.div
              key={index}
              className="mt-12"
              initial={{ opacity: 0, y: p.y, x: 0 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="border-1 border-stone-400 p-4 md:p-8 rounded-xl shadow-xl/30">
                <div className="text-lg md:text-2xl my-4 text-teal-500 montserrat-unique-class">
                  {p.name}
                </div>
                <p className="text-stone-600 text-sm md:text-xl">{p.description}</p>
                <div className="flex flex-col md:flex-row gap-4 mt-4 py-4">
                  <Image
                    src={p.image}
                    className="rounded-xl border border-stone-400 shadow-lg/20"
                    alt="gotrip image"
                    width={300}
                    height={250}
                  />

                  <div className="flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2 text-stone-800 poppins-medium">
                      {p.tech.map((t, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 border text-sm border-stone-400 text-stone-500 rounded-lg shadow-lg/10"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-row gap-4">
                      <a href={p.link} className="mt-4">
                        <button className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white poppins-medium focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 shadow-xl/20">
                          View Demo
                          <FaExternalLinkAlt className="text-sm" />
                        </button>
                      </a>
                      <a href={p.github} className="mt-4">
                        <button className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-700 text-white poppins-medium focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 shadow-xl/20">
                          Github
                          <FaExternalLinkAlt className="text-sm" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
