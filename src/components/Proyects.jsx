import React from 'react';
import styled from 'styled-components';
import BgClouds from '../assets/cloud-bg.jpg';
import {motion as m} from 'framer-motion';
import {Navbar} from './Navbar';
import {MarqueeFooter} from './MarqueeFooter';

export const Proyects = () => {
  return (
    <>
      <ProyectsContainer>
        <Navbar />

        <m.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, ease: 'easeInOut'}}
        >
          {/* <Navbar /> */}
          <MainContainer>
            <h1>These are some of the projects i've done recently</h1>
          </MainContainer>
          <MarqueeFooter />
          {/* <MarqueeComp
          style={{
            gradientWidth: 'none !important',
          }}
          direction={'right'}
        >
          <h4
            style={{
              color: '#bcf6e9',
              fontSize: '16px',
              margin: 0,
              padding: '5px',
              whiteSpace: 'nowrap',
            }}
          >
            HUMAN AFTER ALL - HUMAN AFTER ALL - HUMAN AFTER ALL - HUMAN AFTER
            ALL - HUMAN AFTER ALL - HUMAN AFTER ALL - HUMAN AFTER ALL -{' '}
          </h4>
        </MarqueeComp> */}
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
  width: 1280px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 500px;
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

// const MainContainer = styled.div`
//   margin: 0;
//   padding: 0;
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   background-image: url(${CloudsBg});
//   background-position: center;
//   background-repeat: no-repeat;
//   & div {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100px;
//     margin: 0 auto;
// & h1 {
//   font-size: 24px;
//   color: rgba(255, 255, 255, 0.87);
//   text-shadow: rgb(70, 78, 93) 3px 0px 0px,
//     rgb(70, 78, 93) 2.83487px 0.981584px 0px,
//     rgb(70, 78, 93) 2.35766px 1.85511px 0px,
//     rgb(70, 78, 93) 1.62091px 2.52441px 0px,
//     rgb(70, 78, 93) 0.705713px 2.91581px 0px,
//     rgb(70, 78, 93) -0.287171px 2.98622px 0px,
//     rgb(70, 78, 93) -1.24844px 2.72789px 0px,
//     rgb(70, 78, 93) -2.07227px 2.16926px 0px,
//     rgb(70, 78, 93) -2.66798px 1.37182px 0px,
//     rgb(70, 78, 93) -2.96998px 0.42336px 0px,
//     rgb(70, 78, 93) -2.94502px -0.571704px 0px,
//     rgb(70, 78, 93) -2.59586px -1.50383px 0px,
//     rgb(70, 78, 93) -1.96093px -2.27041px 0px,
//     rgb(70, 78, 93) -1.11013px -2.78704px 0px,
//     rgb(70, 78, 93) -0.137119px -2.99686px 0px,
//     rgb(70, 78, 93) 0.850987px -2.87677px 0px,
//     rgb(70, 78, 93) 1.74541px -2.43999px 0px,
//     rgb(70, 78, 93) 2.44769px -1.73459px 0px,
//     rgb(70, 78, 93) 2.88051px -0.838247px 0px;
// }
//   }
// `;

// const MarqueeComp = styled(Marquee)`
//   width: 100%;
//   background: transparent;
//   position: absolute;
//   bottom: 10px;
//   text-shadow: #063164 3px 0px 0px, #063164 2.83487px 0.981584px 0px,
//     #063164 2.35766px 1.85511px 0px, #063164 1.62091px 2.52441px 0px,
//     #063164 0.705713px 2.91581px 0px, #063164 -0.287171px 2.98622px 0px,
//     #063164 -1.24844px 2.72789px 0px, #063164 -2.07227px 2.16926px 0px,
//     #063164 -2.66798px 1.37182px 0px, #063164 -2.96998px 0.42336px 0px,
//     #063164 -2.94502px -0.571704px 0px, #063164 -2.59586px -1.50383px 0px,
//     #063164 -1.96093px -2.27041px 0px, #063164 -1.11013px -2.78704px 0px,
//     #063164 -0.137119px -2.99686px 0px, #063164 0.850987px -2.87677px 0px,
//     #063164 1.74541px -2.43999px 0px, #063164 2.44769px -1.73459px 0px,
//     #063164 2.88051px -0.838247px 0px;
// `;
