import React from "react";
import MainBOttom from "./MainBottom";
import "./mainHeader.css";
import rightImg from "../../images/right_img.png"

function Main() {
  return (
    <div className="heroSection">
      <div className="main_head">
        <div className="main_left">
          <div className="main_left_top">
            <p className="main_left_para">
              Upgrade your HR Management with our HR Software
            </p>
          </div>
          <div className="main_left_heading">
            <p className="main_left_head">Creating</p>
            <p className="main_left_head">
              Happy Workplaces<span className="main_left_heading_dot">.</span>
            </p>
          </div>
          <div className="main_left_div">
            <p className="main_left_paragraph">
              <span className="text_bold">palm.hr</span> is a powerful human
              resource management software automating your people management
              functions and centralizing them into one easy platform. Packed
              with all the reliable features to handle, empower, engage, and
              retain your teams throughout their employment lifecycle, our
              cutting-edge HR software enables you to{" "}
              <span className="text_bold">
                create happy workplaces where employees thrive.
              </span>
            </p>
          </div>
          <div className="main_left_div2">
            <ul className="main_left_list">
              <li>People Management</li>
              <li>Time Management</li>
              <li>Compensation Management</li>
              <li>Talent Management</li>
              <li>Regulatory Compliance</li>
            </ul>
          </div>
          <div>
            <button className="main_left_btn">
              Start your palm.hr journey
            </button>
          </div>
        </div>
        <div className="main_right">
          <div className="main_right_img">
            <img src={rightImg} alt="pic" className="main_image_pic" />
          </div>
          {/* <div className="calender_img">
          <img src={Calendar} alt="Calender" />
        </div>
        <div className="remotework_img">
          <img src={RemoteWork} alt="Remote Work" />
        </div>
        <div className="Emoji_img">
          <img src={Emoji} alt="Emoji" />
        </div> */}
        </div>
      </div>
      <div>
        <MainBOttom />
      </div>
    </div>
  );
}
export default Main;
