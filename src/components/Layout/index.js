import Contact from "../Contact";
import Footer from "../Footer";
import Home from "../Home";
import OurTeam from "../OurTeam";
import Services from "../Services";
import Sidebar from "../Sidebar";
import Work from "../Work";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Home />
      <Work/>
      <Services />
      <OurTeam />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
