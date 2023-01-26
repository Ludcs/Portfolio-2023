import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

export const MarqueeFooter = ({proyectsText, meText, homeText}) => {
  return (
    <MarqueeComp className="overlay" direction={'right'}>
      <h4>
        {homeText &&
          'Another day on planet earth - Another day on planet earth - Another day on planet earth - Another day on planet earth - Another day on planet earth - Another day on planet earth - Another day on planet earth -'}

        {proyectsText &&
          'Making things happen - Making things happen - Making things happen - Making things happen - Making things happen - Making things happen - Making things happen -'}
        {meText &&
          'Being human after all - Being human after all - Being human after all - Being human after all - Being human after all - Being human after all - Being human after all -'}
      </h4>
    </MarqueeComp>
  );
};

export const MarqueeComp = styled(Marquee)`
  width: 100%;
  height: 100px;
  background: transparent;
  position: absolute;
  bottom: 0px;
  text-shadow: #063164 3px 0px 0px, #063164 2.83487px 0.981584px 0px,
    #063164 2.35766px 1.85511px 0px, #063164 1.62091px 2.52441px 0px,
    #063164 0.705713px 2.91581px 0px, #063164 -0.287171px 2.98622px 0px,
    #063164 -1.24844px 2.72789px 0px, #063164 -2.07227px 2.16926px 0px,
    #063164 -2.66798px 1.37182px 0px, #063164 -2.96998px 0.42336px 0px,
    #063164 -2.94502px -0.571704px 0px, #063164 -2.59586px -1.50383px 0px,
    #063164 -1.96093px -2.27041px 0px, #063164 -1.11013px -2.78704px 0px,
    #063164 -0.137119px -2.99686px 0px, #063164 0.850987px -2.87677px 0px,
    #063164 1.74541px -2.43999px 0px, #063164 2.44769px -1.73459px 0px,
    #063164 2.88051px -0.838247px 0px;
  & h4 {
    color: #bcf6e9;
    font-size: 16px;
    margin: 0;
    padding: 5px;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  @media (max-width: 480px) {
    .overlay::after {
      width: 70px;
    }
    .overlay::before {
      width: 70px;
    }
    height: 60px;
    h4 {
      font-size: 12px;
      letter-spacing: normal;
    }
  }
  @media (min-width: 768px) and (max-width: 1368px) {
    .overlay::after {
      width: 100px;
    }
    .overlay::before {
      width: 100px;
    }
    height: 80px;
    h4 {
      font-size: 14px;
    }
  }
`;
