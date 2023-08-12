import React from "react";
import styled from "styled-components";
import img1 from "./icon1.svg";
import img2 from "./icon2.svg";
import img3 from "./icon3.svg";
import img4 from "./icon4.svg";

export const ModalWrapper = styled.div`
  max-width: 1179px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 32px;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 40px 35px;
  z-index: 6;

  .service {
    display: flex;
    gap: 20px;
    background-color: #ffffff;
    padding: 12px 18px;
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

  .service:nth-child(odd):hover {
    background: rgba(217, 231, 248, 0.3);
    border-radius: 8px;
  }
  .service:nth-child(even):hover {
    background: rgba(255, 195, 129, 0.2);
    border-radius: 8px;
  }
`;

export const Modal = () => {
  return (
    <ModalWrapper>
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
    </ModalWrapper>
  );
};
