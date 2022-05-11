import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CloseIcon, GitHubIcon, WebIcon } from "../assets/navIcons";
import ColorBox from "./ColorBox";

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
      onClick={(e) => {
        setIsModal(false);
        e.stopPropagation();
      }}
    >
      <StyledModal
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Close
          onClick={() => {
            setIsModal(false);
          }}
        ></Close>
        <Container>
          <ColumnContainer>
            <LeftColumn>
              <TitleSection>
                <Title>{data.name}</Title>
                <IconContanier>
                  {data.links.gitHubLink !== "" && (
                    <a href={data.links.gitHubLink} target="_blank">
                      <GitHubIcon
                        style={{ marginLeft: "10px", cursor: "pointer" }}
                      />
                    </a>
                  )}
                  {data.links.webSiteLink !== "" && (
                    <a href={data.links.webSiteLink} target="_blank">
                      <WebIcon
                        style={{ marginLeft: "10px", cursor: "pointer" }}
                      />
                    </a>
                  )}
                </IconContanier>
              </TitleSection>
              <ScrollContainer>
                <AboutSection>
                  <SubHeaders>About</SubHeaders>
                  <PrimaryText>{data.about}</PrimaryText>
                </AboutSection>
                <ChallengeSection>
                  <SubHeaders>Challenges</SubHeaders>
                  <PrimaryText>{data.challenges}</PrimaryText>
                </ChallengeSection>
              </ScrollContainer>
            </LeftColumn>
            <RightColumn>
              <ImageContainer></ImageContainer>
            </RightColumn>
          </ColumnContainer>
          <BottomRow>
            <BottomContainer>
              <SmallTitle>Tech</SmallTitle>
              <BottomContainerRow>
                {data.techs.map((tech) => {
                  return <div>{tech}</div>;
                })}
              </BottomContainerRow>
            </BottomContainer>

            <BottomContainer>
              <SmallTitle>Color Palatte</SmallTitle>
              <BottomContainerRow>
                {data.colors.map((color) => {
                  return <ColorBox color={color} />;
                })}
              </BottomContainerRow>
            </BottomContainer>

            <BottomContainer>
              <SmallTitle>Typography</SmallTitle>
              <BottomContainerColumn>
                {data.typography.map((font) => {
                  return <FontBox>{font}</FontBox>;
                })}
              </BottomContainerColumn>
            </BottomContainer>
          </BottomRow>
        </Container>
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
  background-color: #1a1a1a;
  width: 70%;
  height: 80%;

  max-width: 1400px;
  max-height: 800px;
  border-radius: 5px;
  position: relative;

  color: #edf5e1;
`;

const Close = styled(CloseIcon)`
  height: 35px;
  width: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: absolute;
  top: 0;
  right: 0;

  margin-top: 5px;
  margin-right: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ColumnContainer = styled.div`
  display: flex;
  height: 80%;
`;
const IconContanier = styled.div`
  margin-left: 25px;
  height: 100%;
  display: flex;
  align-items: center;
`;
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  width: 60%;
  height: 100%;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40%;
`;

const PrimaryText = styled.p`
  padding: 0 23px;
  font-size: 18px;
`;
const Title = styled.span`
  font-size: 36px;
  padding-left: 23px;
`;
const SubHeaders = styled.span`
  font-size: 24px;
`;
const AboutSection = styled.div``;
const ChallengeSection = styled.div``;
const TitleSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  background-color: lightgreen;

  height: 70%;
  width: 70%;
`;

const BottomRow = styled.div`
  background-color: #222224;
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 0 0 5px 5px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 33%;
`;
const BottomContainerRow = styled.div`
  display: flex;
  height: 75px;
`;
const BottomContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 75px;
`;

const SmallTitle = styled.span`
  margin-bottom: 15px;
  font-weight: 500;
`;

const FontBox = styled.div`
  display: flex;
  align-items: center;
`;
