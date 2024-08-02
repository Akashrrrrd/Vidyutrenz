import React from "react";
import "./Contacts.css";
import emailIcon from "../../assets/email-icon.png"; // replace with your icon path
import phoneIcon from "../../assets/phone-icon.png"; // replace with your icon path
import websiteIcon from "../../assets/website-icon.png"; // replace with your icon path
import socialMediaIcon from "../../assets/social-media-icon.png"; // replace with your icon path

const Contacts = () => {
  return (
    <div className="contact-page" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-containers">
          <div className="contact-item">
            <img src={emailIcon} alt="Email" />
            <span>vidyutrenz@citchennai.com</span>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone" />
            <span>+919876543210</span>
          </div>
          <div className="contact-item">
            <img src={websiteIcon} alt="Website" />
            <span>www.vidyutrenz.com</span>
          </div>
          <div className="contact-item">
            <img src={socialMediaIcon} alt="Social Media" />
            <span>@vidyutrenz</span>
          </div>
        </div>
      </div>

      <div className="map-img">
        <img src="" alt="" />
      </div>
      {/* <div className="map-container">
        <h1>Our Location</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084516!2d80.04049737507648!3d12.971611287343737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sChennai%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1722501272708!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div> */}
    </div>

  );
};

export default Contacts;