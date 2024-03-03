import TitleText from "@/components/custom/TitleText";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profile from "../assets/ahtarkya.jpeg";
import { Button } from "@/components/ui/button";
import MultiCarousel from "./multiCarousel";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
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
    <div>
      <div className="w-full h-[100vh] flex items-center justify-center flex-col ">
        <Avatar className=" shadow-md shadow-gray-700 mb-6">
          <AvatarImage
            src={profile}
            className="filter hover:grayscale-0 shadow-3xl shadow-slate-700"
          />
          {/* <AvatarImage src="https://avatars.githubusercontent.com/u/111653761?v=4" /> */}
          {/* <AvatarImage
            src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/117910440_583055772575833_8273299672489364291_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_ohc=p50pB13_nH4AX_Fi1rQ&_nc_ht=scontent-sin6-2.xx&oh=00_AfA7aSH__aj5m151SLTGv2VCjxlrZ66QHtQigr1oAW9adw&oe=660BE8A5"
            className="filter grayscale hover:grayscale-0"
          /> */}

          <AvatarFallback>Naing Aung Zaw</AvatarFallback>
        </Avatar>

        <h1 className="text-gray-500 mb-5">
          Hello, I'm <span className="">Naing Aung Zaw</span>
        </h1>

        <motion.h1
          ref={ref}
          initial="hidden"
          transition={{ delay: 0.2, duration: 1 }}
          animate={controls}
          variants={cardVariants}
          className="w-[600px] text-center mb-10"
        >
          <TitleText
            title={`Designing and Implementing Server-Side Solutions
`}
          />
        </motion.h1>

        <motion.div
          ref={ref}
          initial="hidden"
          transition={{ delay: 2.5, duration: 1 }}
          animate={controls}
          variants={cardVariants}
        >
          <Button
            title="Download CV"
            variant={"outline"}
            className="bg-transparent shadow-md shadow-slate-700  border-white/55 w-[200px] py-7 text-white/55 text-xl cursor-pointer hover:border-white/90 hover:text-white/90 duration-500 transform"
          >
            Download CV
          </Button>
        </motion.div>

        <MultiCarousel />
      </div>
    </div>
  );
};

export default Banner;
