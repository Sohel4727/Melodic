import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer_main_container">
      <div className="logo_container">
        <img src={logo} alt="logo" />
        <h1 className="footer_heading">Melodic Byte</h1>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet vero
        provident facere blanditiis omnis architecto quae nisi dolorem tempora
        ab!
      </p>
      <p>social icons</p>
      <div className="pages_links">
        <p>About us</p>
        <p>Portfolio</p>
        <p>Carrers</p>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
      </div>
    </footer>
  );
};

export default Footer;
