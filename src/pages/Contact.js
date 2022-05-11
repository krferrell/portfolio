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
        <HeroTextLarge
          initial={{ x: "-100px", opacity:0 }}
          animate={{ x: 0, opacity:1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Beep.
        </HeroTextLarge>
      </TextContainer>
      <FormContainer>
        <Form ref={form} onSubmit={sendEmail}>
          <ContactFormBlurb>Send me an email if you want to connect </ContactFormBlurb>
          <InputContainer>
            <Input
              type="text"
              className="name"
              name="name"
              placeholder="Name"
            ></Input>
            <Input
              type="email"
              className="email"
              name="email"
              placeholder="Email"
            ></Input>
          </InputContainer>
          <InputContainer>
            <TextArea
              type="text"
              className="message"
              name="message"
              placeholder="Message"
            ></TextArea>
          </InputContainer>
          <SubmitButton type="submit">GET IN TOUCH</SubmitButton>
        </Form>
      </FormContainer>
    </ContentContainer>
  );
};

export default Contact;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 50%;

`;

const HeroText = styled.p`
  font-size: 32px;
  color: #edf5e1;
`;

const HeroTextLarge = styled(motion.p)`
  font-size: 48px;
  color: #8ee4af;
  margin-top: 25px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .name {
    height: 40px;
    width: 90%;
    margin-bottom: 20px;
    border-radius: 6px;
  }

  .email {
    height: 40px;
    width: 90%;
    margin-bottom: 20px;
    border-radius: 6px;
  }

  .message {
    height: 120px;
    width: 90%;
  }
`;

const Form = styled.form`
  background-color: #1a1a1a;
  border-radius: 14px;
  height: 100%;
  width: 85%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 50%;
  display: flex;
  margin-top: 50px;
`;

const TextArea = styled.textarea`
  border: none;
  border-radius: 8px;
  padding: 7px;
  resize: none;
  background-color: #edf5e1;
  :focus {
    outline: #8ee4af;
    border-color: #8ee4af;
  }
`;

const Input = styled.input`
  // margin-left: 50px;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: #edf5e1;
  :focus {
    outline: #8ee4af !important;
    border-color: #8ee4af;
  }
`;

const SubmitButton = styled.button`
  width: 25%;
  height: 40px;
  padding: 3px;
  border-radius: 6px;

  border: none;

  margin-top: 20px;

  font-weight: bold;
  background-color: #8ee4af;
  color: #1a1a1a;
`;

const ContactFormBlurb = styled.p`
  color: #edf5e1;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 20px;
`;
