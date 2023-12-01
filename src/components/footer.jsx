import React from "react";
import footerLogo from ""; //footer logo image
import facebook from ""; //facebook image
import instagram from ""; //instagram image
// import whatsapp from "";//whatsapp image
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="containerFooter">
        <div className="topFooter">
          <div className="footer1">
            <div className="imgContainer">
              <img src={footerLogo} alt="logo" />
            </div>
            <p className="footer1Description">
            Quote of Our Website
            </p>
            <div className="social">
              <Link to={"https://www.facebook.com/"}>
                <div className="facebook">
                  <img src={facebook} alt="" />
                </div>
              </Link>
              {/* Instagram page */}
              <Link to={"https://www.instagram.com/"}> 

                <div className="instagram">
                  <img src={instagram} alt="" />
                </div>
              </Link>
              {/* <Link to={"https://www.whatsapp.com/"}>
                <div className="whatsapp">
                  <img src={whatsapp} alt="" />
                </div>
              </Link> */}
            </div>
            <div className="location">
              <i className="fa-solid locationIcon fa-location-arrow"></i>
              <p>Follow the order</p>
            </div>
          </div>
          <div className="footer2">
            <p className="title">NomNom</p>
            <p>Blog</p>
            <p>About us</p>
            <p>Terms of use</p>
            <p>Help</p>
          </div>
          <div className="footer3">
            <p>Refund</p>
            <p>Delivery</p>
          </div>
          <div className="footer4">
            <p className="title">Contact</p>
            <p>email</p>
            <p>+994516235933</p>
            <p>
             address
            </p>
          </div>
        </div>
        <div className="bottomFooter">
          <span className="bottomLeft">© 2023. All rights reserved.</span>
          <div className="bottomCenter">
            <p>Made by</p>
            <p className="centerBottom">united skills</p>
          </div>
          <div className="bottomRight">
            <img src={footerVisa} alt="" />
          </div>
        </div>
        <div className="non">hello</div>
      </div>
    </div>
  );
};

export default Footer;
