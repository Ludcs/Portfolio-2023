import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {motion as m, AnimatePresence} from 'framer-motion';
import {Music} from './Music';
import {MenuIcon} from './MenuIcon';

export const NavTo1024 = () => {
  const [clickedNav, setClickedNav] = useState(false);

  let activeStyle = {
    color: 'yellow',
  };

  return (
    <>
      <Music />
      <AnimatePresence>
        {clickedNav && (
          <m.div
            initial={{height: 0, opacity: 0}}
            animate={{
              opacity: 1,
              zIndex: 1,
              position: 'absolute',
              left: 0,
              right: 0,
            }}
            transition={{duration: 0.3}}
            exit={{opacity: 0}}
          >
            <Nav>
              <UlNav>
                <li>
                  <NavLink
                    style={({isActive}) => (isActive ? activeStyle : undefined)}
                    to="/"
                    onClick={() => setClickedNav(false)}
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    style={({isActive}) => (isActive ? activeStyle : undefined)}
                    to="/projects"
                    onClick={() => setClickedNav(false)}
                  >
                    Portfolio
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    style={({isActive}) => (isActive ? activeStyle : undefined)}
                    to="/me"
                    onClick={() => setClickedNav(false)}
                  >
                    Me
                  </NavLink>
                </li>
              </UlNav>
            </Nav>
          </m.div>
        )}
      </AnimatePresence>
      <MenuIcon setClickedNav={setClickedNav} clickedNav={clickedNav} />
    </>
  );
};

const Nav = styled.nav`
  @media (min-width: 350px) and (max-width: 480px) {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 180px;
    margin: 0 auto;
    background-color: rgb(1, 35, 69);
    background: linear-gradient(
      0deg,
      rgba(1, 35, 69, 1) 0%,
      rgba(1, 71, 145, 1) 35%,
      rgba(61, 136, 187, 1) 100%
    );
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
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
  }
`;

const UlNav = styled.ul`
  @media (min-width: 350px) and (max-width: 480px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 30px;
    list-style: none;
    padding-left: 0px !important;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    list-style: none;
    padding-left: 0px !important;
  }
  & a {
    color: inherit;
    text-decoration: none;
    @media (max-width: 480px) {
      font-size: 16px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 22px;
      letter-spacing: 5px;
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
