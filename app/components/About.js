import { TextGenerateEffect } from "./TextGenerateEffect";

export default function About() {
  const intro =
    "Welcome, I'm Niranjan Ram — a Frontend Developer based in Mumbai with a Bachelor's degree in Information Technology. I specialize in building responsive, interactive, and user-focused web applications using React, Next.js, JavaScript, HTML, and CSS. With 2 years of professional experience developing B2B web applications and hands-on experience with modern frontend technologies, I enjoy transforming ideas into fast, accessible, and visually engaging digital experiences. I'm passionate about clean code, thoughtful UI design, animations, and building web experiences that balance performance with usability.";

  return (
    <>
      <div className="mx-auto md:w-1/2 px-4 md:px-0 mt-16">
        <span className="montserrat-unique-class text-xl text-stone-800 text-left border-b-4 border-teal-500">
          INTRODUCTION
        </span>
        <TextGenerateEffect duration={2} filter={false} words={intro} />
      </div>
    </>
  );
}
