import { Link } from "react-router-dom";

const Nav = () => {
  const navMenu = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blogs",
      path: "/profile",
    },
  ];
  return (
    <div className="w-full py-8 text-white flex items-center justify-between container px-20 fixed top-0">
      <div>
        <h1 className="text-white/55">DevAdriam</h1>
      </div>

      <ul className="flex items-center justify-center gap-4">
        {navMenu.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
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
