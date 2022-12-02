import React, { useState, Fragment } from "react";
import { useMemo } from "react";
import logo from "./coverimages/logo.png";
import { Link } from "gatsby";
import { Input, Select } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import Horizontal from "../../images/Horizontal.png";
import "../style.css";
import countryList from "react-select-country-list";
import CountryDropdown from "country-dropdown-with-flags-for-react";

const Header = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className="top-header">
        <div className="uper-header">
          <div className="header-input">
            <Input
              size="large"
              color="white"
              placeholder="Search"
              bordered={false}
              prefix={<SearchOutlined />}
              className="ant-picker-input"
            />
          </div>

          <div className="header-link-div">
            <nav className="header-links">
              <ul>
                <li>
                  <Link to="/">Country</Link>
                </li>
                <li>
                  <Link to="/platform">Demo</Link>
                </li>
                <li>
                  <Link to="/solutions">Pricing</Link>
                </li>
                <li>
                  <Link to="/contact">Blog</Link>
                </li>
                <li>
                  <Link to="/resources">Careers</Link>
                </li>
                <li>
                  <Link to="/resources">Help Desk</Link>
                </li>
              </ul>
            </nav>
            <div>
              <CountryDropdown
                id="UNIQUE_ID"
                className="YOUR_CSS_CLASS"
                preferredCountries={["gb", "us"]}
                value=""
                handleChange={(e) => console.log(e.target.value)}
              ></CountryDropdown>
            </div>
          </div>
        </div>
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
