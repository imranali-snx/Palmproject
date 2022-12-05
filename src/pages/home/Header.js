import React, { useState, Fragment } from "react";
import logo from "./coverimages/logo.png";
import { Link } from "gatsby";
import { Input, Tooltip } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import Horizontal from "../../images/Horizontal.png";
import "../style.css";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  const onClick = (e) => {
    setNavShow(!navShow);
  };
  return (
    <>
      <div className="top-header">
        Palm HR
          </div>
       <header className="header-area inner-header">
        <div className="header-bottom-area header-sticky is-sticky">
          <div className="main-menu">
            <div className="header-logo">
              <Link to="/">
                <img alt="palm.hr" src={Horizontal} />
              </Link>
            </div>
            <nav className="main-navigation">
              <ul className="ulDiv">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/platform">Platform</Link>
                </li>
                <li>
                  <Link to="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link to="/contact">Why palm.hr</Link>
                </li>
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
              </ul>
            </nav>
            <div className="nav_bar_btn">
              <button className="nav_login_btn">Login</button>
              <button className="free_trial_btn">Free Trial</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
