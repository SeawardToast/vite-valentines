import { useState, useEffect } from 'react'

const photoModules = import.meta.glob<{ default: string }>(
  '../assets/photos/*.{png,jpg,jpeg,webp}',
  { eager: true }
)
const photos = Object.values(photoModules).map(m => m.default)

const CYCLE_MS = 8000

const PhotoBackground = ({ revealed }: { revealed: boolean }) => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (photos.length <= 1) return
    const id = setInterval(() => setActive(i => (i + 1) % photos.length), CYCLE_MS)
    return () => clearInterval(id)
  }, [])

  if (photos.length === 0) return null

  return (
    <div className={`photo-bg ${revealed ? 'revealed' : ''}`}>
      {photos.map((src, i) => (
        <div
          key={src}
          className="photo-bg-img"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === active ? 1 : 0,
          }}
        />
      ))}
      <style>{`
        .photo-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }
        .photo-bg-img {
          position: absolute;
          inset: -20px;
          background-size: cover;
          background-position: center;
          filter: blur(10px) brightness(0.3) saturate(0.6);
          opacity: 0;
          transition: opacity 2s ease-in-out, filter 3s ease;
        }
        .photo-bg.revealed .photo-bg-img {
          filter: blur(2px) brightness(0.35) saturate(0.8);
        }
      `}</style>
    </div>
  )
}

export default PhotoBackground
