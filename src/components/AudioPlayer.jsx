import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const AudioPlayer = forwardRef((props, ref) => {
  const audioRef = useRef(null)

  useImperativeHandle(ref, () => ({
    playAudio: () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => console.error('Error playing audio:', error))
      }
    },
    setAudioSrc: (src) => {
      if (audioRef.current) {
        audioRef.current.src = src
        audioRef.current.load()
      }
    }
  }))

  return (
    <audio ref={audioRef} />
  )
})

export default AudioPlayer
