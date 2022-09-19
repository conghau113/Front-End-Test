import "./index.scss";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleClickMenu = () => {
    console.log("object");
    showNav ? setShowNav("") : setShowNav("menuOpen");
  };

  const handleClickHomePage = () => {
    const section = document.querySelector("#homePage");
    setShowNav("");
    return section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleClickWorkPage = () => {
    const section = document.querySelector("#workPage");
    setShowNav("");
    return section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleClickServicesPage = () => {
    const section = document.querySelector("#servicesPage");
    setShowNav("");
    return section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleClickContactPage = () => {
    const section = document.querySelector("#contactPage");
    setShowNav("");
    return section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="navBar">
      {showNav && (
        <div onClick={() => setShowNav("")} className="overlay"></div>
      )}
      <div onClick={handleClickHomePage} className="navLogo">
        <h2>LOGO</h2>
      </div>
      <nav className={showNav && "mobile-show"}>
        <Link onClick={handleClickWorkPage} to="#" className="workLink">
          WORK
        </Link>
        <NavLink
          onClick={handleClickServicesPage}
          to="#"
          className="servicesLink"
        >
          SERVICES
        </NavLink>
        <NavLink
          onClick={handleClickContactPage}
          to="#"
          className="contactLink"
        >
          CONTACT
        </NavLink>
      </nav>
      <span onClick={handleClickMenu} className={`menuBar ${showNav}`}></span>
    </div>
  );
};

export default Sidebar;
