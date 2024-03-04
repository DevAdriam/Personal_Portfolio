import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  const navMenu = [
    {
      title: "Home",
      path: "/#",
    },
    {
      title: "About",
      path: "#about",
    },

    {
      title: "Projects",
      path: "#clients",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];
  return (
    <div className="w-full py-8 text-white flex items-center justify-between container px-20 fixed top-0 z-10 ">
      <div>
        <h1 className="text-white/55">DevAdriam</h1>
      </div>

      <ul className="md:flex items-center justify-center gap-4 hidden">
        {navMenu.map((item, index) => {
          return (
            <Link to={item.path} className="hover:cursor-pointer" smooth>
              <li className="text-white/55 hover:text-white/90">
                {item.title}

                {index < 3 && <span className="ml-3">/</span>}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
