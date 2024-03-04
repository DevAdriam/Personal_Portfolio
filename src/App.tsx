import { useEffect } from "react";
import Nav from "./layout/Nav";
import Social from "./layout/social";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

const App = () => {
  useEffect(() => {
    document.title = "Naing Aung Zaw";
  }, []);

  return (
    <div className="max-w-[100vw] bg-black">
      <Nav />
      <Social />
      <div className="h-[max-content] py-20 max-w-[100vw] overflow-x-hidden">
        <Home />
        <About />
        <Services />
        <Clients />
        <Contact />
      </div>
    </div>
  );
};

export default App;
