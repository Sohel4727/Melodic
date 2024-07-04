import React from "react";
import logo from "../../assets/logo.png";
import facebook from "../../assets/Social/facebook.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer_main_container">
        <section className="content_section">
      <div className="logo_container">
        <img src={logo} alt="logo" />
        <p className="footer_heading">Melodic <b>Byte</b></p>
      </div>
      <p className="footer_description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet vero
        provident facere blanditiis omnis architecto quae nisi dolorem tempora
        ab!
      </p>
      <div className="social_icon_container">
        <img src={facebook} alt="facebook" />
        <img src={facebook} alt="linkedIn" />
        <img src={facebook} alt="social" />
        <img src={facebook} alt="instagram" />
      </div>
      <div className="pages_links">
        <p>About us</p>
        <p>Portfolio</p>
        <p>Carrers</p>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
      </div>
        </section>
      <div className="contact_details_container">
        <div className="have_a_question">
        <span>
            <p className="contact_title">Have a Questions?</p>
            <p>310-437-2766</p>
        </span>
        <span>
            <p className="contact_title">Contact us at</p>
            <p>unreal@outlook.com</p>
        </span>
        </div>
        <div className="year_container">
            <p>c 2000-2001, All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
