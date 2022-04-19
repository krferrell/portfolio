import React, { useState } from "react";
import styled from "styled-components";
import toadTribune from "../assets/dark-logo.png";
import toadBG from "../assets/toad-tribune.PNG";
import pokePalaceBG from "../assets/ppBG.png";
import pokePalaceLogo from "../assets/pokePalaceLogo.PNG";

const Projects = () => {
  const [box1Picked, setBox1Picked] = useState(false);
  const [box2Picked, setBox2Picked] = useState(false);
  const [box3Picked, setBox3Picked] = useState(false);
  const [box4Picked, setBox4Picked] = useState(false);

  return (
    <FlexContainer>
      <Box1
        onClick={() => {
          setBox1Picked(true);
        }}
      >
        <Blur />
        <ImageContainer>
          <Image src={toadTribune} />
        </ImageContainer>
        <Box1Content
          className={box1Picked && "content"}
          box1Picked={box1Picked}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setBox1Picked(false);
            }}
          >
            X
          </Button>

          <BoxInfo>
            <Title>The Toad Tribune</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Description>
          </BoxInfo>
        </Box1Content>
      </Box1>
      <Box2
        onClick={(e) => {
          setBox2Picked(true);
        }}
      >
        <Blur />
        <ImageContainer>
          <Image src={pokePalaceLogo} />
        </ImageContainer>
        <Box2Content
          className={box2Picked && "content"}
          box2Picked={box2Picked}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setBox2Picked(false);
            }}
          >
            X
          </Button>

          <BoxInfo>
            <Title>PokePalace</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Description>
          </BoxInfo>
        </Box2Content>
      </Box2>
      <Box3
        onClick={(e) => {
          e.stopPropagation();
          setBox3Picked(true);
        }}
      >
        <Blur />
        <ImageContainer>
          <Image src={toadTribune} />
        </ImageContainer>
        <Box3Content
          className={box3Picked && "content"}
          box3Picked={box3Picked}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setBox3Picked(false);
            }}
          >
            X
          </Button>

          <BoxInfo>
            <Title>The Toad Tribune</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Description>
          </BoxInfo>
        </Box3Content>
      </Box3>
      <Box4
        onClick={(e) => {
          e.stopPropagation();
          setBox4Picked(true);
        }}
      >
        <Blur />
        <ImageContainer>
          <Image src={toadTribune} />
        </ImageContainer>
        <Box4Content
          className={box4Picked && "content"}
          box4Picked={box4Picked}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setBox4Picked(false);
            }}
          >
            X
          </Button>

          <BoxInfo>
            <Title>The Toad Tribune</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Description>
          </BoxInfo>
        </Box4Content>
      </Box4>
    </FlexContainer>
  );
};

export default Projects;

const FlexContainer = styled.div`
  height: 80%;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: space-around;
  margin: 100px auto;
  gap: 5px;
  border-radius: 5px;

  .active {
    transform: scale(2.01);
    z-index: 5;
  }

  .content {
    transform: scale(2.01);
    opacity: 1;
  }
`;

const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  align-items: center;
  justify-content: center;
`;

export const Box1 = styled.div`
  height: 100%;
  width: 100%;
  transition: all 0.5s ease-in-out;
  transform-origin: top left;

  display: flex;
  position: relative;

  background-image: url(${toadBG});
  background-size: cover;
`;

export const Box2 = styled.div`
  height: 100%;
  width: 100%;
  background-color: pink;
  transition: all 0.5s ease;
  transform-origin: top right;

  display: flex;
  position: relative;

  background-image: url(${pokePalaceBG});
  background-size: cover;
`;

export const Box3 = styled.div`
  height: 100%;
  width: 100%;
  background-color: blue;
  transition: all 0.5s ease;
  transform-origin: bottom left;

  display: flex;
  position: relative;

  background-image: url(${toadBG});
  background-size: cover;
`;

export const Box4 = styled.div`
  height: 100%;
  width: 100%;
  background-color: green;
  transition: all 0.5s ease;
  transform-origin: bottom right;

  display: flex;
  position: relative;

  background-image: url(${toadBG});
  background-size: cover;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background-color: white;
`;

const Blur = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.8;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 10px;

  font-size: 10px;
  font-weight: bold;

  height: 15px;
  width: 15px;

  background-color: red;

  border-radius: 50px;
`;

const Description = styled.p`
  margin: 25px;
`;

const ImageContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
`;

const Box1Content = styled.div`
  height: 100%;
  width: 100%;
  transition: all 0.5s ease-in-out;
  transform-origin: top left;
  background-color: black;
  opacity: 0;
  display: flex;
  position: absolute;
  z-index: ${(props) => props.box1Picked ? 5 : 0};


`;

const Box2Content = styled.div`
  height: 100%;
  width: 100%;
  transition: all 0.5s ease-in-out;
  transform-origin: top right;
  background-color: black;
  opacity: 0;
  display: flex;
  position: absolute;
  z-index: ${(props) => props.box2Picked ? 5 : 0};
`;

const Box3Content = styled.div`
  height: 100%;
  width: 100%;
  transition: all 0.5s ease-in-out;
  transform-origin: bottom left;
  background-color: black;
  opacity: 0;
  display: flex;
  position: absolute;
  z-index: ${(props) => props.box3Picked ? 5 : 0};
`;

const Box4Content = styled.div`
  height: 100%;
  width: 100%;
  transition: all 0.5s ease-in-out;
  transform-origin: bottom right;
  background-color: black;
  opacity: 0;
  display: flex;
  position: absolute;
  z-index: ${(props) => props.box4Picked ? 5 : 0};
`;
