import React from 'react';
import styled from 'styled-components';
import BgClouds from '../assets/cloud-bg.jpg';
import {motion as m} from 'framer-motion';
// import {Navbar} from './Navbar';
import {MarqueeFooter} from './MarqueeFooter';

import Project1 from '../assets/img_project_0.jpg';
import Project2 from '../assets/img_project_01.jpg';
import Project3 from '../assets/img_project_5.jpg';

export const Proyects = ({proyectsText}) => {
  return (
    <>
      <ProyectsContainer>
        <m.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, ease: 'easeInOut'}}
        >
          <MainContainer>
            <h1>These are some of the projects i've done recently</h1>
            <SectionProyects>
              <div>
                <img src={Project1} alt="Project 1" />
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam quidem aliquam quaerat totam recusandae inventore
                    nostrum, iste sunt quos dolor sit repellendus adipisci
                    deserunt ut dolorem magni assumenda tempore veniam!
                  </p>
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam quidem aliquam quaerat totam recusandae inventore
                    nostrum, iste sunt quos dolor sit repellendus adipisci
                    deserunt ut dolorem magni assumenda tempore veniam!
                  </p>
                  <p>
                    <a
                      href="https://sunnyside-dun.vercel.app/"
                      target={'_blank'}
                    >
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam quidem aliquam quaerat totam recusandae inventore
                    nostrum, iste sunt quos dolor sit repellendus adipisci
                    deserunt ut dolorem magni assumenda tempore veniam!
                  </p>
                  <p>
                    <a
                      href="https://adviency-luciano-dc.vercel.app/"
                      target={'_blank'}
                    >
                      PLAY
                    </a>{' '}
                    -{' '}
                    <a
                      href="https://github.com/Ludcs/adviency"
                      target={'_blank'}
                    >
                      VIEW CODE
                    </a>
                  </p>
                </div>
              </div>
            </SectionProyects>
          </MainContainer>
          <MarqueeFooter proyectsText={proyectsText} />
        </m.div>
      </ProyectsContainer>
    </>
  );
};

const ProyectsContainer = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${BgClouds});
  background-position: center;
  background-repeat: no-repeat;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  & h1 {
    font-size: 24px;
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
`;

const SectionProyects = styled.div`
  width: 1280px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 5px;
  margin-top: 30px;
  & div {
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
      background-color: rgba(0, 0, 0, 0.75);
      opacity: 0;
      transition: all 0.25s ease-in-out;
      &:hover {
        opacity: 1;
      }
      & p {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.87);
        text-align: center;
        padding: 10px;
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
