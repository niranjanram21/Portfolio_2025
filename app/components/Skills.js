"use client";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="mx-auto md:w-1/2 px-4 md:px-0 mt-16">
      <h2 className="montserrat-unique-class text-xl text-stone-800 border-b-4 border-teal-500 inline-block">
        SKILLS
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-center md:justify-between mt-6">
        <div className="w-full md:w-1/4 h-40 perspective">
          <motion.div
            className="relative w-full h-full preserve-3d"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute w-full h-full backface-hidden bg-teal-500 text-white rounded-xl flex items-center justify-center font-semibold shadow-xl/30">
              Web Development
            </div>
            <div className="px-4 absolute w-full h-full backface-hidden bg-slate-600 text-white rounded-xl flex items-center justify-center text-center font-semibold transform rotateY-180 shadow-xl/30">
              React.js, Next.js, HTML, CSS, JavaScript, Bootstrap, Tailwind, Redux
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/4 h-40 perspective">
          <motion.div
            className="relative w-full h-full preserve-3d"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute w-full h-full backface-hidden bg-teal-500 text-white rounded-xl flex items-center justify-center font-semibold shadow-xl/30">
              Backend Development
            </div>
            <div className="absolute w-full text-center px-4 h-full backface-hidden bg-slate-600 text-white rounded-xl flex items-center justify-center font-semibold transform rotateY-180 shadow-xl/30">
              Node.js, Express.js, ASP.NET / .NET Core
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/4 h-40 perspective">
          <motion.div
            className="relative w-full h-full preserve-3d"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute w-full h-full backface-hidden bg-teal-500 text-white rounded-xl flex items-center justify-center font-semibold shadow-xl/30">
              Database
            </div>
            <div className="absolute w-full h-full text-center px-4 backface-hidden bg-slate-600 text-white rounded-xl flex items-center justify-center font-semibold transform rotateY-180 shadow-xl/30">
              MySQL / PostgreSQL, MongoDB, Firebase
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotateY-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
