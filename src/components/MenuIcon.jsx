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
          className="notVisibleDestop"
        />
      </ImgContainer>
    </>
  );
};

const ImgContainer = styled.div`
  @media (min-width: 1025px) {
    width: 40px;
    height: 40px;
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }
  @media (max-width: 480px) {
    position: absolute;
    top: 15px;
    right: 10px;
    z-index: 1;
    width: 40px;
    height: 40px;
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 15px;
    right: 10px;
    z-index: 1;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
