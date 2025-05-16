"use client";

import Hero from "./components/HomeComponents/Hero";
import Introduction from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="intro">
        <Introduction />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}
