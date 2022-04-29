import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import {
  CssIcon,
  FigmaIcon,
  HtmlIcon,
  JsIcon,
  ReactIcon,
  ReduxIcon,
  StyledCompIcon,
  TsIcon,
} from "../assets/skillsIcons";
import { ToolTip } from "../components/";

const About = () => {
  return (
    <TextContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Text>
        Hello world! My name is Kenny and I am a frontend web developer. I am
        currently finishing a up state recognized React apprenticeship. I have
        been able to collaborate with some amazing people on some fun projects.
        I have also gotten the oppurtunity to style and create some modern
        projects that utilize all of the skills you see below.
      </Text>
      <Text>
        Before web development, my passion was mathematics. I earned my
        bachelors of science in mathematics from CSU Fresno. I very much enjoyed
        solving the complex mysteries that math had to offer. I have since grown
        fond of solving the complex issues that arise while trying to archetict,
        design, and build an application.
      </Text>
      <SkillsContainer>
        <ToolTip direction="top" content="CSS">
          <CssIcon />
        </ToolTip>
        <ToolTip direction="top" content="Figma">
          <FigmaIcon />
        </ToolTip>
        <ToolTip direction="top" content="Html">
          <HtmlIcon />
        </ToolTip>
        <ToolTip direction="top" content="JavaScript">
          <JsIcon />
        </ToolTip>
        <ToolTip direction="top" content="React">
          <ReactIcon />
        </ToolTip>
        <ToolTip direction="top" content="Redux">
          <ReduxIcon />
        </ToolTip>
        <ToolTip direction="top" content="Styled Components">
          <StyledCompIcon />
        </ToolTip>
        <ToolTip direction="top" content="TypeScript">
          <TsIcon />
        </ToolTip>
      </SkillsContainer>
    </TextContainer>
  );
};

export default About;

const TextContainer = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 80%;
  width: 85%;
`;

const Text = styled.p`
  font-size: 32px;
  color: #edf5e1;

  margin-right: 60px;
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 60px;
  height: 20%;
  width: 100%;
`;
