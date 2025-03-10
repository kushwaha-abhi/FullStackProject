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
            
          </p>
          <div className="footer-social-icons">
            {/* <img src={assets.facebook_icon} alt="" /> */}
            
            <a href="https://x.com/Abhi_kushwaha_?s=09"> <img src={assets.twitter_icon} alt="" /></a>
             <a href="https://www.linkedin.com/in/abhishek-kushwaha-0a90ba286/"><img src={assets.linkedin_icon} alt="" /></a>
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
                <li>kushwahaabhi50888.com</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
