import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const riseVar = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.25,
    },
  },
};

const formVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
};

const formChildrenVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.25,
    },
  },
};

export default function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (status.info.error) {
      let message = status.info.msg;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    if (status.submitted && !status.info.error && status.info.msg) {
      let message = status.info.msg;
      Swal.fire({
        icon: "success",
        title: "Submitted",
        text: message,
      });
    }
  }, [status]);

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xlezzogg",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response?.data.error);
      });
  };
  return (
    <section id="contact" className="contact__sec" ref={ref}>
      <div className="cont">
        <motion.h4 variants={riseVar}>Contact Us</motion.h4>
        <motion.form
          onSubmit={handleOnSubmit}
          variants={formVariant}
          initial="hidden"
          animate={controls}
        >
          <div className="flex gap-2 md:gap-3 flex-col md:flex-row">
            <div className="form-control w-full">
              <motion.label variants={formChildrenVariant} className="label">
                <span className="label-text">What is your name?</span>
              </motion.label>
              <motion.input
                variants={formChildrenVariant}
                id="name"
                type="text"
                name="_replyto"
                onChange={handleOnChange}
                required
                placeholder="Type here"
              />
            </div>
            <div className="form-control w-full">
              <motion.label variants={formChildrenVariant} className="label">
                <span className="label-text">What is your email?</span>
              </motion.label>
              <motion.input
                variants={formChildrenVariant}
                id="email"
                type="email"
                name="_replyto"
                onChange={handleOnChange}
                required
                placeholder="Type here"
              />
            </div>
          </div>
          <div className="form-control w-full mt-6">
            <motion.label variants={formChildrenVariant} className="label">
              <span className="label-text">Message</span>
            </motion.label>
            <motion.textarea
              variants={formChildrenVariant}
              id="message"
              type="text"
              name="message"
              onChange={handleOnChange}
              required
              placeholder="Type here"
            />
          </div>
          <div className="flex ">
            <motion.button
              className={`btn-primary
              ${
                !status.submitting
                  ? !status.submitted
                    ? ""
                    : ""
                  : "loading"
              }`}
              type="submit"
              disabled={status.submitting}
              variants={formChildrenVariant}
            >
              {!status.submitting
                ? !status.submitted
                  ? "Submit"
                  : "Submitted"
                : "Submitting..."}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
