import { useEffect } from "react";
import dynamic from "next/dynamic";
//custom
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//custom packs
const IoHappySharp = dynamic(
  async () => (await import("react-icons/io5")).IoHappySharp
);
const FaRecycle = dynamic(
  async () => (await import("react-icons/fa")).FaRecycle
);
const FaWeight = dynamic(
  async () => (await import("react-icons/fa")).FaWeight
);
const FaFilter = dynamic(
  async () => (await import("react-icons/fa")).FaFilter
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
      <motion.div variants={cardContVar} className="processes">
        <motion.div variants={cardVar} className="process">
          <motion.div variants={slideVar} className="icon">
            <FaFilter size="2em" />
          </motion.div>
          <motion.h6 variants={slideVar}>Sorting.</motion.h6>
          <motion.p variants={slideVar}>
            We separate the waste at source.
          </motion.p>
        </motion.div>
        <motion.div variants={cardVar} className="process">
          <motion.div variants={slideVar} className="icon">
            <FaWeight size="2em" />
          </motion.div>
          <motion.h6 variants={slideVar}>Weighing.</motion.h6>
          <motion.p variants={slideVar}>
            We measure and document the various kinds of waste.
          </motion.p>
        </motion.div>
        <motion.div variants={cardVar} className="process">
          <motion.div variants={slideVar} className="icon">
            <FaRecycle size="2em" />
          </motion.div>
          <motion.h6 variants={slideVar}>Recycling.</motion.h6>
          <motion.p variants={slideVar}>
            We hand over the waste our recycling partners.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
