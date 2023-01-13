import React from 'react';
import styled from 'styled-components';
import {motion as m} from 'framer-motion';

import BgSpace from '../assets/background-pixelart.png';
import MyFace from '../assets/my-face.png';
import Stars from '../assets/three-stars.png';

export const Hello = () => {
  return (
    <DIV>
      <m.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, ease: 'easeInOut'}}
      >
        <HelloContainer>
          <p>"PLAYERS GONNA PLAY"</p>
          <img src={MyFace} alt="My pic profile" />
          <StarsImg src={Stars} alt="Three stars" />
        </HelloContainer>
      </m.div>
    </DIV>
  );
};

export const DIV = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
`;

const HelloContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${BgSpace});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  & p {
    font-size: 24px;
    letter-spacing: 5px;
    text-shadow: rgb(70, 78, 93) 3px 0px 0px,
      rgb(70, 78, 93) 2.83487px 0.981584px 0px,
      rgb(70, 78, 93) 2.35766px 1.85511px 0px,
      rgb(70, 78, 93) 1.62091px 2.52441px 0px,
      rgb(70, 78, 93) 0.705713px 2.91581px 0px,
      rgb(70, 78, 93) -0.287171px 2.98622px 0px,
      rgb(70, 78, 93) -1.24844px 2.72789px 0px,
      rgb(70, 78, 93) -2.07227px 2.16926px 0px,
      rgb(70, 78, 93) -2.66798px 1.37182px 0px,
      rgb(70, 78, 93) -2.96998px 0.42336px 0px,
      rgb(70, 78, 93) -2.94502px -0.571704px 0px,
      rgb(70, 78, 93) -2.59586px -1.50383px 0px,
      rgb(70, 78, 93) -1.96093px -2.27041px 0px,
      rgb(70, 78, 93) -1.11013px -2.78704px 0px,
      rgb(70, 78, 93) -0.137119px -2.99686px 0px,
      rgb(70, 78, 93) 0.850987px -2.87677px 0px,
      rgb(70, 78, 93) 1.74541px -2.43999px 0px,
      rgb(70, 78, 93) 2.44769px -1.73459px 0px,
      rgb(70, 78, 93) 2.88051px -0.838247px 0px;
  }
  & img {
    opacity: 0.8;
    border-radius: 50%;
  }
`;

const StarsImg = styled.img`
  border-radius: 0px !important;
  width: auto;
  height: 150px;
`;