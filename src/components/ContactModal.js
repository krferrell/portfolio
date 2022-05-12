import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const errorModal = {
  hiddenOverlay: { opacity: 0 },
  hiddenModal: { y: "-10vh", opacity: 0 },
  visibleOverlay: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  visibleModal: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.2, ease: "easeIn" },
  },
  exitOverlay: {
    opacity: 0,
    transition: { duration: 0.1, delay: 0.1 },
  },
  exitModal: { y: "-10vh", opacity: 0, transition: { duration: 0.2 } },
};

const ContactModal = ({
  isErrorText,
  isSuccessText,
  setIsErrorText,
  setIsSuccessText,
}) => {
  return (
    <ErrorLayer
      variants={errorModal}
      initial="hiddenOverlay"
      animate="visibleOverlay"
      exit="exitOverlay"
      onClick={() => {
        if (isSuccessText) {
          setIsSuccessText(false);
        }
        if (isErrorText) {
          setIsErrorText(false);
        }
      }}
    >
      <Error
        variants={errorModal}
        initial="hiddenModal"
        animate="visibleModal"
        exit="exitModal"
        onClick={(e) => e.stopPropagation()}
      >
        {isErrorText && "Please enter valid information."}
        {isSuccessText &&
          "Thanks for reaching out! I will get back to you as soon as possible."}
        <OkayButton
          onClick={() => {
            if (isSuccessText) {
              setIsSuccessText(false);
            }
            if (isErrorText) {
              setIsErrorText(false);
            }
          }}
        >
          Okay
        </OkayButton>
      </Error>
    </ErrorLayer>
  );
};

export default ContactModal;

const Error = styled(motion.div)`
  position: absolute;
  height: 50%;
  width: 50%;
  border-radius: 10px;
  background-color: #1a1a1a;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #edf5e1;
  padding: 23px;
  text-align: center;
`;
const ErrorLayer = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(5, 5, 5, 0.5));
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OkayButton = styled.div`
  height: 35px;
  width: 80px;
  border-radius: 10px;
  margin-top: 15px;
  background-color: #8ee4af;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
`;
