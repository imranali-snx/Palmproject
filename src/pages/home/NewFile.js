import React from "react";
import "./NewFile.css";
// import videoimg from '../assets/videoimg.png'
// import ReactPlayer from 'react-player'

// Render a YouTube video player

// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const NewFile = () => {
  return (
    <div className="scnd-component-container1">
      <div className="scnd-component-inner-container1">
        <div className="scnd-component-part-one1">
          <h1 className="scnd-component-part-one1-head">
            Reshaping Employment <br /> Experiences in the Middle East
          </h1>
          <h2 className="scnd-component-part-one1-headtwo">
            Orchestrate your HR function with <br /> speed and flexibility
          </h2>
          <h3 className="scnd-component-part-one1-headthree">
            Looking for a way to simplify and rationalize your human resources
            management processes? The search is over!{" "}
          </h3>
          <p className="scnd-component-part-one1-para">
            <span className="para">palm.hr</span> is the game-changing
            management system employers in the Middle East have been waiting
            for. Our next-gen HR software seamlessly integrates into today’s
            workplaces, making it easier to orchestrate HR functions. Our HRMS
            is here to help reshape your employment experience with speed and
            flexibility.
          </p>
          <p className="scnd-component-part-one1-para">
            {" "}
            No more spending hours trying to find documents, staling
            spreadsheets, or dealing with overwhelming email exchanges. palm.hr
            offers an intuitive way to ease how you manage and communicate with
            people. You get everything organized in one place so everyone can be
            more productive more quickly, allowing for hassle-free workdays.
          </p>
          <div className="scnd-component-part-one1-btn">
            <a className="scnd-component-part-one1 a" href="/">
              Schedule a call with our team
            </a>
          </div>
        </div>
        <div className="scnd-component-part-two">
          {/* <video className="video-section" controls="true">
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/mp4"
            />
          </video> */}
          <video controls className="video-tag">
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default NewFile;
