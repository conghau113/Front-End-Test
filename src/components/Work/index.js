import "./index.scss";
import { workImageList } from "./workismage";
import workData from "../../data/works.json";
import { useState } from "react";

const Work = () => {
  const [showAllBox, setShowAllBox] = useState(false);

  const handleClickSeeAllButton = () => {
    showAllBox ? setShowAllBox("") : setShowAllBox("showAll");
  };

  const renderWork = (workData) => {
    return (
      <>
        {workData.map((work, idex) => {
          return (
            <div key={work.id} className="imageBox">
              <img
                className="imageWork"
                src={workImageList[idex]}
                alt="title"
              />
              <div className="imageBoxHover">
                <h1>{work.title}</h1>
                <p>{work.description}</p>
                <div className="seeProject">
                  <div className="seeProjectLink">
                    See Project
                    <i>&#8594;</i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div id="workPage" className="work">
      <h1>WORK</h1>
      <div className={`workBox ${showAllBox}`}>
        {/* <div className="imageBox">
          <img className="imageWork" src={workimage1} alt="title" />
          <div className="imageBoxHover">
            <h1>Abstract Design</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <div className="seeProject">
              <div className="seeProjectLink">
                See Project
                <i>&#8594;</i>
              </div>
            </div>
          </div>
        </div> */}
        {renderWork(workData.work)}
      </div>
      <div className="seeAllButton">
        <button onClick={handleClickSeeAllButton}>
          {showAllBox ? "Collapse" : "See All"}
        </button>
      </div>
    </div>
  );
};

export default Work;
