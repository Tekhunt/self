import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
// import { HamburgerIcon } from "react-hamburger-icon";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Menu } from "./Menu";
import { ServiceModal } from "./ServiceModal";
import { useService } from "./ContextAPI/Context";
import { Modal } from "./Modal";
import { Link, useNavigate } from "react-router-dom";


export const HeaderWrapper = styled.div`
  max-width: 1298px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 30px 62px;
  overflow-x: hidden;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  overflow: hidden;

  .hamburger {
    display: none;
  }
  @media (max-width: 1024px) {
    padding: 21px 22px;

    .hamburger {
      display: inline;
    }
  }
`;

export const Linkwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;

  .service-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 343%;
    align-items: center;
    color: #333333;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23px;
  a {
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    color: #333333;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 30px;
    gap: 10px;
    width: 122px;
    height: 52px;
    border: none;
    background: #ff8a00;
    border-radius: 10px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const MenuContainer = styled.div`
  z-index: 4;
`;

export const Parent = styled.div`
  .modal {
    display: flex;
    position: absolute;
    top: 90px;
    right: 650px;
  }
  @media (max-width: 1024px) {
    .modal {
      display: none;
    }
  }
`;

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { service } = useService();

  const clicker = () => {
    setShow(!show);
  };

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

const navigate = useNavigate();

const toHome =() => {
    navigate("/", { replace: true });

  }

  return (
    <Parent>
      {!service ? (
        <>
          <HeaderWrapper>
            <div onClick={toHome}>
              <img src='' alt="Chizzy" />
            </div>

            <div className="hamburger" onClick={handleToggle}>
              {open ? (
                <MdClose
                  style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
                />
              ) : (
                <FiMenu
                  style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
                />
              )}
            </div>

            <Linkwrapper>
            <Link to='/bio'>Bio</Link>
              <div className="service-tag" onClick={clicker}>
                <span> Portfolio</span> <HiOutlineChevronDown />
              </div>
              <a href="https://chiazam-ochiegbu.netlify.app/">Elavator Pitch</a>
              <Link to="/contact">
              Contact
              </Link>
              <a href="https://chiazam-ochiegbu.netlify.app/">Partners</a>
            </Linkwrapper>
            <AuthWrapper>
              <a href="https://chiazam-ochiegbu.netlify.app/">Hire me</a>
              <button>Connect</button>
            </AuthWrapper>
          </HeaderWrapper>
          {open && (
            <MenuContainer>
              <Menu />
            </MenuContainer>
          )}
        </>
      ) : (
        <ServiceModal />
      )}
      {show && (
        <div className="modal">
          <Modal />
        </div>
      )}
    </Parent>
  );
};
