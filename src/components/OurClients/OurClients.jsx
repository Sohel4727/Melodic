import React from "react";
import "./OurClients.css";
import clientProfile from "../../assets/clientProfile.png";
import rating from "../../assets/star.svg"
import colon from "../../assets/colon.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OurClients = () => {
  const data = [
    {
      profile: clientProfile,
      title: "What Our Client Saying About Us",
      description:
        "As Director of Earthstep (Innovations) in Fremantle, Western Australia, I can confidently say that the team at Melodic Byte is exceptional. They consistently delivered high-quality work in promotional videos, web development, SEO, and social media. Their proactive approach and valuable insights enhanced our projects and ensured customer satisfaction. Present them with an idea, and they will deliver.",
      name: "Stephen Dall",
      rating: 4,
    },
    {
      profile: clientProfile,
      title: "What Our Client Saying About Us",
      description:
        "As Director of Earthstep (Innovations) in Fremantle, Western Australia, I can confidently say that the team at Melodic Byte is exceptional. They consistently delivered high-quality work in promotional videos, web development, SEO, and social media. Their proactive approach and valuable insights enhanced our projects and ensured customer satisfaction. Present them with an idea, and they will deliver.",
      name: "Stephen Dall",
      rating: 4,
    },
    {
      profile: clientProfile,
      title: "What Our Client Saying About Us",
      description:
        "As Director of Earthstep (Innovations) in Fremantle, Western Australia, I can confidently say that the team at Melodic Byte is exceptional. They consistently delivered high-quality work in promotional videos, web development, SEO, and social media. Their proactive approach and valuable insights enhanced our projects and ensured customer satisfaction. Present them with an idea, and they will deliver.",
      name: "Stephen Dall",
      rating: 4,
    },
    {
      profile: clientProfile,
      title: "What Our Client Saying About Us",
      description:
        "As Director of Earthstep (Innovations) in Fremantle, Western Australia, I can confidently say that the team at Melodic Byte is exceptional. They consistently delivered high-quality work in promotional videos, web development, SEO, and social media. Their proactive approach and valuable insights enhanced our projects and ensured customer satisfaction. Present them with an idea, and they will deliver.",
      name: "Stephen Dall",
      rating: 4,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="ourClient_wrapper">
       
      <Carousel className="carousel" responsive={responsive}>
        {data.map((client, index) => (
          <div key={index} className="client_card">
            <img
              src={client.profile}
              alt={client.name}
              className="client_image"
            />
            <div className="client_content">
                <img  src={colon} width={50} alt="img" />
              <h3 className="client_title">{client.title}</h3>
              <p className="client_description">{client.description}</p>
              <h4 className="client_name">{client.name}</h4>
              <img className="client_rating" src={rating} alt="rating" />
              <img className="client_rating" src={rating} alt="rating" />
              <img className="client_rating" src={rating} alt="rating" />
              <img className="client_rating" src={rating} alt="rating" />
              <img className="client_rating" src={rating} alt="rating" />
            </div>
          </div>
        ))}
      </Carousel>
        </div>
 
  );
};

export default OurClients;
