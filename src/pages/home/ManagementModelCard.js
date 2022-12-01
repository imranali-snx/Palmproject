import React from "react";

import "./ManagementModelCard.css";

function ManagementModelCard(props) {
  return (
    <>
    
              <div className="main_card"style={{borderColor:props.color}}>
                <div className="card_img">
                  <img src={props.img} alt="Watch" className="img_tag" />
                </div>
                <div className="card_heading">
                  <p className="card_heading_tag" style={{color:props.color}}>{props.heading} </p>
                </div>
                <div className="card_description">
                  <p className="card_description_tag">{props.description}</p>
                </div>
              </div>
        
    </>
  );
}

export default ManagementModelCard;
