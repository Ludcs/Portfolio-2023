import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import {useLocation, NavLink, Link} from 'react-router-dom';
import Joy from '../assets/joystick-modified.png';
import {Music} from './Music';
import {MenuIcon} from './MenuIcon';

export const Navbar = ({setHomeText, setProyectsText, setMeText}) => {
  //const location = useLocation();
  //console.log(location.pathname);

  const [clickedNav, setClickedNav] = useState(false);

  let activeStyle = {
    color: 'yellow',
  };

  const changeToHome = () => {
    setHomeText(true);
    setClickedNav(false);
  };

  const changeToProyects = () => {
    setHomeText(false);
    setProyectsText(true);
    setClickedNav(false);
  };

  const changeToMe = () => {
    setHomeText(false);
    setMeText(true);
    setClickedNav(false);
  };

  return (
    <>
      <Music />
      {clickedNav && (
        <Nav>
          <span>
            <Link to={'/'} onClick={() => setHomeText(true)}>
              <img
                className="notonmobile"
                style={{marginTop: '-5px'}}
                src={Joy}
                alt="Joystick Nes"
              />
            </Link>
          </span>
          <p className="notonmobile">
            <span id="p_player">PLAYER 1:</span> <span>Lucho Dc</span>
          </p>

          <UlNav>
            <li>
              <NavLink
                style={({isActive}) => (isActive ? activeStyle : undefined)}
                to="/"
                onClick={changeToHome}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                style={({isActive}) => (isActive ? activeStyle : undefined)}
                to="/proyects"
                onClick={changeToProyects}
              >
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink
                style={({isActive}) => (isActive ? activeStyle : undefined)}
                to="/me"
                onClick={changeToMe}
              >
                Me
              </NavLink>
            </li>
          </UlNav>
          {/* <div className="languageContainer">
            <p>ENG</p>
            <p>SPA</p>
          </div> */}
        </Nav>
      )}
      <MenuIcon setClickedNav={setClickedNav} clickedNav={clickedNav} />
    </>
  );
};

const Nav = styled.nav`
  width: 1160px;
  max-width: 1200px;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  @media (max-width: 480px) {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-right: 10px; */
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    margin: 0 auto;
    background-color: rgb(1, 35, 69);
    background: linear-gradient(
      0deg,
      rgba(1, 35, 69, 1) 0%,
      rgba(1, 71, 145, 1) 35%,
      rgba(61, 136, 187, 1) 100%
    );
    .languageContainer {
      width: 100%;
      height: 50px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      /* position: absolute;
      bottom: 0px;
      margin-left: auto;
      margin-right: auto; */
      p {
        color: yellow;
        font-size: 12px;
      }
    }
  }
  .notonmobile {
    @media (max-width: 767px) {
      display: none;
    }
  }
  /* .ul767 {
    @media (max-width: 767px) {
      width: 90%;
      height: 300px;
      margin: 0 auto;
      background-color: #596a;
    }
  } */
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
    @media (max-width: 480px) {
      width: 0;
      margin: 0 auto;
      #p_player {
        font-size: 14px;
      }
    }
  }
  & #p_player {
    color: #56f350;
  }
  & span img {
    width: 55px;
    height: 55px;
    margin-right: 10px;
  }
  .menu_icon {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const UlNav = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 30px;
  list-style: none;
  padding: 10px;
  width: 60%;
  /* @media (max-width: 480px) {
    width: 100%;
    justify-content: space-around;
  } */
  @media (max-width: 767px) {
    /* display: none; */
    /* width: 100%; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  & a {
    color: inherit;
    text-decoration: none;
    @media (max-width: 480px) {
      font-size: 16px;
    }
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
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;
