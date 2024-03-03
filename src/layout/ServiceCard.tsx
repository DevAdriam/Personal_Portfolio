import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({
  title,
  icon,
  content,
  delayTime,
}: {
  title: string;
  icon: any;
  content: string;
  delayTime: number;
}) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -200 },
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
    <motion.h1
      ref={ref}
      initial="hidden"
      transition={{
        delay: delayTime,
        duration: 1,
      }}
      animate={controls}
      variants={cardVariants}
    >
      <div className="w-[400px] h-[300px] rounded-md border-2 border-white/55 shadow-xl flex items-center justify-center gap-2 flex-col shadow-slate-700 hover:scale-105  transition-transform duration-500">
        <span className="text-white/90 text-3xl">{icon}</span>
        <h1 className="text-xl text-white/70">{title}</h1>
        <p className="text-md text-white/55 px-5">{content.slice(0, 150)}...</p>
      </div>
    </motion.h1>
  );
};

export default ServiceCard;
