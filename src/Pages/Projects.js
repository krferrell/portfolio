import React, { useState } from "react";
import styled from "styled-components";
import { projectsData } from "../utils/data";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "../components";
import Eye from "../assets/navIcons/components/Eye";
import { uiSize } from "../utils/mediaQ";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const printCards = (array) => {
    return array?.map((data, index) => {
      return (
        <>
          <Card
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseExit={() => setIsHovered(false)}
            initial={{ opacity: 0, x: "-50", y: "-50" }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: isHovered ? 0 : 0.3,
              delay: isHovered ? 0 : index * 0.3,
            }}
            whileHover={{
              scale: [1, 1.01, 1.01, 1],
              border: "1px solid #8EE4AF",
            }}
            whileTap={{ scale: [1.01, 1, 0.9, 0.8] }}
            onClick={() => {
              setCurrentIndex(index);
              setIsModal(true);
            }}
          >
            <Title>{data.name}</Title>
            <Description>{data.description}</Description>
            <Eyecon isHovered={isHovered} />
          </Card>
          <AnimatePresence>
            {isModal && currentIndex === index && (
              <Modal data={data} setIsModal={setIsModal} />
            )}
          </AnimatePresence>
        </>
      );
    });
  };

  return (
    <FlexContainer exit={{ opacity: 0 }}>
      {printCards(projectsData)}
    </FlexContainer>
  );
};

export default Projects;

const FlexContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  place-items: center;
  height: 80%;
  width: 75%;
  margin: 0 auto;
  border-radius: 5px;

  @media ${uiSize.smallTablet} {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;
  }
  @media ${uiSize.mobile} {
    height: 70%;
    margin-bottom: 24px;
  }
`;

const Eyecon = styled(Eye)`
  position: absolute;
  bottom: 0;
  right: 0;

  margin-right: 15px;
  margin-bottom: 5px;

  @media ${uiSize.mobile} {
    display: none;
  }
`;

const Card = styled(motion.div)`
  height: 85%;
  max-height: 250px;
  width: 90%;

  border: 1px solid #1a1a1a;
  background-color: #1a1a1a;
  border-radius: 14px;


  padding: 20px;

  position: relative;
  cursor: pointer;

  &:hover {
    ${Eyecon} {
      fill: #8ee4af;
      /* cursor: pointer; */
    }
  }

  @media ${uiSize.smallTablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    justify-content: space-evenly;
  }

  @media ${uiSize.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    /* padding: 0 30px; */
    /* height: 100px; */
  }
`;

const Title = styled.span`
  font-size: 32px;
  /* margin-top: 15px;
  margin-left: 15px; */
  color: #8ee4af;

  @media ${uiSize.smallTablet} {
    font-size: 16px;
    margin: 0;
  }

  @media ${uiSize.mobile} {
    font-size: 18px;
    margin: 0;
  }
`;

const Description = styled.p`
  color: #edf5e1;
  /* margin: 35px 20px 0px 50px; */
  margin-top: 15px;

  @media ${uiSize.smallTablet} {
    font-size: 12px;
    margin: 0 20px;
  }

  @media ${uiSize.mobile} {
    display: none;
  }
`;
