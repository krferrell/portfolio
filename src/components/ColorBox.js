import React from "react";
import styled from "styled-components";
import { uiSize } from "../utils/mediaQ";

const ColorBox = ({ color }) => {
  return (
    <Container>
      <Box color={color}></Box>
      <ColorTitle>{color}</ColorTitle>
    </Container>
  );
};

export default ColorBox;

const Box = styled.div`
  height: 45px;
  width: 45px;
  border: 1px solid white;
  border-radius: 15px;
  background-color: ${(props) => props.color};
`;

const Container = styled.div`
  width: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 3.5px;
`;
const ColorTitle = styled.span`
  margin-top: 5px;
  font-size: 12px;
`;
