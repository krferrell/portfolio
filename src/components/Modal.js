import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const modalAnimation = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { delay: 0.2, duration: 0.3, ease: "easeIn" },
  },
  exit: { y: "-100vh", opacity: 1, transition: { duration: 0.2 } },
};

const overlayAnimation = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: { y: "-100vh", opacity: 1, transition: { duration: 0.2, delay: 0.25 } },
};

const Modal = ({ data, setIsModal }) => {
  return (
    <Overlay
      variants={overlayAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <StyledModal
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {data.name}
        <Close
          onClick={(e) => {
            setIsModal(false);
            e.preventDefault();
          }}
        >
          X
        </Close>
      </StyledModal>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(5, 5, 5, 0.5));
`;

const StyledModal = styled(motion.div)`
  background-color: green;
  height: 60%;
  width: 60%;
`;

const Close = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-color: red;
`;
