import React, { useState, useEffect } from 'react'
import './LoadingScreen.css'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    // Simula o carregamento progressivo
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onComplete(), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    // Mostra a logo após um pequeno delay
    setTimeout(() => setShowLogo(true), 300)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className={`loading-logo ${showLogo ? 'show' : ''}`}>
          <div className="logo-container">
            <svg viewBox="0 0 200 200" className="creator-logo">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff6ec7" />
                  <stop offset="30%" stopColor="#e91e63" />
                  <stop offset="70%" stopColor="#9c27b0" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Letra C principal */}
              <path 
                d="M 100 20 
                   A 80 80 0 1 0 100 180
                   A 60 60 0 1 1 100 40
                   Z" 
                fill="url(#logoGradient)"
                filter="url(#glow)"
                className="logo-c"
              />
              
              {/* Triângulo de play */}
              <polygon 
                points="85,75 85,125 125,100" 
                fill="white"
                className="logo-play"
                filter="url(#glow)"
              />
              
              {/* Brilho interno */}
              <path 
                d="M 100 30 
                   A 70 70 0 0 0 140 100
                   A 50 50 0 0 1 100 50
                   Z" 
                fill="rgba(255,255,255,0.2)"
                className="logo-shine"
              />
            </svg>
          </div>
          <h1 className="loading-title">Creator Hub</h1>
        </div>
        
        <div className="loading-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="loading-text">Carregando sua experiência...</p>
        </div>
      </div>
      
      <div className="loading-background">
        <div className="gradient-overlay"></div>
      </div>
    </div>
  )
}

export default LoadingScreen