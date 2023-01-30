import React from 'react';
import styled from 'styled-components';
import {motion as m} from 'framer-motion';
import {MarqueeFooter} from './MarqueeFooter';
import BgForest from '../assets/forest-bg.jpg';

export const Me = ({meText}) => {
  return (
    <>
      <MeContainer>
        <m.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, ease: 'easeInOut'}}
        >
          <TextContainer>
            <h1>Okay! A little bit about me:</h1>
            <div>
              <p>
                A front-end web developer from Argentina who loves technology
                and the internet ecosystem. Video game player from a very very
                young age.
              </p>
              <p>
                I enjoy learning and creating new things. I enjoy sharing good
                beer and good music with my homies.
              </p>
              <p>
                I am curious, competitive, patient and self-demanding. I am many
                more things...
              </p>
              <p>
                I am... <span>HUMAN AFTER ALL!</span>
              </p>
            </div>
          </TextContainer>
          <MarqueeFooter meText={meText} />
        </m.div>
      </MeContainer>
    </>
  );
};

const MeContainer = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${BgForest});
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 480px) {
    background-position: 65% 70%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    background-size: cover;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 480px) {
    width: 100%;
    height: 85vh;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }

  & h1 {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 40px;
    text-shadow: #36878a 3px 0px 0px, #36878a 2.83487px 0.981584px 0px,
      #36878a 2.35766px 1.85511px 0px, #36878a 1.62091px 2.52441px 0px,
      #36878a 0.705713px 2.91581px 0px, #36878a -0.287171px 2.98622px 0px,
      #36878a -1.24844px 2.72789px 0px, #36878a -2.07227px 2.16926px 0px,
      #36878a -2.66798px 1.37182px 0px, #36878a -2.96998px 0.42336px 0px,
      #36878a -2.94502px -0.571704px 0px, #36878a -2.59586px -1.50383px 0px,
      #36878a -1.96093px -2.27041px 0px, #36878a -1.11013px -2.78704px 0px,
      #36878a -0.137119px -2.99686px 0px, #36878a 0.850987px -2.87677px 0px,
      #36878a 1.74541px -2.43999px 0px, #36878a 2.44769px -1.73459px 0px,
      #36878a 2.88051px -0.838247px 0px;
    @media (max-width: 480px) {
      font-size: 16px;
      margin-top: 50px;
      margin-bottom: 0px;
      padding: 0px 10px 0px 10px;
    }
  }
  & div {
    width: 1000px;
    margin: 0 auto;
    @media (min-width: 768px) and (max-width: 1024px) {
      width: 100%;
      margin: 0 auto;
    }
    & p {
      line-height: 30px;
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
    @media (max-width: 480px) {
      width: 100%;
      margin-top: 20px;
      p {
        font-size: 12px;
        padding-left: 10px;
        padding-right: 10px;
        line-height: 25px;
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      p {
        font-size: 18px;
        line-height: 35px;
        letter-spacing: 1.5px;
        padding-left: 50px;
        padding-right: 50px;
      }
    }
  }
  & span {
    text-shadow: #f077f9 3px 0px 0px, #f077f9 2.83487px 0.981584px 0px,
      #f077f9 2.35766px 1.85511px 0px, #f077f9 1.62091px 2.52441px 0px,
      #f077f9 0.705713px 2.91581px 0px, #f077f9 -0.287171px 2.98622px 0px,
      #f077f9 -1.24844px 2.72789px 0px, #f077f9 -2.07227px 2.16926px 0px,
      #f077f9 -2.66798px 1.37182px 0px, #f077f9 -2.96998px 0.42336px 0px,
      #f077f9 -2.94502px -0.571704px 0px, #f077f9 -2.59586px -1.50383px 0px,
      #f077f9 -1.96093px -2.27041px 0px, #f077f9 -1.11013px -2.78704px 0px,
      #f077f9 -0.137119px -2.99686px 0px, #f077f9 0.850987px -2.87677px 0px,
      #f077f9 1.74541px -2.43999px 0px, #f077f9 2.44769px -1.73459px 0px,
      #f077f9 2.88051px -0.838247px 0px;
  }
`;
