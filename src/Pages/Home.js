import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { uiSize } from "../utils/mediaQ";

const heroTextVariant = {
  hidden1: { y: "-100vh", opacity: 0 },
  hidden2: { y: "200vh", opacity: 0 },
  visible1: {
    y: "0",
    opacity: 1,
    transition: { type: "spring", stiffness: 50, mass: 1, duration: 1 },
  },
  visible2: {
    y: "0",
    opacity: 1,
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 50,
      mass: 1,
      duration: 1,
    },
  },
};

const Home = () => {
  return (
    <HeroContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TextContainer>
        <HeroText>Hello, my name is</HeroText>
        <GreenHeroText
          variants={heroTextVariant}
          initial="hidden1"
          animate="visible1"
          whileHover="hover"
        >
          KENNY
        </GreenHeroText>
      </TextContainer>
      <TextContainer>
        <HeroText className="iAm">I am a </HeroText>
        <GreenHeroText
          variants={heroTextVariant}
          initial="hidden2"
          animate="visible2"
          whileHover="hover"
          className="greenText"
        >
          FRONTEND WEB DEVELOPER
        </GreenHeroText>
      </TextContainer>
    </HeroContainer>
  );
};

export default Home;

const HeroContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  height: 600px;
  width: 80%;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  width: 100%;

  .iAm {
    @media ${uiSize.mobile} {
      width: 100px;
      text-align: center;
    }
  }

  .greenText{
    @media ${uiSize.mobile} {
      justify-content: center;
      text-align: center;
    }
  }
`;

const HeroText = styled.p`
  font-size: 48px;
  color: #edf5e1;
  width: auto;

  @media ${uiSize.smallTablet} {
    font-size: 30px;
  }
  @media ${uiSize.mobile} {
    font-size: 20px;
  }
`;

const GreenHeroText = styled(motion.p)`
  font-size: 52px;
  font-weight: bold;
  color: #8ee4af;
  margin-left: 20px;

  @media ${uiSize.smallTablet} {
    font-size: 40px;
  }

  @media ${uiSize.mobile} {
    font-size: 26px;
    margin-left: 15px;
  }
`;
