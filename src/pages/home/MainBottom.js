import React from "react";
import frameone from "../../images/Frameone.png";
import frametwo from "../../images/Frametwo.png";
import framethree from "../../images/Framethree.png";
import framefour from "../../images/Framefour.png";
import framefive from "../../images/Framefive.png";
import framesix from "../../images/Framesix.png";
import frameseven from "../../images/Frameseven.png";
import frameeight from "../../images/frameeight.png";

import './MainBottom.css';

function MainBOttom(){
 return(
   <div className="main_bottom">
      <div className="main_bottom_one">
         <p className="main_bottom_one_tag">Trusted all over...</p>
          </div>
    <div className="main_bottom_two">
         <div className="imag_tag">
            <img src={frameone} alt="image 1" className="image_one"/>
         </div>
         <div className="imag_tag">
            <img src={frametwo} alt="image 2"/>
         </div>
         <div className="imag_tag">
            <img src={framethree} alt="image 3"/>
         </div>
         <div className="imag_tag">
            <img src={framefour} alt="image 4"/>
         </div>
         <div className="imag_tag">
            <img src={framefive} alt="image 5"/>
         </div>
         <div className="imag_tag">
            <img src={framesix} alt="image 6"/>
         </div >
         <div className="imag_tag">
            <img src={frameseven} alt="image 7"/>
         </div>
         <div className="imag_tag">
            <img src={frameeight} alt="image 8"/>
         </div>
    </div>
    </div>
    )
}

export default MainBOttom;