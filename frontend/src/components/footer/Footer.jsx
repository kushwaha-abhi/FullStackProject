import { assets } from "../../assets/frontend_assets/assets";
import "./footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            libero inventore harum corrupti qui ratione, laudantium ipsam modi
            earum reiciendis hic provident vero, vel doloremque totam enim
            quidem quo magni.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Plicy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
                <li>+91 9450-111-888</li>
                <li>tomato@gmail.com</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
