import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { ContactModal } from "../components";
import { uiSize } from "../utils/mediaQ";

const Contact = () => {
  const [isErrorText, setIsErrorText] = useState(false);
  const [isSuccessText, setIsSuccessText] = useState(false);
  const form = useRef();
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      input1.current.value !== "" &&
      input2.current.value !== "" &&
      input3.current.value !== ""
    ) {
      emailjs
        .sendForm(
          `${process.env.REACT_APP_SERVICE_ID}`,
          `${process.env.REACT_APP_TEMPLATE_ID}`,
          form.current,
          `${process.env.REACT_APP_PUBLIC_ID}`
        )
        .then(
          function (response) {
            if (response.status === 200) {
              setIsSuccessText(true);
            }
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      form.current.reset();
    } else {
      setIsErrorText(true);
    }
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
          initial={{ x: "-100px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Beep.
        </HeroTextLarge>
      </TextContainer>
      <FormContainer>
        <Form ref={form} onSubmit={sendEmail}>
          <AnimatePresence>
            {isErrorText && (
              <ContactModal
                setIsErrorText={setIsErrorText}
                isErrorText={isErrorText}
              />
            )}
            {isSuccessText && (
              <ContactModal
                setIsSuccessText={setIsSuccessText}
                isSuccessText={isSuccessText}
              />
            )}
          </AnimatePresence>
          <ContactFormBlurb>
            Send me an email if you want to connect{" "}
          </ContactFormBlurb>
          <InputContainer>
            <Input
              ref={input1}
              type="text"
              className="name"
              name="name"
              placeholder="Name"
            ></Input>
            <Input
              ref={input2}
              type="email"
              className="email"
              name="email"
              placeholder="Email"
            ></Input>
          </InputContainer>
          <InputContainer>
            <TextArea
              ref={input3}
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

  @media ${uiSize.mobile}{
      justify-content: center;
    }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 50%;
  
  @media ${uiSize.smallTablet}{
    width: 80%;
  }
  @media ${uiSize.mobile}{
    width: 100%;
  }
`;

const HeroText = styled.p`
  font-size: 32px;
  color: #edf5e1;

  @media ${uiSize.smallTablet}{
      font-size: 24px;
    }
    @media ${uiSize.mobile}{
      font-size: 18px;
    }
`;

const HeroTextLarge = styled(motion.p)`
  font-size: 48px;
  color: #8ee4af;
  margin-top: 25px;

  @media ${uiSize.smallTablet}{
      font-size: 36px;
    }
    @media ${uiSize.mobile}{
      font-size: 28px;
      margin-top: 20px;
    }
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

    @media ${uiSize.mobile}{
      height: 30px;
      font-size: 12px;
    }
  }

  .email {
    height: 40px;
    width: 90%;
    margin-bottom: 20px;
    border-radius: 6px;

    @media ${uiSize.mobile}{
      height: 30px;
      font-size: 12px;
    }
  }

  .message {
    height: 120px;
    width: 90%;

    @media ${uiSize.mobile}{
      height: 80px;
    }
  }
`;

const Form = styled.form`
  position: relative;
  background-color: #1a1a1a;
  border-radius: 14px;
  height: 100%;
  width: 85%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${uiSize.smallTablet}{
      width: 80%;
    }
    @media ${uiSize.mobile}{
      width: 100%;
      height: 80%;
    }
`;

const FormContainer = styled.div`
  width: 50%;
  display: flex;
  margin-top: 50px;

  @media ${uiSize.smallTablet}{
      width: 100%;
      justify-content: center;
    }

  @media ${uiSize.mobile}{
    margin-top: 20px;
    }
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

  @media ${uiSize.mobile}{
    font-size: 12px;
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

  
  @media ${uiSize.mobile}{
    width: 30%;
    height: 40px;
    font-size: 12px; 
    }
`;

const ContactFormBlurb = styled.p`
  color: #edf5e1;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 20px;
  
  @media ${uiSize.mobile}{
    font-size: 14px;
    text-align: center;
  }
`;
