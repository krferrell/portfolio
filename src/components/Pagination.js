import React from "react";
import { ArrowLeft, ArrowRight } from "../assets/navIcons";
import styled from "styled-components";
import { motion } from "framer-motion";

const Pagination = ({ current, data, setCurrent }) => {
  const nextHandler = () => {
    setCurrent(current === data.images.length - 1 ? 0 : current + 1);
  };

  const prevHandler = () => {
    setCurrent(current === 0 ? data.images.length - 1 : current - 1);
  };

  return (
    <Wrapper>
      <ArrowLeft
        className="left"
        onClick={() => {
          prevHandler();
        }}
      />
      <BubbleContainer>
        {data.images.map((value, index) => {
          return (
            <div>{current === index ? <ChoosenBubble /> : <Bubble />}</div>
          );
        })}
      </BubbleContainer>
      <ArrowRight
        className="right"
        onClick={() => {
          nextHandler();
        }}
      />
    </Wrapper>
  );
};

export default Pagination;

const BubbleContainer = styled.div`
  height: 50%;
  width: 60%;
  display: flex;
  color: black;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 50px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const Bubble = styled.div`
  height: 10px;
  width: 10px;
  background-color: #edf5e1;
  border-radius: 50px;
  margin: 0 10px;
  position: relative;
`;

const ChoosenBubble = styled.div`
  height: 10px;
  width: 10px;
  background-color: #8ee4af;
  border-radius: 50px;
  margin: 0 10px;
`;
