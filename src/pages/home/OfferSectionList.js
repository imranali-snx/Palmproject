import ReactDOM from 'react-dom'
import React from 'react'

import "./OfferSectionStyle.css";

const OfferSectionList = ({ items }) => {
  console.log(items);
  return (
    <>
      <div className="offerBoxDiv">
        <div className="offerMargin">
          <p className="offerPara3">{items?.heading}</p>
          <ul className="offerList">
            <li>{items?.list1}</li>
            <li>{items?.list2}</li>
          </ul>
        </div>
        <div className="offerimg">
          <img src={items?.Url} className="" />
        </div>
      </div>
    </>
  );
};

export default OfferSectionList;
