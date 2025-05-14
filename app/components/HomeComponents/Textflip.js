"use client";
import React, { useState, useEffect, useId } from "react";
import { motion } from "framer-motion"; // Note: motion/react → framer-motion
import { cn } from "../../lib/utils";

export function ContainerTextFlip({
  words = ["Software Developer", "Full Stack Developer", "Frontend Developer", "React Developer"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  }, [currentWordIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  return (
    <div className="inline-block text-center">
      <motion.div
        layout
        layoutId={`words-here-${id}`}
        animate={{ width }}
        transition={{ duration: animationDuration / 2000 }}
        className={cn(
          "relative inline-block rounded-lg pt-2 pb-3 text-2xl md:text-2xl poppins-medium text-stone-900 dark:text-white",
          className
        )}
        key={words[currentWordIndex]}
      >
        <motion.div
          transition={{
            duration: animationDuration / 1000,
            ease: "easeInOut",
          }}
          className={cn("inline-block", textClassName)}
          ref={textRef}
          layoutId={`word-div-${words[currentWordIndex]}-${id}`}
        >
          <motion.div className="inline-block">
            {words[currentWordIndex].split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: index * 0.02 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        <div
          key={currentWordIndex} // Resets animation on each word change
          className="absolute bottom-0 left-0 h-1 bg-teal-500 animate-loader rounded-full"
          style={{
            animationDuration: `${interval}ms`,
            width: "100%",
          }}
        />
      </motion.div>

      {/* Loader animation style */}
      <style jsx>{`
        @keyframes loader {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
        .animate-loader {
          animation-name: loader;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
