import React from "react";
import "./downloadApp.css";
import feedback_logo from "../../images/Group.png";
function Feedback({ item }) {
  return (
    <>
      <div className="feedback_sec">
        <div className="feedback_imgsec">
          <img src={feedback_logo} className="feedback_img" />
        </div>
        <div className="feedback_parasec">
          <p className="feedback_par">
            {/* <span className="bold_text">palm.hr</span> is the HR managers dream.
          From day 1,<span className="bold_text">palm.hr</span> has helped us
          implement legal requirements and set new standards for employee
        experience. */}
            {item?.description}
          </p>
        </div>
        <div className="feedback_profilediv">
          <div className="feedback_profile">
            {/* <img src={feedback_profile} className="feedback_profileimg" /> */}
            <img src={item?.Url} className="feedback_profileimg" />
          </div>
          <div className="feedback_profilename">
            <p className="feedback_profileh3">{item?.name}</p>
            <p className="feedback_profilepara">{item?.designation}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
