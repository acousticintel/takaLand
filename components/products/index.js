import { useEffect } from "react";
import dynamic from "next/dynamic";
//custom packs
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FaCheckCircle = dynamic(
  async () => (await import("react-icons/fa")).FaCheckCircle
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
      delay: .25,
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

export default function Products() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const prods = [
    {
      title: "Events",
      tag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at cursus nulla.",
      points: [
        "Incentivize event attendees to recycle their waste",
        "Offering cashbacks or discounts on future purchases",
        "Monitor their waste profile ",
      ],
    },
    {
      title: "Corporates",
      tag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at cursus nulla.",
      points: [
        "Measure their sustainability effort",
        "Document their sustainability impact",
        "Report on their sustainability ",
      ],
    },
    {
      title: "Home",
      tag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at cursus nulla.",
      points: [
        "Incentivize the public to recycle",
        "Divert their waste from landfills ",
        "Create a loyalty program for future sales",
      ],
    },
  ];
  return (
    <motion.section
      ref={ref}
      id="services"
      initial="hide"
      animate={controls}
      variants={contVar}
      className="products__sec"
    >
      <motion.h5 variants={riseVar}>Services</motion.h5>
      <motion.h2 variants={riseVar}>Products</motion.h2>
      <motion.h6 variants={riseVar}>
        Services Tagline Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. In fringilla.
      </motion.h6>
      <motion.div variants={cardContVar} className="products">
        {prods.map((pr, i) => (
          <motion.div variants={cardVar} className="product" key={i}>
            <h3>{pr.title}</h3>
            <p>We provide companies a platform to: </p>
            <motion.ul variants={contVar}>
              {pr.points.map((p, i) => (
                <motion.li variants={slideVar} key={i}>
                  <FaCheckCircle size=".9em" className="min-w-[15px]"/> <span>{p}</span>
                </motion.li>
              ))}
            </motion.ul>
            <Link to="process" spy={true} smooth={true}>
              <div className="button__sec">
                <button className="btn-accent">More Info</button>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
