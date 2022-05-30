import { useEffect } from "react";
import dynamic from "next/dynamic";
//custom
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//custom packs
const IoHappySharp = dynamic(
  async () => (await import("react-icons/io5")).IoHappySharp
);

const contVar = {
  hide: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const cardContVar = {
  hide: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.25,
      when: "beforeChildren",
      staggerChildren: 0.25,
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

const cardVar = {
  hide: {
    opacity: 0,
    y: 10,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
    },
  },
};

const slideVar = {
  hide: {
    x: 10,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
};

export default function Process() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      id="process"
      initial="hide"
      animate={controls}
      variants={contVar}
      className="process__sec"
    >
      <motion.h5 variants={riseVar}>Features</motion.h5>
      <motion.h2 variants={riseVar}>How It Works</motion.h2>
      <motion.h6 variants={riseVar}>
        Product Tagline Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In fringilla.
      </motion.h6>
      <motion.div variants={cardContVar} className="processes">
        <motion.div variants={cardVar} className="process">
          <motion.div variants={slideVar} className="icon">
            <IoHappySharp size="2em" />
          </motion.div>
          <motion.h6 variants={slideVar}>Lorem ipsum dolor sit amet.</motion.h6>
          <motion.p variants={slideVar}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            cursus nulla, cursus pulvinar lorem. Aliquam ultrices quam velit,
            vitae fringilla arcu tincidunt ac. Maecenas.
          </motion.p>
        </motion.div>
        <motion.div variants={cardVar} className="process">
          <motion.div variants={slideVar} className="icon">
            <IoHappySharp size="2em" />
          </motion.div>
          <motion.h6 variants={slideVar}>Lorem ipsum dolor sit amet adipiscing elit.</motion.h6>
          <motion.p variants={slideVar}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            cursus nulla, cursus pulvinar lorem. Aliquam ultrices quam velit,
            vitae fringilla arcu tincidunt ac. Maecenas.
          </motion.p>
        </motion.div>
        <motion.div variants={cardVar} className="process">
          <motion.div variants={slideVar} className="icon">
            <IoHappySharp size="2em" />
          </motion.div>
          <motion.h6 variants={slideVar}>Lorem ipsum dolor elit.</motion.h6>
          <motion.p variants={slideVar}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            cursus nulla, cursus pulvinar lorem. Aliquam ultrices quam velit,
            vitae fringilla arcu tincidunt ac. Maecenas.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
