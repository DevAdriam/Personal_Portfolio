import TitleText from "@/components/custom/TitleText";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      className=" h-[max-content] px-10 md:px-[220px] bg-black container py-10"
      id="about"
    >
      <motion.h1
        ref={ref}
        initial="hidden"
        transition={{ delay: 0.4, duration: 1 }}
        animate={controls}
        variants={cardVariants}
      >
        <TitleText title="Who am I"></TitleText>
      </motion.h1>

      <div className="w-full flex items-center justify-between py-10 ">
        <motion.p
          ref={ref}
          initial="hidden"
          transition={{ delay: 0.8, duration: 1 }}
          animate={controls}
          variants={cardVariants}
          className="text-xl text-white/55"
        >
          I am <span className="font-bold">Naing Aung Zaw</span> ,
          {new Date().getFullYear() - 2004}-year-old MERN Stack Developer,
          currently serving as a Backend Developer at
          <span className="font-bold mx-1">Xsphere</span>. My expertise lies in
          problem-solving and creative thinking, and I am enthusiastic about
          learning new technologies. I bring a dedicated and proactive approach
          to project development and maintenance.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
