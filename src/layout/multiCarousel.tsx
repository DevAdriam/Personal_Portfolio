import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import {
  SiDocker,
  SiExpress,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNginx,
  SiPostgresql,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const MultiCarousel = () => {
  const carouselItem = [
    {
      language: <SiTypescript />,
      color: "text-white/55 hover:text-blue-500",
      delay: 1,
    },
    {
      language: <FaReact />,
      color: "text-white/55 hover:text-blue-300",
      delay: 1.2,
    },
    {
      language: <SiPostgresql />,
      color: "text-white/55 hover:text-blue-400",
      delay: 1.4,
    },
    {
      language: <SiMysql />,
      color: "text-white/55 hover:text-blue-700",
      delay: 1.6,
    },
    {
      language: <FaNodeJs />,
      color: "text-white/55 hover:text-green-600",
      delay: 1.8,
    },
    {
      language: <SiJavascript />,
      color: "text-white/55 hover:text-yellow-500",
      delay: 2,
    },
    {
      language: <FaJava />,
      color: "text-white/55 hover:text-amber-700",
      delay: 2.2,
    },
    {
      language: <SiNestjs />,
      color: "text-white/55 hover:text-red-700",
      delay: 2.4,
    },
    {
      language: <SiExpress />,
      color: "text-white/55 hover:text-white",
      delay: 2.6,
    },
    {
      language: <SiNginx />,
      color: "text-white/55 hover:text-green-500",
      delay: 2.8,
    },
    {
      language: <SiSpringboot />,
      color: "text-white/55 hover:text-green-400",
      delay: 3,
    },
    {
      language: <SiDocker />,
      color: "text-white/55 hover:text-blue-400",
      delay: 3.2,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: -10 },
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
    <div className="mt-[80px] px-10">
      <ul className={`flex items-center flex-wrap justify-center gap-10`}>
        {carouselItem.map((item) => {
          return (
            <motion.div
              ref={ref}
              initial="hidden"
              transition={{ delay: item.delay, duration: 1 }}
              animate={controls}
              variants={cardVariants}
              className={item.color}
            >
              <li className={`text-4xl`}>{item.language}</li>
            </motion.div>
          );
        })}
      </ul>
    </div>
  );
};

export default MultiCarousel;
