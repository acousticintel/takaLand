import Image from "next/image";
import { useEffect } from "react";
//custom packs
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contVar = {
  hide: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.75,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

const riseVar = {
  hide: {
    y: 10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
};

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="hero min-h-screen overflow-x-hidden 
        bg-[url('https://i.imgur.com/5YmZedE.gif')]"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <motion.div
          variants={contVar}
          initial="hide"
          animate={controls}
          className="max-w-md"
        >
          <motion.h1
            variants={riseVar}
            className="text-5xl font-bold text-teal-50"
          >
            Documenting Climate Action in Africa.
          </motion.h1>
          <motion.p
            variants={riseVar}
            className="text-lg pt-3 pb-6 pl-6 font-semibold text-teal-100"
          >
            We focus on providing technology that helps companies to track,
            document and achieve their sustainability efforts.
          </motion.p>
          <Link to="services" spy={true} smooth={true}>
            <motion.button variants={riseVar} className="btn btn-primary">
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
