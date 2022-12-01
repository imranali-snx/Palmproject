import ReactDOM from 'react-dom'
import React from 'react'

import "./OfferSectionStyle.css";
import OfferSectionList from "./OfferSectionList";
import pic1 from "../../images/Group239.png";
import pic2 from "../../images/Group240.png";
import pic3 from "../../images/Group241.png";
import pic4 from "../../images/Group242.png";

const Offersection = () => {
  const data = [
    {
      heading: "Modular",
      Url: pic1,
      list1: "Ask for the Best Fit Features",
      list2: "Benefit from Micro-Services",
    },
    {
      heading: "Scalable",
      Url: pic2,
      list1: "Increase/Downsize Features",
      list2: "Upgrade Plans as you Grow",
    },
    {
      heading: "Secure",
      Url: pic3,
      list1: "Enterprise-Grade Security",
      list2: "Restricted Access to Data",
    },
    {
      heading: "Agile",
      Url: pic4,
      list1: "Always Improving with New Features",
      list2: "Frequent Updates & Easy Integrations ",
    },
  ];
  return (
    <>
      <div className="offerMain">
        <div className="offerDiv">
          <div className="offerHead">
            <p className="offerPara">Still Not Convinced?</p>
          </div>
          <div className="offerHead">
            <p className="offerPara1">Our HR Software at a Glance</p>
          </div>
          <div className="offerHead1">
            <p className="offerPara2">
              palm.hr offers an intuitive, revolutionary user experience
            </p>
          </div>
        </div>
        <div className="offerBox">
          {data.map((items) => {
            return <OfferSectionList items={items} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Offersection;
