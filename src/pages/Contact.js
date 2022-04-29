import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log(process.env.REACT_APP_SERVICE_ID);
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_ID}`
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    form.current.reset();
  };

  return (
    <ContentContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TextContainer>
        <HeroText>
          Sorry, the person you are trying to reach is coding.
        </HeroText>
        <HeroText>Please, leave a message after the beep...</HeroText>
        <HeroTextLarge>Beep.</HeroTextLarge>
      </TextContainer>
      <form ref={form} onSubmit={sendEmail}>
        <InputContainer>
          <Input type="text" className="name" name="name"></Input>
          <Input type="email" className="email" name="email"></Input>
        </InputContainer>
        <InputContainer>
          <Input type="text" className="message" name="message"></Input>
        </InputContainer>
        <SubmitButton type="submit">Send</SubmitButton>
      </form>
    </ContentContainer>
  );
};

export default Contact;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 80%;
  width: 90%;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 60%;
  width: 90%;

  margin-left: 50px;
`;

const HeroText = styled.p`
  font-size: 32px;
  color: #edf5e1;
`;

const HeroTextLarge = styled.p`
  font-size: 48px;
  color: #8ee4af;
`;

const InputContainer = styled.div`
  display: flex;
  /* align-items: center; */

  .name {
    height: 20px;
    width: 220px;
  }

  .email {
    height: 20px;
    width: 220px;
  }

  .message {
    height: 160px;
    width: 500px;
    margin-top: 50px;
  }
`;

const Input = styled.input`
  color: red;
  margin-left: 50px;
  border: none;
  border-radius: 10px;

  :focus {
    outline: none !important;
    border-color: #8ee4af;
    box-shadow: 0 0 10px #8ee4af;
  }
`;

const SubmitButton = styled.button`
  width: 85px;

  padding: 3px;
  border-radius: 15px;

  border: none;

  margin-left: 50px;
  margin-top: 50px;
`;
