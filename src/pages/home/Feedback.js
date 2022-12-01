import React from "react";
import "./downloadApp.css";
import feedback_profile from "../../images/Rectangle 399.png";
import Feedback from "./Feedback_text";
function FeedBackListing() {
    const data =[
        {
            description: "palm.hr is the HR managers dream. From day 1, palm.hr has helped us implement legal requirements and set new standards for employee experience.",
            name: "Murthada AlQatan",
            Url: feedback_profile,
            designation:"HR Manager at Erne Fittings Middle East",
        },
        {
            description: "palm.hr is the HR managers dream. From day 1, palm.hr has helped us implement legal requirements and set new standards for employee experience.",
            name: "Murthada AlQatan",
            Url: feedback_profile,
            designation:"HR Manager at Erne Fittings Middle East",
        },
        {
            description: "palm.hr is the HR managers dream. From day 1, palm.hr has helped us implement legal requirements and set new standards for employee experience.",
            name: "Murthada AlQatan",
            Url: feedback_profile,
            designation:"HR Manager at Erne Fittings Middle East",
        }
    ];
  return (
    <>
      <div className="feedback_div">
        <div className="feedback_heading">
          <p className="feedback_heading_para">Join our Community of Happy, Successful people.</p>
        </div>
        <div className="feedback_innerdiv">
            {
                data.map((item)=>{
                    return(
                        <Feedback item = {item} />
                    )
                })
            }
        </div>
      </div>
    </>
  );
}

export default FeedBackListing;
