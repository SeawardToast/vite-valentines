import { useState, useCallback } from 'react'
import './Envelope.css'

const BURST_COUNT = 18
const BURST_EMOJIS = ['💕', '💖', '✨', '💗', '💝', '♥']

const Envelope = () => {
  const [opened, setOpened] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [answered, setAnswered] = useState<'yes' | null>(null)
  const [noStyle, setNoStyle] = useState<React.CSSProperties>({})

  const handleOpen = () => {
    if (!opened) setOpened(true)
  }

  const handleLetterClick = (e: React.MouseEvent) => {
    if (opened && !fullscreen) {
      e.stopPropagation()
      setFullscreen(true)
    }
  }

  const handleYes = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setAnswered('yes')
  }, [])

  const handleNo = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    const x = (Math.random() - 0.5) * 200
    const y = (Math.random() - 0.5) * 100
    setNoStyle({
      transform: `translate(${x}px, ${y}px) scale(${0.6 + Math.random() * 0.3})`,
      opacity: 0.5 + Math.random() * 0.3,
    })
  }, [])

  const burstHearts = Array.from({ length: BURST_COUNT }, (_, i) => {
    const angle = (i / BURST_COUNT) * 360
    const distance = 80 + Math.random() * 200
    const tx = Math.cos((angle * Math.PI) / 180) * distance
    const ty = Math.sin((angle * Math.PI) / 180) * distance
    return { id: i, tx, ty, rot: Math.random() * 720 - 360, emoji: BURST_EMOJIS[i % BURST_EMOJIS.length] }
  })

  if (answered === 'yes') {
    return (
      <>
        <div className="celebration">
          {burstHearts.map(h => (
            <span
              key={h.id}
              className="burst-heart"
              style={{ '--tx': `${h.tx}px`, '--ty': `${h.ty}px`, '--rot': `${h.rot}deg` } as React.CSSProperties}
            >
              {h.emoji}
            </span>
          ))}
        </div>
        <div className="yes-response">
          <div className="yes-response-text">I knew you would! 💕</div>
        </div>
      </>
    )
  }

  const wrapperClass = [
    'envelope-wrapper',
    opened && 'opened',
    fullscreen && 'fullscreen',
  ].filter(Boolean).join(' ')

  return (
    <div className={wrapperClass} onClick={handleOpen}>
      <div className="envelope">
        <div className="envelope-flap" />
        <div className="letter" onClick={handleLetterClick}>
          <div className="letter-peek">tap to read</div>
          <div className="letter-content">
            <div className="letter-greeting">My Dearest Love,</div>
            <p className="letter-body">
              Hi baby! I just want to start off by saying that I love you sooo much and you mean the absolute world to me.
              I can't imagine a life without you by my side and I am so thankful for you every single day.
              I think what we have together is very special and we are so lucky to be able to experience it with each other.
            </p>
            <p className="letter-body">
              You constantly drift throughout my mind every day, causing me to smile when noone is around and keep me happy when I am feeling down.
              I cannot wait to grow old with you, but before that happens, we have much to do.
              Many places to see and explore, much food to eat and beer to drink!
              We will fill the pages of our story with an abundance of love.
              You make my life everything I have every dreamed of.
            </p>
            <div className="letter-question">I'm yours, you're mine, will you be my Valentine?</div>
            <div className="letter-buttons">
              <button className="btn-yes" onClick={handleYes}>Yes!</button>
              <button className="btn-no" style={noStyle} onClick={handleNo}>No</button>
            </div>
          </div>
        </div>
        <div className="envelope-body">
          <span className="envelope-seal">💌</span>
        </div>
      </div>
      {!opened && <div className="tap-hint">tap to open</div>}
    </div>
  )
}

export default Envelope
