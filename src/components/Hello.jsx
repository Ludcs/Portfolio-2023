import React from 'react';
import styled from 'styled-components';
import BgSpace from '../assets/background-pixelart.png';
import MyFace from '../assets/my-face.png';
import Stars from '../assets/three-stars.png';

export const Hello = ({setSayHello}) => {
  return (
    <BgContainer>
      <HelloContainer>
        <p>PLAYERS GONNA PLAY</p>
        <img id="myface" src={MyFace} alt="My pic profile" />
        <StarsImg src={Stars} alt="Three stars" />
        <p id="pressStart" onClick={() => setSayHello(false)}>
          PRESS START
        </p>
      </HelloContainer>
    </BgContainer>
  );
};

const BgContainer = styled.div`
  background-image: url(${BgSpace});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  min-width: 350px;
  @media (max-width: 480px) {
    background-position: 25% 70%;
    width: 100%;
    height: 100vh;
    min-width: 350px;
    overflow-y: hidden;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    background-size: cover;
  }
  @media (min-width: 1000px) and (max-width: 1368px) {
    background-position: 25% 75%;
  }
`;

const HelloContainer = styled.div`
  @media (min-width: 1369px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
  }
  @media (min-width: 1000px) and (max-width: 1368px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    & p {
      font-size: 24px;
    }
    & #myface {
      width: 400px;
      height: 400px;
    }
  }
  @media (min-width: 1000px) and (max-width: 1368px) {
    background-position: 25% 75%;
  }
  & p {
    font-size: 24px;
    text-align: center;
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
    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 2px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 24px;
    }
  }
  & img {
    opacity: 0.8;
    border-radius: 50%;
  }
  #pressStart {
    cursor: pointer;
    animation: taadaa 1s ease-out infinite;

    @keyframes taadaa {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }
`;

const StarsImg = styled.img`
  border-radius: 0px !important;
  width: auto;
  height: 150px;
  @media (max-width: 480px) {
    height: 100px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 250px;
  }
`;
