import "./index.scss";
import { ourTeamImageList } from "./ourTeamImage";
import ourTeamData from "../../data/works.json";

const OurTeam = () => {
  const renderOurTeam = (ourTeamData) => {
    return (
      <>
        {ourTeamData.map((member, index) => {
          return (
            <div key={member.id} className="ourTeamImageBox">
              <img
                className="ourImage"
                src={ourTeamImageList[index]}
                alt="title"
              />
              <div className="ourImageHover">
                <h1>{member.name}</h1>
                <p>{member.position}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div id="ourTeamPage" className="ourTeam">
      <h1 className="ourTeamTitle">Our Team</h1>
      <p className="ourTeamContent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <div className="ourTeamImageList">
        {/* <div className="ourTeamImageBox">
            <img className="ourImage" src={ourTeam1} alt="title"/>
            <div className="ourImageHover">
                <h1>Jhon Doe</h1>
                <p>Degital Maketing Mannager</p>
            </div>
        </div>
        <div className="ourTeamImageBox">
            <img className="ourImage" src={ourTeam1} alt="title"/>
            <div className="ourImageHover">
                <h1>Jhon Doe</h1>
                <p>Degital Maketing Mannager</p>
            </div>
        </div> */}
        {renderOurTeam(ourTeamData.ourTeam)}
      </div>
    </div>
  );
};

export default OurTeam;
