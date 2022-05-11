import React, { useState } from "react";
import styled from "styled-components";
import { projectsData } from "../utils/data";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "../components";
import Eye from "../assets/navIcons/components/Eye";

const Projects = () => {
  const [isHover, setIsHover] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const printCards = (array) => {
    return array?.map((data, index) => {
      return (
        <>
          <Card
            onMouseEnter={() => {
              setIsHover(true);
            }}
            onMouseExit={() => setIsHover(false)}
            initial={{ opacity: 0, x: "-50", y: "-50" }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: isHover ? 0 : 0.3,
              delay: isHover ? 0 : index * 0.3,
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
            <Description>
              {data.description}
            </Description>
            <Eyecon isHover={isHover} />
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
  margin: 1% auto;
  border-radius: 5px;
`;

const Eyecon = styled(Eye)`
  position: absolute;
  bottom: 0;
  right: 0;

  margin-right: 15px;
  margin-bottom: 5px;
`;

const Card = styled(motion.div)`
  height: 85%;
  max-height: 250px;
  width: 90%;

  border: 1px solid #edf5e1;
  background-color: #1a1a1a;
  border-radius: 14px;

  position: relative;
  cursor: pointer;

  &:hover {
    ${Eyecon} {
      fill: #8EE4AF;
      /* cursor: pointer; */
    }
  }
`;

const Title = styled.span`
  font-size: 32px;
  margin-top: 15px;
  margin-left: 15px;
  color: #8ee4af;
`;

const Description = styled.p`
  color: #edf5e1;
  margin: 35px 20px 0px 50px;
`;
