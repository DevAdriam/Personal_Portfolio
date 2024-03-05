import TitleText from "@/components/custom/TitleText";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Clients = () => {
  //   const { scrollTargetRef, scrollToTarget } = useCustomScroll();

  const clientList = [
    {
      client: "Pocket Nicotine",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWErMMZ_mFbxDPdo_2MQO3n8A8o8gOE0Y0GIt1BqREDA&s",
      content:
        "This ERP software is a versatile solution featuring stock management, B2B and B2C capabilities, a POS system for retail efficiency, and an integrated loyalty program for enhanced customer engagement",
      delayTime: 0.4,
      x: -100,
    },
    {
      client: "App studio",
      content:
        "Encompassing a dynamic Point of Sale (POS) system and an integrated membership management solution, this software provides businesses with a concise and efficient toolset for seamless retail transactions and effective membership administration.",
      src: "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/303420267_5400190333403638_6670815680713397952_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=N4Biyq9tB8EAX88coEn&_nc_ht=scontent-sin6-3.xx&oh=00_AfDkdYKJQ7KwGmJxI_Btu54ZHqwxKTy2qInMx5vXTI-mCg&oe=65EB6A84",
      delayTime: 0.6,
    },
  ];
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const card2Variants = {
    hidden: { opacity: 0, x: 100 },
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
      className="w-full md:px-[220px] bg-black container  py-10"
      //   ref={clientsRef}
      id="clients"
    >
      <motion.h1
        ref={ref}
        initial="hidden"
        transition={{ delay: 0.2, duration: 1 }}
        animate={controls}
        variants={cardVariants}
      >
        <TitleText title="Previous & Current Work Projects"></TitleText>
      </motion.h1>

      <div className="w-full flex items-center justify-center flex-wrap gap-20 py-20 shadow-sm ">
        {clientList.map((item, index) => {
          return (
            <motion.div
              ref={ref}
              initial="hidden"
              transition={{ delay: item.delayTime, duration: 1 }}
              animate={controls}
              variants={index / 2 ? cardVariants : card2Variants}
            >
              <div
                className={` md:px-20 px-10 md:w-[65vw] w-[300] flex ${
                  index / 2 ? "md:flex-row-reverse" : "md:flex-row"
                } shadow-sm flex-col-reverse  shadow-slate-700 items-center md:justify-between justify-center md:gap-20 gap-10 py-10 rounded-xl  bg-transparent glassmorphism`}
              >
                <div>
                  <h1 className="md:text-4xl text-lg color text-white/55 mb-10">
                    {item.client}
                  </h1>
                  <p className="text-md text-white/55">{item.content}</p>
                </div>
                <Avatar>
                  <AvatarImage
                    src={item.src}
                    className="backdrop-filter backdrop-brightness-0 "
                  ></AvatarImage>
                  <AvatarFallback>{item.client}</AvatarFallback>
                </Avatar>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
