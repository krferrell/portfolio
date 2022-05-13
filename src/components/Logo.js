import React from "react";
import styled from "styled-components";
import { ReactComponent as PortLogo } from "../assets/portLogo.svg";

const Logo = () => {
  return (
    <LogoContainer>
      <PortLogo />
      <WordContainer>
        <span>Kenneth Ferrell</span>
        <span>Frontend Web Dev</span>
      </WordContainer>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 130px;
  width: 90%;
  margin: 0 auto;
`;

const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
  color: #edf5e1;

  font-family: 'Autour One', cursive;
`;

