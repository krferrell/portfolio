import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
        <HeroText>I am a </HeroText>
        <GreenHeroText
          variants={heroTextVariant}
          initial="hidden2"
          animate="visible2"
          whileHover="hover"
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
  justify-content: start;
  align-items: center;
  height: 50%;
  width: 100%;
`;

const HeroText = styled.p`
  font-size: 48px;
  color: #edf5e1;
`;

const GreenHeroText = styled(motion.p)`
  font-size: 52px;
  font-weight: bold;
  color: #8ee4af;
  margin-left: 20px;
`;
