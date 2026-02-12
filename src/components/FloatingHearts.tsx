import { useMemo } from 'react'

const HEART_COUNT = 20

const FloatingHearts = () => {
  const hearts = useMemo(() =>
    Array.from({ length: HEART_COUNT }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 10 + Math.random() * 20,
      delay: `${Math.random() * -20}s`,
      duration: `${10 + Math.random() * 15}s`,
      opacity: 0.1 + Math.random() * 0.3,
    })), [])

  return (
    <div className="floating-hearts">
      {hearts.map(h => (
        <span
          key={h.id}
          className="heart"
          style={{
            left: h.left,
            fontSize: h.size,
            animationDelay: h.delay,
            animationDuration: h.duration,
            opacity: h.opacity,
          }}
        >
          ♥
        </span>
      ))}
      <style>{`
        .floating-hearts {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .heart {
          position: absolute;
          bottom: -30px;
          color: #f48fb1;
          animation: floatUp linear infinite;
          filter: blur(1px);
        }
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: var(--start-opacity, 0.2);
          }
          50% {
            opacity: var(--start-opacity, 0.3);
          }
          100% {
            transform: translateY(-110vh) rotate(360deg) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default FloatingHearts
