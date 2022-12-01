import React from "react";
import "./featureStyle.css";

const FeatureList = ({ items, value }) => {
  return (
    <div className={value ? "featureColumn" : "featureRow"}>
      <div className="featureCol1">
        <div className="featureColPara">
          <p className="featureColPara1">{items?.heading}</p>
        </div>
        <div className="featureColPara2">
          <p className="featureColService">{items?.descryption}</p>
        </div>
        <div>
          <ul className="featurePoints">
            {items?.list8.map((task, index) => {
              return <li key={index}>{task}</li>;
            })}
          </ul>
        </div>
        <div className="featureLogo">
          <img src={items?.img1} className="featureLogoImg" />
          <img src={items?.img2} className="featureLogoImg" />
          <img src={items?.img3} className="featureLogoImg" />
        </div>
        <button className="featureBtn featurebtn2">Learn More</button>
      </div>
      <div className="featureCol2">
        <img src={items?.Url} className="featureCol2Img" />
      </div>
    </div>
  );
};

export default FeatureList;
