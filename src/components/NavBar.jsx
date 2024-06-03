import React, { useRef } from 'react'
import AudioPlayer from './AudioPlayer'

const NavBar = () => {
  const audioPlayerRef = useRef(null)

  const handleNavClick = (audioSrc) => (e) => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.setAudioSrc(audioSrc)
      audioPlayerRef.current.playAudio()
    }
  }

  return (
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light p-3 py-4 py-lg-0 px-lg-5 px-4">
      <a href="index.html" className="navbar-brand ml-lg-3" onClick={handleNavClick('/audio/PanammaCat.mp3')}>
        <img src="/img/nelson-logo.png" alt="website logo" width="60" height="60" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav m-auto py-0">
          <a href="#" className="nav-item nav-link active" onClick={handleNavClick('/audio/FeelGoodInc.mp3')}>Home</a>
          <a href="#about" className="nav-item nav-link" onClick={handleNavClick('/audio/ItsTime.mp3')}>About Me</a>
          <a href="#projects" className="nav-item nav-link" onClick={handleNavClick('/audio/ParanoidAndroid.mp3')}>Projects</a>
          <a href="#skills" className="nav-item nav-link" onClick={handleNavClick('/audio/CantStop.mp3')}>Skills</a>
          <a href="#contact" className="nav-item nav-link" onClick={handleNavClick('/audio/FaceToFace.mp3')}>Contact</a>
        </div>
      </div>
      <AudioPlayer ref={audioPlayerRef} />
    </nav>
  )
}

export default NavBar
