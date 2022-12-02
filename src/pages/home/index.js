import React, { Fragment } from "react";
import Footer from "./footer";
import Header from "./Header";
import MainHeader from "./mainHeader";
import MobileApp from "./downloadApp";
// import NewFile from "./NewFile.js";
import FeedBack from "./Feedback";
import ManagementModel from "./ManagementModel";
import Features from "./Features";
import Faqs from "./Faqs";
import Offersection from "./Offersection";
import NewFile from "./NewFile";
import Scndnewfile from "./Scndnewfile";
import ButtonFile from "./ButtonFile";
// import "../fonts/Objective-Black";

const Landing = () => {
  return (
    <Fragment>
      <Header />
      <MainHeader />
      <NewFile />
      <MobileApp />
      <ManagementModel />
      <Features />
      <FeedBack />
      {/* <NewFile /> */}
      {/* <Slider /> */}
      <Offersection />
      <ButtonFile />
      <Scndnewfile />
      <Faqs />
      

      <Footer />
    </Fragment>
  );
};

export default Landing;
