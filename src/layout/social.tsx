import { FaGithub } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";

const Social = () => {
  const socialLinks = [
    {
      icon: <TiSocialFacebook />,
      path: "https://www.facebook.com/naingaung.zaw.142/",
    },
    {
      icon: <FaGithub />,
      path: "https://github.com/DevAdriam",
    },
  ];
  return (
    <ul className="grid place-items-center fixed left-[100px] top-[300px]">
      {socialLinks.map((item) => {
        return (
          <Link to={item.path}>
            <li className="text-3xl my-2 text-white/55 hover:text-white/90">
              {item.icon}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Social;
