import React from "react";
import "./featureStyle.css";
import feature1 from "../../images/Rectangle398.png";
import feature2 from "../../images/Rectangle403.png";
import feature3 from "../../images/Rectangle402.png";
import feature4 from "../../images/Rectangle401.png";
import feature5 from "../../images/Rectangle400.png";
import logo1 from "../../images/Login-logo.png";
import logo2 from "../../images/mudad.png";
import logo3 from "../../images/Frame1.png";

import FeatureList from "./FeatureList";
import { useState } from "react";
function Features() {
  const [condition, setCondition] = useState(false);
  const [condition2, setCondition2] = useState(true);

  console.log(condition);
  const data = [
    {
      heading: "People Management",
      descryption:
        "With employee data synced under one self-service platform, you get an overview of your teams in real time.",
      Url: feature1,
      list8: [
        "SSE Profiles & Data",
        "Documents Management",
        "Organization Charts",
        "Team Insights & Reports",
        "Asset Management",
      ],
    },
    {
      heading: "Time Management",
      descryption:
        "Ensure that your team members are always where they're supposed to be when they're supposed to be there.",

      Url: feature2,
      list8: [
        "Time Off / Absence & Leaves",
        "Time Tracking & Insights",
        "Mobile Check-in & Check-out",
        "Work Scheduling & Shift Planning",
        "Remote Work Management",
      ],
    },
    {
      heading: "Compensation Management",
      descryption:
        "Payroll, HR budgets, and expenses are handled automatically, accurately, and on time for your peace of mind.",

      Url: feature3,
      list8: [
        "Multi-Country Payroll",
        "WPS Payroll Automation",
        "Payroll Insights & Reports",
        "Expenses Management",
        "Loan Management",
      ],
    },
    {
      heading: "Talent Management",
      descryption:
        "Stay connected to teams’ progress and make your culture shine through easy-to-use communication features.",

      Url: feature4,
      list8: [
        "Onboarding/Offboarding",
        "SSE Online Requests",
        "Internal Communications",
        "Performance Management",
        "EOS & Benefits Management",
      ],
    },
    {
      heading: "Regulatory Compliance",
      descryption:
        "Mitigate risks, protect your business from fines and penalties, and keep your teams safe with compliant processes.",

      Url: feature5,
      img1: logo1,
      img2: logo2,
      img3: logo3,
      list8: [
        "KSA WPS Compliance (Mudad)",
        "KSA Integrations (Gosi, Muqeem)",
        "Other Countries Integrations",
      ],
    },
  ];
  return (
    <>
      <div className="featuresDiv">
        <div className="featureHeading">
          <h3 className="featureHeading1">
            Taking your HR Functions to the Next Level
          </h3>
        </div>
        <div className="featureParadiv">
          <p className="featureParagraph">
            While other HRMS developers focus on rigid solutions, palm.hr allows
            you to adjust, personalize and scale your human resource management
            functions at levels never seen before with highly configurable
            features.
          </p>

          <p className="featureParagraph">
            Our intuitive interface covers everything you need to boost
            processes from onboarding to offboarding, with modules ranging from
            simplified team administration to accurate timekeeping, error-free
            payroll processing, and UX-driven communications. The best part? All
            this happens in full compliance with local labor laws, employment
            regulations, and business protocols.
          </p>
        </div>
        <div>

        <button className="featureBtn">Watch palm.hr in action</button>
        </div>

        <div className="featureHead">
          <p className="featureHeading2">
            Most Popular <span className="bold_text">palm.hr</span> Features
          </p>
        </div>
        <div className="mainDivAlign">
          {/* {data.map((items) => {
              return condition ? (
                <FeatureList items={items} value={condition} />
              
              ) : (
                // setCondition(false)

                <FeatureList items={items} value={condition} />
              
              );
          })} */}
          
        <div className="featureRow1">
          <div className="featureCol1">
            <div className="featureColPara">
              <p className="featureColPara1">{data[0]?.heading}</p>
            </div>
            <div className="featureColPara2">
              <p className="featureColService">{data[0]?.descryption}</p>
            </div>
            <div>
              <ul className="featurePoints">
                {data[0].list8.map((task, index) => {
                  return <li>{task}</li>;
                })}
                {/* <li>{items?.list1}</li>
              <li>{items?.list2}</li>
              <li>{items?.list3}</li>
              <li>{items?.list4}</li>
              <li>{items?.list5}</li> */}
              </ul>
            </div>
            <div className="featureLogo">
              <img src={data[0]?.img1} className="featureLogoImg" />
              <img src={data[0]?.img2} className="featureLogoImg" />
              <img src={data[0]?.img3} className="featureLogoImg" />
            </div>
            <button className="featureBtn featurebtn2" >
              Learn More
            </button>
          </div>
          <div className="featureCol2">
            <img src={data[0]?.Url} className="featureCol2Img" />
          </div>
        </div>
          {/* <FeatureList items={data[0]} value={condition} /> */}
          <FeatureList items={data[1]} value={condition2} />
          <FeatureList items={data[2]} value={condition} />
          <FeatureList items={data[3]} value={condition2} />
          <FeatureList items={data[4]} value={condition} />
        </div>
      </div>
    </>
  );
}

export default Features;
