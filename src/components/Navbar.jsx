import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// import {Howl, Howler} from 'howler';

import Joy from '../assets/joystick-modified.png';
// import Play from '../assets/play-music-modified.png';
// import Pause from '../assets/pause-music-modified.png';
// import Mp3 from '../audio/knife-heartbeats.mp3';

export const Navbar = ({setHomeText, setProyectsText, setMeText}) => {
  // const [music, setMusic] = useState(false);

  // const sound = useRef(
  //   new Howl({
  //     src: [Mp3],
  //     HTML5: true,
  //     loop: true,
  //     preload: true,
  //   })
  // );

  // const handleMusic = () => {
  //   Howler.volume(0.2);
  //   if (music === false) {
  //     setMusic(true);
  //     sound.current.play();
  //   }
  //   if (music === true) {
  //     setMusic(false);
  //     sound.current.pause();
  //   }
  // };

  const changeToHome = () => {
    setHomeText(true);
  };

  const changeToProyects = () => {
    setHomeText(false);
    setProyectsText(true);
  };

  const changeToMe = () => {
    setHomeText(false);
    setMeText(true);
  };

  return (
    <Nav>
      <span>
        <img style={{marginTop: '-5px'}} src={Joy} alt="Joystick Nes" />
      </span>
      <p>
        PLAYER 1: <span>Lucho Dc</span>
      </p>
      <UlNav>
        <li>
          <Link to="/" onClick={() => setHomeText(true)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/proyects" onClick={changeToProyects}>
            Proyects
          </Link>
        </li>

        <li>
          <Link to="/me" onClick={changeToMe}>
            Me
          </Link>
        </li>
      </UlNav>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 1280px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  position: absolute;
  z-index: 1;
  left: 15%;

  & div img {
    width: 55px;
    height: 55px;
    margin-top: 0px !important;
  }
  & p {
    width: 25%;
    margin-right: 10px;
    margin-left: 10px;
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
  & span img {
    width: 55px;
    height: 55px;
    margin-right: 10px;
  }
`;

const UlNav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 30px;
  list-style: none;
  padding: 10px;
  margin: 0 auto;
  width: 70%;
  & a {
    color: inherit;
    text-decoration: none;
  }
  & li {
    text-decoration: none;
    text-transform: uppercase;
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
