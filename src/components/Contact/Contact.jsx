import React from "react";
import contactImg from "../../assets/contact.png";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="main_contact_container">
      <div className="get_in_touch_container">
        <h1 className="get_in_touch_heading">Get in Touch With Us</h1>
      </div>
      <div className="contact_section">
        <div className="contact_form">
            <div className="contact_name_section">
          <span>
            <label className="contact_lable">Name</label>
            <div className="input_background">
              <input className="contact_input"  placeholder='John Doe' type="text" />
            </div>
          </span>
          <span className="contact_phone">
            <label className="contact_lable">Phone</label>
            <div className="input_background">
              <input className="contact_input" placeholder='1234567890' type="number" />
            </div>
          </span>
            </div>
           
            <div className="contact_email">
            <label className="contact_lable">Email</label>
            <div className="input_background">
              <input className="contact_input" placeholder='dummy@gmail.com' type="email" />
            </div>
          </div>
            <div className="contact_email">
            <label className="contact_lable">Want to say something?</label>
            <div className="input_background">
              <textarea className="contact_textarea" placeholder='Type here...' type="text" />
            </div>
            <button className="send_button">SEND</button>
          </div>
        </div>
        <img src={contactImg} width={400} alt="contact" />
      </div>
    </div>
  );
};

export default Contact;
