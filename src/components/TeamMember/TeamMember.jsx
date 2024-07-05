import React from "react";
import "./TeamMember.css";
import asiyah from "../../assets/asiyah.png";
import angga from "../../assets/angga.png";
import Poornisha from "../../assets/Poornisha.png";
import woYou from "../../assets/woYou.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TeamMember = () => {
  const teamData = [
    {
      profile: asiyah,
      name: "Aisyah",
      designation: "I teach how to start UX",
    },
    {
      profile: angga,
      name: "Angga",
      designation: "I teach how to design test",
    },
    {
      profile: Poornisha,
      name: "Poornisha",
      designation: "HR Executive",
    },
    {
      profile: woYou,
      name: "Wo You ",
      designation: "I teach how to do icons",
    },
    {
      profile: asiyah,
      name: "Aisyah",
      designation: "I teach how to start UX",
    },
    {
      profile: angga,
      name: "Angga",
      designation: "I teach how to design test",
    },
    {
      profile: Poornisha,
      name: "Poornisha",
      designation: "HR Executive",
    },
    {
      profile: woYou,
      name: "Wo You ",
      designation: "I teach how to do icons",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 0 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="teamMember_wrapper">
      <Carousel className="carousel" responsive={responsive}>
        {teamData.map((member, index) => (
          <div key={index} className="team_card">
            <img
              src={member.profile}
              alt={member.name}
              className="team_image"
            />
            <div className="team_content">
              <h3 className="team_name">{member.name}</h3>
              <p className="team_designation">{member.designation}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TeamMember;
