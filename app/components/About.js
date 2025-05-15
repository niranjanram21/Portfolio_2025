import { TextGenerateEffect } from "./TextGenerateEffect";

export default function About() {
  const intro =
    " Welcome, I'm Niranjan Ram - a Software Developer based in Mumbai with a Bachelor's degree in Information Technology, graduated in 2023. I currently work at a product-based company, where I've gained experience developing applications using .NET, MySQL, and AngularJS. Over the past year, I've also worked on modern web development, building responsive and dynamic applications using React, Next.js and MERN stack. I enjoy creating clean, user-centric interfaces and integrating real-world APIs. I'm actively seeking opportunities/collaborations where I can grow as a React developer and contribute to meaningful, design-focused projects.";
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
