import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import {motion as m} from 'framer-motion';
import Marquee from 'react-fast-marquee';

import SoftDev from '../assets/soft-developer-pixel-art.png';
import GithubIcon from '../assets/github-icon.png';
import LinkedinIcon from '../assets/linkedin-icon.png';
import CvPdf from '../assets/cv/Luciano-De-Carolis-CV.pdf';
import CvIcon from '../assets/cv-icon.png';
import BgSpace from '../assets/background-pixelart.png';
import {Navbar} from './Navbar';

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <m.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, ease: 'easeInOut'}}
        >
          <MainContainer>
            <DivName>
              <h1>Hi there! I'm:</h1>
              <h3>
                <Typewriter
                  options={{
                    strings: [
                      'Frontend Developer',
                      'Video Games Lover',
                      'Beer & Music Lover',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 25,
                  }}
                />
              </h3>
              <p style={{fontSize: '12px'}}>
                <span style={{color: 'yellow'}}>JavaScript</span> -{' '}
                <span style={{color: 'aqua'}}>React</span>
              </p>
              <IconsContainer>
                <a href="https://github.com/Ludcs" target={'_blank'}>
                  <img src={GithubIcon} alt="Github Icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/luciano-de-carolis-36a751148/"
                  target={'_blank'}
                >
                  <img src={LinkedinIcon} alt="Linkedin Icon" />
                </a>
                <a href={CvPdf} download="Luciano-De-Carolis-CV">
                  <img src={CvIcon} alt="Cv Icon" />
                </a>
              </IconsContainer>
            </DivName>
            <DivImage>
              <img src={SoftDev} alt="Software Developer" />
            </DivImage>
          </MainContainer>
        </m.div>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${BgSpace});
  background-position: center;
  background-repeat: no-repeat;
`;

const MainContainer = styled.div`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`;

const DivName = styled.div`
  background-color: transparent;
  width: 530px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  & img {
    width: 40px;
    height: 40px;
    opacity: 0.7;
    transition: ease 0.3s;
    &:hover {
      opacity: 1;
    }
  }
`;

const DivImage = styled.div`
  background-color: transparent;
  border-radius: 50%;
  overflow: hidden;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
  & img {
    border-radius: 50%;
    width: 350px;
    height: 350px;
    opacity: 0.7;
    @keyframes float {
      0% {
        box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
        transform: translatey(0px);
      }
      50% {
        box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
        transform: translatey(-20px);
      }
      100% {
        box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
        transform: translatey(0px);
      }
    }
  }
`;
