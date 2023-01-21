import React from 'react';
import styled from 'styled-components';
import MenuIconMobile from '../assets/menu_icon.png';

export const MenuIcon = ({clickedNav, setClickedNav}) => {
  return (
    <>
      <ImgContainer>
        <img
          onClick={() => setClickedNav(!clickedNav)}
          src={MenuIconMobile}
          alt="Menu Icon"
        />
      </ImgContainer>
    </>
  );
};

const ImgContainer = styled.div`
  width: 40px;
  height: 40px;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
  @media (max-width: 767px) {
    position: absolute;
    top: 15px;
    right: 10px;
    z-index: 1;
  }
`;
