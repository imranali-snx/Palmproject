import React from "react";
import AppStore from "../../images/App Store.png";

import GooglePlay from "../../images/Google Play.png";
import AppGallery from "../../images/App_Gallery.png";
import Vector from "../../images/Vector1.png";
import Facebook from "../../images/Facebook.png";
import LinkedIN from "../../images/LinkedIN.png";
import Instagram from "../../images/Instagram.png";
import Twitter from "../../images/Twitter.png";

import "./footer.css";

export default function App() {
  return (
    <>
      <div className="container">
        <footer>
          <section className="ft-main">
            <div className="ft-main-item">
              <h2 className="ft-title">Get Started</h2>
              <ul>
                <li>
                  <a href="#">Request Live Demo</a>
                </li>
                <li>
                  <a href="#">Pricing Simulatio</a>
                </li>
                <li>
                  <a href="#">Start Free Trial</a>
                </li>
                <li>
                  <a href="#">Download App</a>
                </li>
              </ul>
            </div>

            <div className="ft-main-item">
              <h2 className="ft-title">Features</h2>
              <ul>
                <li>
                  <a href="#"> People Management</a>
                </li>
                <li>
                  <a href="#"> Time Management</a>
                </li>

                <li>
                  <a href="#">Compensation Management</a>
                </li>
                <li>
                  <a href="#">Talent Management</a>
                </li>
                <li>
                  <a href="#">Regulatory Compliance</a>
                </li>
              </ul>
            </div>
            <div className="ft-main-item">
              <h2 className="ft-title">Support</h2>

              <ul>
                <li>
                  <a href="#">Tools & Calculators</a>
                </li>
                <li>
                  <a href="#">palm.hr Configuration</a>
                </li>
                <li>
                  <a href="#"> palm.hr Documentation</a>
                </li>

                <li>
                  <a href="#">Help Desk</a>
                </li>
                <li>
                  <a href="#">Submit a Ticket (HubSpot)</a>
                </li>
              </ul>
            </div>

            <div className="ft-main-item">
              <h2 className="ft-title">Corporate</h2>
              <ul>
                <li>
                  <a href="#">About palm.hr</a>
                </li>
                <li>
                  <a href="#">PalmHR Offices </a>
                </li>
                <li>
                  <a href="#">PalmHR Careers</a>
                </li>
                <li>
                  <a href="#">Knowledge Base</a>
                </li>
                <li>
                  <a href="#">Concierge</a>
                </li>
              </ul>
            </div>

            <div className="ft-main-item">
              <h2 className="ft-title">Get in touch</h2>

              <ul>
                <li>
                  <a href="#">Inquiries</a>
                </li>
                <li>
                  <a href="#">Ask palm.hr / Give Feedback </a>
                </li>
                <li>
                  <a href="#">Follow us</a>
                </li>
                <li>
                  <a href="#">PalmHR Offices </a>
                </li>
              </ul>
            </div>

            <div className="ft-main-item">
              <h2 className="ft-title">Mobile App</h2>
              <div className="padding-buttom">
                <div className="img">
                  <img src={AppStore} alt="Logo" />
                </div>
                <div className="img">
                  <img src={GooglePlay} alt="Logo" />
                </div>
                <div className="img">
                  <img src={AppGallery} alt="Logo" />
                </div>
                <div>
                  <p className="soon">Coming Soon</p>
                </div>
              </div>
            </div>
          </section>
          <section className="ft-main-input  ">
            <div className="img-logo">
              <img src={Vector} alt="Logo" />
            </div>
            <div className="get-intouch">
              <h2 className="ft-touch-titite">Get in touch</h2>
              <p className="text-update">
                All updates on HR right in your inbox.
              </p>
            </div>

            <form>
              <div className="input-form">
                <input
                  type="email"
                  name="email"
                  className="inputfield"
                  id="inputID"
                  placeholder="Enter email address"
                />
                <button
                  className="submit-button"
                  style={{ backgroundColor: "#FFFFFF", color: "#32C69A" }}>
                  {" "}
                  Subscribe
                </button>
              </div>
            </form>
          </section>
          <hr />
          <section className="ft-main-input-buttom">
            <div>
              <h2 className="ft-title">
                ©PalmHR 2022 – All rights reserved / Terms & Conditions / Data
                Protection & Privacy Policy / Sitemap / Captcha
              </h2>
            </div>
            <div className="ft-logo-buttom">
              <div className="img-icon">
                <img src={Facebook} alt="Logo" />
              </div>
              <div className="img-icon">
                <img src={LinkedIN} alt="Logo" />
              </div>
              <div className="img-icon">
                <img src={Instagram} alt="Logo" />
              </div>
              <div className="img-icon">
                <img src={Twitter} alt="Logo" />
              </div>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}
