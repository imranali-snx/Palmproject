import React from "react";
import "./downloadApp.css";
import mobilepic from "../../images/mobilepic.png";
import huawei from "../../images/AppGallery.png";
import googleplay from "../../images/GooglePlay.png";
import applelogo from "../../images/AppStore.png";
import left_circle from "../../images/Ellipse 3.png";
import top_circle from "../../images/Ellipse 4.png";
import pink_circle from "../../images/Ellipse 2.png";
import bottom_circle from "../../images/Ellipse 5.png";


function Mobileapp() {
    return (
      <>
        <div className="main_div">
          <div className="blue_div">
            <img src={left_circle} className="blue_circle" />
          </div>
          <div className="whitetop_div">
            <img src={top_circle} className="whitetop_circle" />
          </div>
          <div className="pink_div">
            <img src={pink_circle} className="pink_circle" />
          </div>
          <div className="bottom_div">
            <img src={bottom_circle} className="bottom_circle" />
          </div>
          <div className="inner_div">
            <div className="left_sec">
              <img src={mobilepic} alt="mobile" className="img_sec" />
            </div>
            <div className="right_sec">
              <div className="heading">
                <h2 className="heading_h2">Download palm.hr App for iOS and Android</h2>
              </div>
              <div className="text_align">
                <p className="text_align_para">
                  Our app for employees is now available for iOS and Android.
                  Request leaves, check who’s out today, birthdays, anniversaries,
                  and much more.
                </p>
              </div>
              <div className="store_sec">
                <div>
                  <img src={applelogo} className="store" />
                </div>
                <div>
                  <img src={googleplay} className="store" />
                </div>
                <div className="huawei_sec">
                  <img src={huawei} className="store" />
                  <p className="coming_soon">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Mobileapp;