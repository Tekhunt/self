import React from "react";
import styled from "styled-components";
// import mediaIcons from "../socialMediaIcons.svg";
import { FaFacebookF,  FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa';
export const FooterWrapper = styled.div`
  max-width: 1179px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-top: 50px;
  overflow: hidden;


  .none {
    visibility: hidden;
  }

  .first-hr {
    margin-bottom: 85px;
    border: 0.1px solid #000000;
    opacity: 0.1;
  }
  .second-hr {
    margin-top: 78px;
    border: 0.1px solid #000000;
    margin-bottom: 29px;
    opacity: 0.1;
  }
  @media (max-width: 1024px) {
    padding: 0 20px;

    h3 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
    .first-hr {
      margin-bottom: 49px;
    }
    .second-hr {
      margin-top: 50px;
    }
  }
`;

// export const FooterHeroWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 85px;
//   @media (max-width: 1024px) {
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 43px;

//     .heroTextWrapper p:nth-child(1) {
//       margin-bottom: 15px;
//     }
//     .heroTextWrapper p:nth-child(2) {
//       margin-bottom: 32px;
//     }
//   }

//   .heroTextWrapper p:nth-child(1) {
//     font-family: "Montserrat", sans-serif;
//     font-style: normal;
//     font-weight: 700;
//     font-size: 32px;
//     line-height: 188%;
//     color: #333333;
//   }
//   .heroTextWrapper p:nth-child(2) {
//     font-family: "Montserrat";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 18px;
//     line-height: 111%;
//     color: #333333;
//   }

//   button {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 25px 52px;
//     background: #005ecd;
//     border: none;
//     height: 70px;
//     width: 211px;
//     border-radius: 20px;
//     padding: 25px, 52px, 25px, 52px;
//     color: #ffffff;
//   }

//   @media (max-width: 1024px) {
//     padding-top: 30px;
//   }
// `;
export const FooterGridWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    align-items: center;
    row-gap: 37px;
  }
`;

export const FooterContactWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    padding-top: 31px;
    width: 100%;
    margin: 0 auto;
    img {
      display: none;
    }
    order: 5;
    .call {
      width: 100%;
      display: flex;
      gap: 39px;
      justify-content: center;
      align-items: center;
    }
    .call p {
      font-size: 12px;
    }

    .address {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  img {
    margin-bottom: 25px;
  }

  .address-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .call {
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    color: #333333;
  }

  .address h3 {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    color: #333333;
  }

  .address p {
    color: #767676;
  }
`;

export const FooterHome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    min-width: 140px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    color: #005ecd;
    margin-bottom: 9px;
  }
`;

export const FooterServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    min-width: 140px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    color: #005ecd;
    margin-bottom: 9px;
  }
`;

export const FooterResources = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    min-width: 140px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    color: #005ecd;
    margin-bottom: 9px;
  }
`;

export const FooterLegal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    min-width: 140px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    color: #005ecd;
    margin-bottom: 9px;
  }
`;

export const BottomFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 72px;
  @media (max-width: 1024px) {
    margin-bottom: 54px;
    padding-bottom: 0;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 54px;
    /* margin-top: 88px; */
    .privacy {
      margin-bottom: 36px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .privacy p {
      font-size: 14px;
      gap: 26px;
    }
  }

  .privacy {
    display: flex;
    gap: 27px;
  }

  .sm-icons{
    display: flex;
    gap: 15px;
    color: blue;
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      {/* <FooterHeroWrapper>
        <div className="heroTextWrapper">
        <p> Explore my software and machine learning projects.</p>
          <p>
            Join the community of innovators who have trusted me with their projects.
          </p>
        </div>
        <button>Contact Me</button>
      </FooterHeroWrapper> */}
      <hr className="first-hr" />
      <FooterGridWrapper>
        <FooterContactWrapper>
          <div>
            {" "}
            <img src='' alt="Chizzy" />{" "}
          </div>
          <div className="address-container">
            <div className="call">
              <p>T: +2348067471928</p>
              <p>E: chizzydmec@gmail.com</p>
            </div>

            <div className="address">
              <h3>Lagos:</h3>
              <p>7000 North Mopac Expressway,</p>
              <p> LA, TX, 78731</p>
              <p>T: +234 34 514 6221</p>
            </div>
            <div className="address">
              <h3>Lagos:</h3>
              <p>19 Dr. S Ezekuse Close,</p>
              <p>Lekki Phase 1, Lagos</p>
            </div>
          </div>
        </FooterContactWrapper>
        <FooterHome>
        <h3>Home</h3>
          <p>About Me</p>
          <p>Portfolio</p>
          <p>Blog</p>
          <p>Contact</p>
          <p className="none">Track Shipment</p>
        </FooterHome>
        <FooterServices>
          <h3>Services</h3>
          <p>Software Development</p>
          <p>Machine Learning Solutions</p>
          <p>Code Optimization</p>
          <p>Data Analytics</p>
          <p className="none">Track Shipment</p>
        </FooterServices>
        <FooterResources>
        <h3>Resources</h3>
          <p>Articles</p>
          <p>Case Studies</p>
          <p>Learning Resources</p>
          <p className="none">Track Shipment</p>
        </FooterResources>
        <FooterLegal>
          <h3>Legal</h3>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
          <p>Terms &#38; Conditions</p>
          
          <p className="none">Track Shipment</p>
        </FooterLegal>
      </FooterGridWrapper>
      <hr className="second-hr" />
      <BottomFooterWrapper>
        <div className="privacy">
          <div>
            {" "}
            <img src='' alt="Chizzy" />{" "}
          </div>
          <p>&copy; Chizzy Technologies Limited</p>
        </div>
        <div>

          <div className="sm-icons">
            <span><a href="linkedin.com/in/chiazam-ochiegbu-297b67150/" target="_blank"> <FaLinkedinIn /></a></span><span><FaFacebookF /></span><span><FaInstagram /></span><span><FaTwitter /></span><span><FaFacebookF /></span>
          </div>
        
          {/* <img src={mediaIcons} alt="social media" /> */}
        </div>
      </BottomFooterWrapper>
    </FooterWrapper>
  );
};
