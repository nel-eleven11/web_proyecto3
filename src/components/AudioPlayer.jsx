import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const AudioPlayer = forwardRef((props, ref) => {
  const audioRef = useRef(null)

  useImperativeHandle(ref, () => ({
    playAudio: () => {
      if (audioRef.current) {
        audioRef.current.play()
      }
    },
    setAudioSrc: (src) => {
      if (audioRef.current) {
        audioRef.current.src = src;
      }
    }
  }))

  return (
    <audio ref={audioRef} />
  )
})

export default AudioPlayer
