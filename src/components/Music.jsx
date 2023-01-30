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
        <ImgsMusic
          title="Pause music"
          onClick={() => handleMusic()}
          src={Pause}
          alt="Pause Music Icon"
        />
      ) : (
        <ImgsMusic
          title="Play music"
          onClick={() => handleMusic()}
          src={Play}
          alt="Play Music Icon"
        />
      )}
    </ContainerMusic>
  );
};

const ContainerMusic = styled.div`
  @media (min-width: 1025px) {
    width: 35px;
    height: 35px;
    margin-left: 10px;
    margin-top: -5px;
  }
  @media (max-width: 480px) {
    position: absolute;
    top: 15px;
    left: 10px;
    margin-left: 0px;
    margin-top: 0px;
    z-index: 1;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 15px;
    left: 10px;
    margin-left: 0px;
    margin-top: 0px;
    z-index: 1;
  }
`;

const ImgsMusic = styled.img`
  @media (min-width: 1025px) {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    cursor: pointer;
    object-fit: cover;
  }
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    margin-right: 0px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50px;
    height: 50px;
    margin-right: 0px;
  }
`;
