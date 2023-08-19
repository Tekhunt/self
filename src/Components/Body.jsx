import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import smsIcon from "../messageIcon.svg";
import arrowDown from "../arrow.svg";
import arrowMobile from "../arrowMobile.svg";
import smsMobile from "../smsMobile.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BodyWrapper = styled.div`
  max-width: 1179px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 150px 14px 86px 14px;
  overflow: hidden;

  .trust {
    width: 260px;
    height: 22px;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    margin: 96px 0 24px 0;
  }

  @media (max-width: 1024px) {
    padding-top: 70px;

    .trust {
      margin: 70px 0 24px 0;
    }
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .blue {
    color: blue;
  }
  .orange {
    color: orange;
  }

  .abs-mobile {
    display: none;
  }

  .colored {
    font-family: "Catalina Rayden";
    font-weight: 400;
    font-size: 70px;
    line-height: 114%;
    /* display: flex; */
    color: #333333;
  }

  .offer {
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 16px;
    line-height: 188%;
    color: #333333;
    margin-top: 38px;
  }
  .btn {
    gap: 50px;
  }

  @media (min-width: 1024px) {
    .offer {
      width: 672px;
    }
    .colored {
      width: 682px;
    }
    .action {
      display: flex;
      gap: 50px;
      justify-content: space-between;
      align-items: center;
      margin: 51px 0 136px 0;
    }

    .sms-desk {
      position: absolute;
      top: 490px;
      right: -3%;
    }
  }

  .action {
    display: flex;
    gap: 50px;
    justify-content: space-between;
    align-items: center;
    /* margin: 51px 0 136px 0; */
    p {
      height: 20px;
      font-family: "Montserrat";
      font-weight: 600;
      font-size: 18px;
      line-height: 111%;
      display: flex;
      align-items: center;
      color: #005ecd;
    }

    .arrowDown {
      padding-right: 63px;
    }

    .btn {
      display: flex;
      /* gap: 100px; */
      justify-content: center;
      align-items: center;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 21px 32px;
    gap: 10px;
    width: 173px;
    height: 62px;
    background: #ff8a00;
    border-radius: 10px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    color: #ffffff;
  }

  @media (max-width: 1024px) {
    .action p {
      font-size: 14px;
    }

    button {
      width: 145px;
      height: 58px;
      font-size: 12px;
      padding: 17px 25px;
    }

    .btn {
      gap: 20px;
    }

    .colored {
      font-size: 32px;
    }

    .action {
      gap: 0px;
    }
  }

  @media (max-width: 768px) {
    .abs-icons {
      display: none;
    }
    .btn {
      gap: 15px;
    }

    .action {
      gap: 0;
    }

    .abs-mobile {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .arrowUp-mobile {
        margin-top: 30px;
      }
      .sms-mobile {
        height: 48px;
        width: 48px;
      }
    }

    button {
      padding: 0px 0px;
      /* gap: 10px; */
      width: 133px;
      height: 42px;

      border-radius: 10px;
      border: none;
      font-weight: 500;
      font-size: 12px;
      line-height: 125%;
    }
  }
`;

export const WorkerWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

export const NumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;

  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: #000000;
  }

  h1 {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 32px;
    line-height: 156%;
    display: flex;
    align-items: center;
    color: #005ecd;
  }

  @media (max-width: 1024px) {
    row-gap: 20px;

    div {
      width: 154px;
    }

    h1 {
      font-size: 18px;
      line-height: 20px;
    }
    p {
      font-size: 12px;
      line-height: 20px;
    }

    .three {
      order: 1;
    }
    .two {
      order: 3;
    }
    .four {
      order: 3;
    }
    .one {
      order: 1;
    }
    .five {
      order: 5;
    }
  }
`;

export const FooterHeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  margin-top: 150px;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 43px;

    .heroTextWrapper p:nth-child(1) {
      margin-bottom: 15px;
    }
    .heroTextWrapper p:nth-child(2) {
      margin-bottom: 32px;
    }
  }

  .heroTextWrapper p:nth-child(1) {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 188%;
    color: #333333;
  }
  .heroTextWrapper p:nth-child(2) {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 111%;
    color: #333333;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 52px;
    background: #ff8a00;
    border: none;
    height: 70px;
    width: 211px;
    border-radius: 20px;
    padding: 25px, 52px, 25px, 52px;
    color: #ffffff;
  }

  @media (max-width: 1024px) {
    padding-top: 30px;
  }
`;

export const Body = () => {
  return (
    <BodyWrapper>
      <HeroWrapper>
        <div>
          <div className="colored">
            Hi, I'm<span className="blue"> Chizzy</span> a{" "}
            <span className="orange">
              Software and Machine Learning Engineer
            </span>
          </div>
        </div>
        <p className="offer">
          Welcome to my portfolio! I specialize in developing innovative
          software solutions and creating intelligent machine learning models.
          I'm here to showcase my work and demonstrate how technology can shape
          the future.
        </p>
        <div className="action">
          <div className="btn">
            <Link to="/projects">
              <button>View Projects</button>
            </Link>
            <Link to="/contact">
              <p>
                Contact Me <HiOutlineChevronRight size={16} />{" "}
              </p>
            </Link>
          </div>
          <div className="abs-icons">
            <img className="arrowDown" src={arrowDown} alt="arrow" />
            <img className="sms-desk" src={smsIcon} alt="mss" />
          </div>
          <div className="abs-mobile">
            <img className="arrowUp-mobile" src={arrowMobile} alt="arrow" />
            <img className="sms-mobile" src={smsMobile} alt="mss" />
          </div>
        </div>
      </HeroWrapper>
      <WorkerWrapper>{/* <img src={playVid} alt="worker" /> */}</WorkerWrapper>
      <p className="trust">Ideas to elegant solutions.</p>
      <NumberWrapper>
        <div className="one">
          <h1>30+</h1>
          <p>Companies serviced</p>
        </div>
        <div className="two">
          <h1>50+</h1>
          <p>Software Projects</p>
        </div>
        <div className="three">
          <h1>10m+</h1>
          <p>Lines of Code</p>
        </div>
        <div className="four">
          <h1>90%</h1>
          <p>Satisfied Clients</p>
        </div>
        <div className="five">
          <h1>80%</h1>
          <p>Of my clients have returned again</p>
        </div>
      </NumberWrapper>
      {/* <Contact /> */}

      <FooterHeroWrapper>
        <div className="heroTextWrapper">
          <p> Explore my software and machine learning projects.</p>
          <p>
            Join the community of innovators who have trusted me with their
            projects.
          </p>
        </div>
        <button class="inline-block rounded bg-[#ff8a00] border border-[#ff8a00] px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-yellow-400">
          <Link to="/projects">Explore</Link>
        </button>
      </FooterHeroWrapper>
    </BodyWrapper>
  );
};
