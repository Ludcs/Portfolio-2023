import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

export const MarqueeFooter = ({text}) => {
  return (
    <MarqueeComp
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
          textTransform: 'uppercase',
        }}
      >
        {text}
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
`;
