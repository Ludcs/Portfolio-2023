import React from 'react';
import styled from 'styled-components';
import BgClouds from '../assets/cloud-bg.jpg';
import {MarqueeFooter} from './MarqueeFooter';
import Project1 from '../assets/img_project_0.jpg';
import Project2 from '../assets/img_project_01.jpg';
import Project3 from '../assets/img_project_5.jpg';

export const Proyects = ({proyectsText}) => {
  return (
    <>
      <ProyectsContainer>
        <MainContainer>
          <h1>These are some of the projects i've done recently</h1>
          <SectionProyects>
            <div>
              <img src={Project1} alt="Project 1" />
              <div>
                <p id="title_project">E-Commerce - Cart</p>
                <p>Vite + React + ChakraUi</p>
                <p>
                  <a
                    href="https://carrito-simple-ludc.vercel.app/"
                    target={'_blank'}
                  >
                    PLAY
                  </a>{' '}
                  -{' '}
                  <a
                    href="https://github.com/Ludcs/carrito-simple"
                    target={'_blank'}
                  >
                    VIEW CODE
                  </a>
                </p>
              </div>
            </div>
            <div>
              <img src={Project2} alt="Project 2" />
              <div>
                <p id="title_project">Landing Page Layout</p>
                <p>Vite + React + ChakraUi</p>
                <p>
                  <a href="https://sunnyside-dun.vercel.app/" target={'_blank'}>
                    PLAY
                  </a>{' '}
                  -{' '}
                  <a
                    href="https://github.com/Ludcs/ChakraUi-primer-practica"
                    target={'_blank'}
                  >
                    VIEW CODE
                  </a>
                </p>
              </div>
            </div>
            <div>
              <img src={Project3} alt="Project 3" />
              <div>
                <p id="title_project">Adviency Calendar</p>
                <p>React + styled-components</p>
                <p>
                  <a
                    href="https://adviency-luciano-dc.vercel.app/"
                    target={'_blank'}
                  >
                    PLAY
                  </a>{' '}
                  -{' '}
                  <a href="https://github.com/Ludcs/adviency" target={'_blank'}>
                    VIEW CODE
                  </a>
                </p>
              </div>
            </div>
          </SectionProyects>
          <p id="seemore">
            See more on my{' '}
            <a href="https://github.com/Ludcs" target={'_blank'}>
              GitHub
            </a>
          </p>
        </MainContainer>
        {/* <MarqueeFooter proyectsText={proyectsText} /> */}
      </ProyectsContainer>
    </>
  );
};

const ProyectsContainer = styled.div`
  /* box-sizing: border-box;
  padding: 0;
  margin: 0 auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${BgClouds});
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 480px) {
    background-position: 8% 70%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    background-size: cover;
  }
  @media (min-width: 1000px) and (max-width: 1368px) {
    background-position: 25% 75%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 350px;
  max-width: 1200px;
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  /* height: 100vh; */
  @media (max-width: 480px) {
    width: 100%;
  }

  & h1 {
    font-size: 24px;
    @media (max-width: 480px) {
      font-size: 12px;
      text-align: center;
      padding: 0px 10px 0px 10px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 18px;
      text-align: center;
    }
    @media (min-width: 1025px) and (max-width: 1368px) {
      font-size: 18px;
      text-align: center;
    }
    color: rgba(255, 255, 255, 0.87);
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
  & #seemore {
    font-size: 16px;
    @media (max-width: 480px) {
      font-size: 12px;
      text-align: center;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 18px;
      letter-spacing: 3px;
    }
    @media (min-width: 1025px) and (max-width: 1368px) {
      font-size: 16px;
    }
    color: rgba(255, 255, 255, 0.87);
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
    & a {
      text-decoration: none;
      color: inherit;
      transition: color 0.2s ease-in;
      &:hover {
        color: yellow;
      }
    }
  }
`;

const SectionProyects = styled.div`
  width: 1200px;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 5px;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 480px) {
    width: 90%;
    height: 65vh;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 15px;
    margin: 0 auto;
    margin-top: 0;
    margin-bottom: 0;
    padding: 10px;
    overflow-y: scroll;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
    height: 65vh;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 15px;
    margin: 0 auto;
    margin-top: 0;
    margin-bottom: 0;
    padding: 10px;
    overflow-y: scroll;
  }
  @media (min-width: 1025px) and (max-width: 1368px) {
    width: 90%;
    height: 300px;
    margin: 0 auto;
    padding-bottom: 25px;
    padding-top: 25px;
  }
  & div {
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    border-radius: 10px;
    @media (max-width: 480px) {
      box-shadow: none;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      width: 400px;
      height: 400px;
      position: relative;
      box-shadow: none;
      border-radius: 10px;
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
    & div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 25px;
      background-color: rgba(0, 0, 0, 0.75);
      opacity: 0;
      transition: all 0.25s ease-in-out;
      border-radius: inherit;
      @media (max-width: 480px) {
        gap: 12.5px;
      }
      @media (min-width: 768px) and (max-width: 1024px) {
        gap: 50px;
      }
      &:hover {
        opacity: 1;
      }
      & #title_project {
        font-size: 16px;
        text-transform: uppercase;
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
        @media (max-width: 480px) {
          font-size: 14px;
        }
      }
      & p {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.87);
        text-align: center;
        margin: 0 !important;
        @media (max-width: 480px) {
          font-size: 12px;
        }
      }
      & a {
        text-decoration: none;
        color: #063164;
        text-shadow: rgb(188 246 233) 3px 0px 0px,
          rgb(188 246 233) 2.83487px 0.981584px 0px,
          rgb(188 246 233) 2.35766px 1.85511px 0px,
          rgb(188 246 233) 1.62091px 2.52441px 0px,
          rgb(188 246 233) 0.705713px 2.91581px 0px,
          rgb(188 246 233) -0.287171px 2.98622px 0px,
          rgb(188 246 233) -1.24844px 2.72789px 0px,
          rgb(188 246 233) -2.07227px 2.16926px 0px,
          rgb(188 246 233) -2.66798px 1.37182px 0px,
          rgb(188 246 233) -2.96998px 0.42336px 0px,
          rgb(188 246 233) -2.94502px -0.571704px 0px,
          rgb(188 246 233) -2.59586px -1.50383px 0px,
          rgb(188 246 233) -1.96093px -2.27041px 0px,
          rgb(188 246 233) -1.11013px -2.78704px 0px,
          rgb(188 246 233) -0.137119px -2.99686px 0px,
          rgb(188 246 233) 0.850987px -2.87677px 0px,
          rgb(188 246 233) 1.74541px -2.43999px 0px,
          rgb(188 246 233) 2.44769px -1.73459px 0px,
          rgb(188 246 233) 2.88051px -0.838247px 0px;
        transition: color 0.2s ease-in;
      }
    }
  }
`;
