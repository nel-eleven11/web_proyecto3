import React, { useRef } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <audio ref={audioRef} src="./audio/ItsTime.mp3" />
  );
};

export default AudioPlayer;
