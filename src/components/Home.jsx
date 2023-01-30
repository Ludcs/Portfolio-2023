import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import {motion as m} from 'framer-motion';
import SoftDev from '../assets/soft-developer-pixel-art.png';
import GithubIcon from '../assets/github-icon.png';
import LinkedinIcon from '../assets/linkedin-icon.png';
import CvPdf from '../assets/cv/Luciano-De-Carolis-CV.pdf';
import CvIcon from '../assets/cv-icon.png';
import BgSpace from '../assets/background-pixelart.png';

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <MainContainer>
          <DivName>
            <h1>It's me, Lucho! I'm:</h1>
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
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${BgSpace});
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 480px) {
    background-position: 25% 70%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100vh;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    background-size: cover;
  }
  @media (min-width: 1000px) and (max-width: 1368px) {
    background-position: 25% 75%;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 350px;
  max-width: 1200px;
  width: 1200px;
  height: 500px;
  /* margin: 0 auto; */
  /* height: 100vh; */

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 600px; */
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 700px;
  }
`;

const DivName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 350px;
  gap: 30px;
  h1 {
    font-size: 26px;
    text-shadow: #07468a 3px 0px 0px, #07468a 2.83487px 0.981584px 0px,
      #07468a 2.35766px 1.85511px 0px, #07468a 1.62091px 2.52441px 0px,
      #07468a 0.705713px 2.91581px 0px, #07468a -0.287171px 2.98622px 0px,
      #07468a -1.24844px 2.72789px 0px, #07468a -2.07227px 2.16926px 0px,
      #07468a -2.66798px 1.37182px 0px, #07468a -2.96998px 0.42336px 0px,
      #07468a -2.94502px -0.571704px 0px, #07468a -2.59586px -1.50383px 0px,
      #07468a -1.96093px -2.27041px 0px, #07468a -1.11013px -2.78704px 0px,
      #07468a -0.137119px -2.99686px 0px, #07468a 0.850987px -2.87677px 0px,
      #07468a 1.74541px -2.43999px 0px, #07468a 2.44769px -1.73459px 0px,
      #07468a 2.88051px -0.838247px 0px;
  }
  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    /* margin-bottom: 50px; */
    & h1 {
      font-size: 16px;
      margin: 0;
    }
    & h3 {
      font-size: 14px;
      margin: 0;
    }
    & p {
      margin: 0;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
    /* padding-bottom: 70px; */
    & h1 {
      font-size: 26px;
    }
    & h3 {
      font-size: 24px;
    }
    & p span {
      font-size: 18px;
    }
  }
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
    @media (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    justify-content: center;
    gap: 50px;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

const DivImage = styled.div`
  background-color: transparent;
  border-radius: 50%;
  overflow: hidden;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
  @media (max-width: 480px) {
    /* margin-bottom: 50px; */
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
    @media (max-width: 480px) {
      width: 250px;
      height: 250px;
      object-fit: cover;
      @keyframes float {
        0% {
          transform: translatey(0px);
        }
        50% {
          transform: translatey(-20px);
        }
        100% {
          transform: translatey(0px);
        }
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      width: 400px;
      height: 400px;
      object-fit: cover;
      @keyframes float {
        0% {
          transform: translatey(0px);
        }
        50% {
          transform: translatey(-20px);
        }
        100% {
          transform: translatey(0px);
        }
      }
    }
  }
`;
