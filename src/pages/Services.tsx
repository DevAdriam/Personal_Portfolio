import TitleText from "@/components/custom/TitleText";
import ServiceCard from "@/layout/ServiceCard";
import { motion, useAnimation } from "framer-motion";
import { Code2Icon } from "lucide-react";
import { useEffect } from "react";
import { FaCalculator, FaUsers } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const servicesIProvides = [
    {
      title: "Membership Management System",
      icon: <FaUsers />,
      delayTime: 0.4,
      content:
        "Streamline and organize your organization's memberships effortlessly with our Membership Management System. From onboarding new members to renewals and communication, our system ensures a seamless experience. Gain insights into member engagement, automate renewals, and foster a thriving community with our user-friendly and feature-rich platform.",
    },
    {
      title: "POS System",
      icon: <TiShoppingCart />,
      delayTime: 0.6,
      content:
        "Drive sales and enhance customer service with our Point of Sale (POS) System. Simplify transactions, manage inventory in real-time, and gain valuable insights into customer behavior. Upgrade your retail or hospitality business with a reliable and user-friendly POS solution.",
    },
    {
      title: "ERP Solution",
      icon: <FaCalculator />,
      delayTime: 0.8,
      content:
        "Elevate your business with our comprehensive ERP solution. Unify and streamline your processes across departments, from finance and human resources to supply chain and customer relationship management. Experience improved productivity, data accuracy, and decision-making capabilities.",
    },
    {
      title: "Responsive Design",
      icon: <Code2Icon />,
      delayTime: 1,
      content:
        "Revolutionize your restaurant operations with our Kitchen Management System. Optimize order processing, inventory control, and kitchen workflows. Increase the speed and accuracy of your culinary team, ensuring a delightful dining experience for your customers.",
    },
  ];

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
    <div className="md:px-[220px] h-[max-content] bg-black container py-10">
      <motion.div
        ref={ref}
        initial="hidden"
        transition={{ delay: 0.4, duration: 1 }}
        animate={controls}
        variants={cardVariants}
      >
        <TitleText title="Services I Provide"></TitleText>
      </motion.div>
      <div className="flex items-center justify-start gap-16 py-10 mt-10 flex-wrap">
        {servicesIProvides.map((item, index) => {
          return (
            <ServiceCard
              key={index}
              title={item.title}
              icon={item.icon}
              content={item.content}
              delayTime={item.delayTime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
