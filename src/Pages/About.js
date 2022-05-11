import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import {
  CssSvg,
  FigmaSvg,
  HtmlSvg,
  JsSvg,
  NodeJs,
  ReactSvg,
  ReduxSvg,
  ScssSvg,
  StyledCompSvg,
  TsSvg,
} from "../assets/skillsComponents";
import { ToolTip } from "../components/";

const spinner = {
  hidden: {
    rotate: 0,
  },
  visible: {
    rotate: 360,
    backgroundColor: "blue",
    transition: { duration: 1 },
  },
};

const About = () => {
  return (
    <TextContainer
    // as={motion.div}
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    >
      <Text>
        Hello world! My name is Kenny and I am a frontend web developer based in
        California. What that really means is I get to bring ideas to life by
        creating websites. When I am not working, I enjoy spending time with my
        partner, Mackenzie and our 2 year old son, Kenny III. Some of my hobbies
        include going to the gym, playing disc golf, and crocheting.
      </Text>
      <Text>
        I am currently employed in a React apprenticeship program through
        Bitwise Industries. Throughout this apprenticeship I have been lucky
        enough to be able to collaborate with some amazing people on some fun
        projects. I have also developed production level applets for the
        marketing team at Bitwise Ventures to help support Tatstat, Ordrslip,
        and Listing Alert.
      </Text>
      <Text>
        Before web development, my passion was mathematics and teaching. I
        earned my bachelors of science in mathematics from CSU Fresno. I very
        much enjoyed solving the complex mysteries that math had to offer. I
        also enjoyed being able to help others grasp challenging math concepts.
        I was a math tutor for 2 years and then trained math tutors for another
        2 years. My long term goal is to become an expert in fullstack
        development and be in a position where I can help others learn and grow.
      </Text>
      <SkillsContainer>
        <ToolTip direction="top" content="CSS">
          <CssSvg />
        </ToolTip>
        <ToolTip direction="top" content="Figma">
          <FigmaSvg />
        </ToolTip>
        <ToolTip direction="top" content="Html">
          <HtmlSvg />
        </ToolTip>
        <ToolTip direction="top" content="JavaScript">
          <JsSvg />
        </ToolTip>
        <ToolTip direction="top" content="NodeJs">
          <NodeJs />
        </ToolTip>
        <ToolTip direction="top" content="React">
          <ReactSvg />
        </ToolTip>
        <ToolTip direction="top" content="Redux">
          <ReduxSvg />
        </ToolTip>
        <ToolTip direction="top" content="SCSS">
          <ScssSvg />
        </ToolTip>
        <ToolTip direction="top" content="Styled Components">
          <StyledCompSvg />
        </ToolTip>
        <ToolTip direction="top" content="TypeScript">
          <TsSvg />
        </ToolTip>
      </SkillsContainer>
    </TextContainer>
  );
};

export default About;

const TextContainer = styled.div`
  margin: 20px auto;

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
