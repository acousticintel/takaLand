import Image from "next/image";
import { motion } from "framer-motion";

const dropVar = {
  hide: {
    y: -10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Navbar() {
  return (
    <div className="navbar absolute top-0 bg-transparent grid place-content-center z-40">
      <div className="flex items-center">
        <motion.a
          variants={dropVar}
          animate="show"
          initial="hide"
          className="btn btn-lg btn-ghost gap-2 text-5xl font-bold uppercase text-teal-200"
        >
          <div className="rounded-full bg-teal-200 h-12 w-12 grid place-content-center">
            <div className="relative h-10 w-5">
              <Image
                src="/assets/logo.png"
                layout="fill"
                className="object-contain"
                alt=""
              />
            </div>
          </div>
          Taka
        </motion.a>
      </div>
    </div>
  );
}
