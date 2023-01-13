import React, {useRef, useState} from 'react';
import styled from 'styled-components';

import {Howl, Howler} from 'howler';
import Play from '../assets/play-music-modified.png';
import Pause from '../assets/pause-music-modified.png';
import Mp3 from '../audio/knife-heartbeats.mp3';

export const Music = () => {
  const [music, setMusic] = useState(false);

  const sound = useRef(
    new Howl({
      src: [Mp3],
      HTML5: true,
      loop: true,
      preload: true,
    })
  );

  const handleMusic = () => {
    Howler.volume(0.2);
    if (music === false) {
      setMusic(true);
      sound.current.play();
    }
    if (music === true) {
      setMusic(false);
      sound.current.pause();
    }
  };

  return (
    <ContainerMusic>
      {music ? (
        <span title="Stop music">
          <ImgsMusic
            onClick={() => handleMusic()}
            src={Pause}
            alt="Pause Music Icon"
          />
        </span>
      ) : (
        <span title="Play music">
          <ImgsMusic
            onClick={() => handleMusic()}
            src={Play}
            alt="Play Music Icon"
          />
        </span>
      )}
    </ContainerMusic>
  );
};

const ContainerMusic = styled.div`
  position: absolute;
  top: 20px;
  left: 36%;
  z-index: 1;
`;

const ImgsMusic = styled.img`
  width: 55px;
  height: 55px;
  margin-right: 10px;
  cursor: pointer;
`;
