import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
// import "../src/Rating.css";
import "./Faqs.css";
import picture11 from "../../images/picture1.png";
import picture22 from "../../images/picture2.png";

const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "What is an HRMS?",
      content: `A Human Resource Management System (HRMS) is a form of human resources software that combines a number of systems and processes to ensure the easy management of human resources, business processes and data.`,
    },
    {
      title: "Why do I need HR Software?",
      content:
        "A Human Resource Management System (HRMS) is a form of human resources software that combines a number of systems and processes to ensure the easy management of human resources, business processes and data.",
    },
    {
      title: "What languages are supported?",
      content: `A Human Resource Management System (HRMS) is a form of human resources software that combines a number of systems and processes to ensure the easy management of human resources, business processes and data. `,
    },
    {
      title: "How secure is my data with palm.hr?",
      content: `A Human Resource Management System (HRMS) is a form of human resources software that combines a number of systems and processes to ensure the easy management of human resources, business processes and data. `,
    },
    {
      title: "How fast can I get started?",
      content: `A Human Resource Management System (HRMS) is a form of human resources software that combines a number of systems and processes to ensure the easy management of human resources, business processes and data. `,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "#043344",
  rowTitleColor: "blue",
  titleTextSize: "32px",
  rowTitleColor: "#043344",
  rowTitleTextSize: "16px",
  rowContentColor: "#043344",
  rowContentTextSize: "14px",
  // rowContentPaddingTop: "48px",
  rowContentPaddingTop: "24px",
  // rowContentColor: 'grey',
  arrowColor: "#32c69a",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const Faqs = () => {
  return (
    <>
      <div>
        <p className="q-title-rating">Customer Ratings</p>
      </div>
      <div className="q-pics-container">
        <div>
          <img className="q-pic1" src={picture11} alt="Logo" />
        </div>
        <div>
          <img className="q-pic2" src={picture22} alt="Logo" />
        </div>
      </div>
      <div className="faqs-main">
        <div>
          <Faq
            style={{ width: "85%" }}
            data={data}
            styles={styles}
            config={config}
          />
        </div>
      </div>
      <div className="q-button-container">
        <button className="q-button">Request a callback</button>
      </div>
    </>
  );
};

export default Faqs;
