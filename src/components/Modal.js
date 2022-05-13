import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CloseIcon, GitHubIcon, WebIcon } from "../assets/navIcons";
import ColorBox from "./ColorBox";
import Pagination from "./Pagination";
import { uiSize } from "../utils/mediaQ";

const imageSlider = {
  hidden: {
    opacity: 0,
    x: "10px",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

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
  const [current, setCurrent] = useState(0);

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
              <ImageContainer style={{ flexDirection: "column" }}>
                {data.images?.map((slide, index) => {
                  return (
                    <>
                      {index === current && (
                        <motion.div
                          variants={imageSlider}
                          initial="hidden"
                          animate="visible"
                          key={index}
                        >
                          {slide}
                        </motion.div>
                      )}
                    </>
                  );
                })}
                <Pagination
                  data={data}
                  current={current}
                  setCurrent={setCurrent}
                />
              </ImageContainer>
            </RightColumn>
          </ColumnContainer>
          <BottomRow>
            <BottomContainer>
              <SmallTitle>Tech</SmallTitle>
              <BottomContainerRow>
                {data.techs?.map((tech) => {
                  return <div>{tech}</div>;
                })}
              </BottomContainerRow>
            </BottomContainer>

            <BottomContainer className="removeMobile">
              <SmallTitle>Color Palatte</SmallTitle>
              <BottomContainerRow>
                {data.colors?.map((color) => {
                  return <ColorBox color={color} />;
                })}
              </BottomContainerRow>
            </BottomContainer>

            <BottomContainer className="removeMobile">
              <SmallTitle>Typography</SmallTitle>
              <BottomContainerColumn>
                {data.typography?.map((font) => {
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
  border-radius: 10px;
  position: relative;

  color: #edf5e1;

  @media ${uiSize.smallTablet} {
    max-width: 90vw;
    width: 100%;
    height: 100%;
  }
  @media ${uiSize.mobile} {
    width: 100%;
    max-width: 100vw;
    text-align: start;
    margin: 0;
  }
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

  z-index: 100;

  @media ${uiSize.mobile} {
    height: 50px;
    width: 50px;
    margin-top: 18px;
    margin-right: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ColumnContainer = styled.div`
  display: flex;
  height: 80%;

  @media ${uiSize.smallTablet} {
    height: 85%;
    justify-content: center;
  }
`;
const IconContanier = styled.div`
  margin-left: 25px;
  height: 100%;
  display: flex;
  align-items: center;
  overflowx: hidden;

  @media ${uiSize.mobile} {
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  width: 60%;
  height: 100%;

  @media ${uiSize.smallTablet} {
    width: 90%;
    text-align: start;
    margin: 0;
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  padding-bottom: 25px;
`;
const RightColumn = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40%;

  @media ${uiSize.smallTablet} {
    display: none;
  }
`;

const PrimaryText = styled.p`
  padding: 0 23px;
  font-size: 18px;

  @media ${uiSize.smallTablet} {
    padding: 0 10px;
  }
`;
const Title = styled.span`
  font-size: 36px;
  padding-left: 23px;

  @media ${uiSize.smallTablet} {
    padding-left: 10px;
  }

  @media ${uiSize.mobile} {
    font-size: 28px;
  }
`;
const SubHeaders = styled.span`
  font-size: 24px;
`;
const AboutSection = styled.div`
  @media ${uiSize.smallTablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding:0 25px;
  }
  @media ${uiSize.mobile} {
    padding:0 25px;
  }
`;
const ChallengeSection = styled.div`
  @media ${uiSize.smallTablet} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 20px;
    padding:0 25px;
  }
  @media ${uiSize.mobile} {
    padding:0 25px;
  }
`;
const TitleSection = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  @media ${uiSize.mobile} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 65px;
    margin-bottom: 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 100%;
  margin-top: 15%;
  overflow: hidden;

  img {
    border: 2px solid #edf5e1;
    border-radius: 10px;
    height: 254px;
    width: 354px;
  }
`;

const BottomRow = styled.div`
  background-color: #222224;
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 0 0 5px 5px;

  @media ${uiSize.smallTablet} {
    height: 15%;
  }
  @media ${uiSize.mobile} {
    height: 20%;
  }

  .removeMobile {
    @media ${uiSize.smallTablet} {
      display: none;
    }
  }
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
