import React from "react";
import styled from "styled-components";
import { HiOutlineChevronLeft } from "react-icons/hi";
import img1 from "./icon1.svg";
import img2 from "./icon2.svg";
import img3 from "./icon3.svg";
import img4 from "./icon4.svg";
// import { useService } from "./ContextAPI/Context";
import { useNavigate } from "react-router-dom";

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .serviceLink {
    padding: 25px 32px;
    display: flex;
    align-items: center;
    gap: 18px;
  }
`;
export const ServiceItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 49px;

  .service {
    display: flex;
    gap: 16px;
    padding: 0 24px;
  }

  .items {
    display: flex;
    flex-direction: column;
  }

  .header {
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    color: #333333;
  }
  .text {
    font-weight: 400;
    font-size: 12px;
    line-height: 167%;
    color: #333333;
  }
`;

export const ServiceModal = () => {
  // const { closeService, service } = useService();
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <ServiceWrapper>
      <div className="serviceLink" onClick={backHome}>
        <HiOutlineChevronLeft />
        <p> Portfolio</p>
      </div>
      <hr />
      <ServiceItemsWrapper>
        <div className="service">
          <img src={img1} alt="icon" />
          <div className="items">
          <p className="header">Software Development</p>
            <p className="text">Creating Innovative Software Solutions</p>
          </div>
        </div>
        <div className="service">
          <img src={img2} alt="icon" />
          <div className="items">
          <p className="header">Machine Learning Projects</p>
            <p className="text">Building Intelligent Machine Learning Models</p>
          </div>
        </div>
        <div className="service">
          <img src={img3} alt="icon" />
          <div className="items">
          <p className="header">Code Optimization</p>
            <p className="text">Optimizing Code for Efficiency</p>
          </div>
        </div>
        <div className="service">
          <img src={img4} alt="icon" />
          <div className="items">
          <p className="header">Data Analytics</p>
            <p className="text">Extracting Insights from Data</p>
          </div>
        </div>
      </ServiceItemsWrapper>
    </ServiceWrapper>
  );
};
