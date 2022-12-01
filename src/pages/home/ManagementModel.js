import React from "react";
import ManagementModelCard from "./ManagementModelCard";
import { Col, Row } from "antd";
import Watch from "../../images/watch.png"
import Cloud from "../../images/cloud-connect.png"
import Star from "../../images/star.png"
import UserCircle from "../../images/user-circle.png"
import Track from "../../images/track.png"
import Settings from "../../images/settings.png"
import Safeguard from "../../images/safeguard.png"
import Facilitate from "../../images/facilitate.png"
import Benefit from "../../images/benefit.png"

import "./ManagementModel.css";

function ManagementModel() {
  return (
    <>
    <div className="main">
      <div>
        <p className="main_head_tag">Implement a people-centric</p>
        <p className="main_head_tag">HR management model</p>
      </div>
      <div className="main_para">
        <p className="main_para_tag">
          palm.hr transforms your HR function into a well-oiled machine allowing
          your business to implement a people-centric, easy-to-run HR management
          model—from anywhere, on any device—supported by the latest HR
          technology and the best industry expertise.
        </p>
      </div>
      <div className="card">
        <Row gutter={[16]}>
          <Col className="gutter-row" span={7}>
            <ManagementModelCard
              img={Watch}
              heading="Save time & money"
              description="by consolidating your HR data & functions in one place"
              color="#FF7762"
            />
          </Col>
          <Col className="gutter-row" span={9}>
            <ManagementModelCard
              img={Cloud}
              heading="Connect with your teams"
              description=" via a single cloud-based desktop & mobile platform"
              color="#62D26F"
            />
          </Col>
          <Col className="gutter-row" span={8}>
            <ManagementModelCard
              img={Star}
              heading="Get up & running quickly"
              description="with user-friendly dashboards in Arabic & English"
              color="#FF7762"
            />
          </Col>
        </Row>
        <Row gutter={[16]}>
          <Col span={9}>
            <div className="mt-4">
              <ManagementModelCard
                img={UserCircle}
                heading="Configure in record time"
                description="your settings & workflows to fit your unique needs"
                color="#16CA9C"
              />
            </div>
          </Col>
          <Col span={7}>
            <div className="mt-4">
              <ManagementModelCard
                img={Track}
                heading="Set up, track & assess"
                description=" your HR operations in real-time, in the office or on the go"
                color="#4EB1F9"
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="mt-4">
              <ManagementModelCard
                img={Settings}
                heading="Ensure compliance"
                description="with the most stringent local labor laws & regulations"
                color="#FF7762"
              />
            </div>
          </Col>
        </Row>
        <Row gutter={[16]}>
          <Col span={7}>
            <ManagementModelCard
              img={Safeguard}
              heading="Safeguard & retrieve"
              description="confidential HR data with enterprise-grade security"
              color="#FF7762"
            />
          </Col>
          <Col span={8}>
            <ManagementModelCard
              img={Facilitate}
              heading="Facilitate team involvement"
              description="confidential HR data with enterprise-grade security"
              color="#11BBD1"
            />
          </Col>
          <Col span={9}>
            <ManagementModelCard
              img={Benefit}
              heading="Benefit from world-class customer service & support"
              description=" that puts you first"
              color="#D669FE"
            />
          </Col>
        </Row>
      </div>
      
    </div>
    <div className="main_btn">
    <button className="main_btn_tag">
    10 Reasons to use palm.hr
          </button>
    </div>
    </>
  );
}
export default ManagementModel;
