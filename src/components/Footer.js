import React from "react";
import styled from "styled-components";
import { GitHubIcon } from "../assets/navIcons";

const Footer = () => {
  return (
    <BottomLine>
      <div className="footer-item">
        <GitHubIcon style={{ height: "30px", width: "30px" }} />
      </div>
    </BottomLine>
  );
};

export default Footer;

const BottomLine = styled.div`
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;

  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 20px;

  .footer-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    margin-right: 25px;
    height: 40px;
    width: 40px;
    border-radius: 50px;

    background-color: #edf5e1;
  }
`;

const Line = styled.div`
  width: 40%;
  height: 2px;
  background-color: #edf5e1;
`;
