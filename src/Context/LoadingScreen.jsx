
import React, { useState, useEffect } from 'react'
import C1 from '../assets/c.jpg'
import D1 from '../assets/d.webp'
import A1 from '../assets/a.webp'
import I1 from '../assets/i.jpg'
import S1 from '../assets/images.jpg'
import fastman from '../assets/fastman.jpg'
const IMAGES       = [C1, D1, A1, I1, S1]
const IMG_DURATION = 2500
const TOTAL_MS     = IMG_DURATION * IMAGES.length
const TICK_MS      = TOTAL_MS / 100

const LoadingScreen = ({ onFinish }) => {
  const [progress,   setProgress]   = useState(0)
  const [bgIndex,    setBgIndex]    = useState(0)
  const [noInternet, setNoInternet] = useState(false)
  const [fadeOut,    setFadeOut]    = useState(false)
  const [visible,    setVisible]    = useState(false)

  useEffect(() => { setTimeout(() => setVisible(true), 50) }, [])

  useEffect(() => {
    const bg = setInterval(() => setBgIndex(prev => (prev + 1) % IMAGES.length), IMG_DURATION)
    return () => clearInterval(bg)
  }, [])

  useEffect(() => {
    if (!navigator.onLine) { setNoInternet(true); return }
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setFadeOut(true), 300)
          setTimeout(() => onFinish(), 1100)
          return 100
        }
        return Math.min(100, Math.round(prev + 1))
      })
    }, TICK_MS)
    const handleOffline = () => setNoInternet(true)
    window.addEventListener('offline', handleOffline)
    return () => { clearInterval(interval); window.removeEventListener('offline', handleOffline) }
  }, [])

  return (
    <>
      <style>{`
        @keyframes pulse-dot {
          0%,100% { opacity:0.2; transform:scale(0.8); }
          50%      { opacity:1;   transform:scale(1.3); }
        }
        @keyframes float-up {
          0%   { opacity:0; transform:translateY(32px); }
          100% { opacity:1; transform:translateY(0);    }
        }
        @keyframes scale-in {
          0%   { opacity:0; transform:scale(0.7); }
          100% { opacity:1; transform:scale(1);   }
        }
        @keyframes slide-down {
          0%   { opacity:0; transform:translateY(-20px); }
          100% { opacity:1; transform:translateY(0);     }
        }
        @keyframes shimmer {
          0%   { background-position:-200% center; }
          100% { background-position: 200% center; }
        }
        .logo-anim  { animation: scale-in   0.7s cubic-bezier(0.34,1.56,0.64,1) 0.1s both; }
        .title-anim { animation: slide-down  0.6s ease-out 0.4s both; }
        .bar-anim   { animation: float-up    0.6s ease-out 0.7s both; }
        .dots-anim  { animation: float-up    0.6s ease-out 0.9s both; }
        .shimmer-bar {
          background: linear-gradient(90deg,#f97316 0%,#fbbf24 40%,#f97316 60%,#ea580c 100%);
          background-size: 200% auto;
          animation: shimmer 2s linear infinite;
        }
      `}</style>

      {/* ── Wrapper ── */}
      <div
        className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
        style={{
          opacity:    fadeOut ? 0 : visible ? 1 : 0,
          transform:  fadeOut ? 'scale(1.04)' : 'scale(1)',
          transition: fadeOut
            ? 'opacity 0.7s ease-in, transform 0.7s ease-in'
            : 'opacity 0.6s ease-out',
        }}
      >
        {/* ── BG Slideshow — ចេញជានិច្ច ── */}
        {IMAGES.map((img, i) => (
          <div key={i} className="absolute inset-0"
            style={{
              backgroundImage:    `url(${img})`,
              backgroundSize:     'cover',
              backgroundPosition: 'center',
              opacity:    bgIndex === i ? 1 : 0,
              transform:  bgIndex === i ? 'scale(1.04)' : 'scale(1)',
              transition: 'opacity 1s ease-in-out, transform 1.4s ease-in-out',
            }}
          />
        ))}

        {/* ── Overlay ── */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

        {/* ── NO INTERNET content ── */}
        {noInternet ? (
          <div className="relative z-10 flex flex-col items-center text-center px-8">
            <span className="text-7xl mb-6">📡</span>
            <h1 className="text-white text-2xl font-bold mb-2">No Internet Connection</h1>
            <p className="text-gray-400 text-sm mb-8">សូមភ្ជាប់ internet ហើយ reload វិញ</p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors duration-200"
            >
              Try Again
            </button>

            {/* Slide dots */}
            <div className="flex gap-2 mt-12">
              {IMAGES.map((_, i) => (
                <div key={i} className="rounded-full"
                  style={{
                    width:      bgIndex===i ? 22 : 6,
                    height:     6,
                    background: bgIndex===i ? '#f97316' : 'rgba(255,255,255,0.3)',
                    transition: 'all 0.5s cubic-bezier(0.34,1.2,0.64,1)',
                    boxShadow:  bgIndex===i ? '0 0 8px rgba(249,115,22,0.6)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          /* ── NORMAL loading content ── */
          <div className="relative z-10 flex flex-col items-center">

            {/* Logo */}
            <div className="logo-anim flex flex-col items-center mb-10">
              <img src={fastman} alt="logo" className="w-24 h-24 rounded-full shadow-2xl ring-2 ring-orange-500/50 object-cover mb-3"/>
              <div className="title-anim text-center">
                <div className="text-white text-3xl font-bold tracking-wide" style={{ fontFamily:"'Georgia',serif" }}>
                  Fastman
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="bar-anim w-64 flex flex-col items-center gap-3">
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full shimmer-bar transition-all duration-100"
                  style={{ width:`${progress}%` }}
                />
              </div>
              <div className="dots-anim flex items-center gap-3">
                <p className="text-white text-sm font-bold tabular-nums">{progress}%</p>
                <div className="flex gap-1">
                  {[0,1,2].map(i => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-400"
                      style={{ animation:`pulse-dot 1.2s ease-in-out ${i*0.2}s infinite` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Slide dots */}
            <div className="flex gap-2 mt-10">
              {IMAGES.map((_, i) => (
                <div key={i} className="rounded-full"
                  style={{
                    width:      bgIndex===i ? 22 : 6,
                    height:     6,
                    background: bgIndex===i ? '#f97316' : 'rgba(255,255,255,0.2)',
                    transition: 'all 0.5s cubic-bezier(0.34,1.2,0.64,1)',
                    boxShadow:  bgIndex===i ? '0 0 8px rgba(249,115,22,0.6)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default LoadingScreen