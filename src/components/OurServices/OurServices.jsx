import React from "react";
import "./OurServices.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OurServices = () => {
  const teamData = [
    {
      title: "Web Development",
      designation:
        "Our dedicated team of experts provides web application maintenance and support services to ensure the stable and uninterrupted operation of more...",
    },
    {
      title: "Web Designing",
      designation:
        "Melodic Byte is dedicated to optimizing your online presence with dynamic websites that excel in user experience and search engine  more...",
    },
    {
      title: "Music App Development",
      designation:
        "Melodic Byte specializes in creating cutting-edge music apps designed to enhance user experience and functionality. Our app makes learning  more...",
    },
    {
      title: "Graphic designing ",
      designation:
        "Our experienced team of graphic designers specializes in creating designs for travel, eCommerce, education, healthcare, and real estate industries.  more...",
    },
    {
      title: "AI-Powered Automations",
      designation:
        "Unlock the potential of AI to optimize your workflows with our extensive automation expertise. We specialize in crafting seamless integrations that connect more...",
    },
    {
      title: "AI-Powered Automations",
      designation:
        "Unlock the potential of AI to optimize your workflows with our extensive automation expertise. We specialize in crafting seamless integrations that connect more...",
    },
    {
      title: "AI-Powered Automations",
      designation:
        "Unlock the potential of AI to optimize your workflows with our extensive automation expertise. We specialize in crafting seamless integrations that connect more...",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 5,
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
    <div className="ourServices_wrapper">
      <p className="what_we_offer">What We Offer</p>
      <h1 className="ourServices_heading">Our Services</h1>
      <Carousel className="carousel" responsive={responsive}>
        {teamData.map((member, index) => (
          <div key={index} className="service_card">
            <div className="service_content">
              <h3 className="service_title">{member.title}</h3>
              <p className="service_designation">{member.designation}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OurServices;
