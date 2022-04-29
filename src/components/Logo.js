import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoIcon>Photo</LogoIcon>
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

  color: #edf5e1;
`;

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: 60px;
  border-radius: 50px;

  margin-right: 25px;
  background-color: lightblue;
`;
