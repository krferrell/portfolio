import React, { useState } from "react";
import styled from "styled-components";
import { projectsData } from "../projectsData/data";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "../components";

const Projects = ({ location }) => {
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
            whileHover={{ scale: [1, 1.01, 1.01, 1.03] }}
            whileTap={{ scale: [1.01, 1, 0.9, 0.8] }}
            onClick={() => {
              setCurrentIndex(index);
              setIsModal(true);
            }}
          >
            {data.name}
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
  width: 80%;
  margin: 1% auto;
  border-radius: 5px;
`;

const Card = styled(motion.div)`
  height: 90%;
  width: 90%;

  background-color: aqua;
`;
