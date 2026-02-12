# Landing Page — Task Reference

## Status: Built — V1 Complete

## What It Is
The first thing she sees. A romantic envelope that opens to reveal a love letter asking her to be my valentine.

## Components
- `components/Envelope.tsx` + `components/Envelope.css` — the envelope, letter, and yes/no interaction
- `components/FloatingHearts.tsx` — ambient floating hearts background

## Behavior

### Envelope States
1. **Idle** — centered on screen, gentle float/bob animation, soft purple glow
2. **Hover** — flap opens partially via 3D CSS transform, scale bumps up slightly, glow intensifies
3. **Open (clicked)** — flap opens fully, letter slides up out of envelope smoothly, "tap the letter to read" hint
4. **Fullscreen (click letter)** — envelope fades away, letter expands to fill screen (max 460px wide, 85vh tall, scrollable), larger fonts
5. **Answered** — Yes/No buttons visible in fullscreen letter

### Interactions
- **Yes button** — triggers celebration (heart burst effect), transitions to next page/state
- **No button** — playfully dodges away from cursor or shrinks, making it hard to click

### Envelope Construction
CSS-drawn (no images). Structure:
```
.envelope-wrapper  →  centering + float animation
  .envelope        →  perspective container
    .envelope-flap →  triangular flap, rotateX on hover/open
    .envelope-body →  rectangle body
    .letter        →  slides up when opened, contains message + buttons
```

## Styling
- Purple/pink gradient background (set in index.css)
- Envelope: warm cream/off-white with subtle shadow
- Letter: white/cream with elegant script font for headings
- Buttons: pink gradient with glow, rounded
- All transitions smooth (0.4-0.8s easing)

## Animations
- `float` — idle bobbing (up/down 10px, 3s ease-in-out infinite)
- `glow` — pulsing box-shadow
- `flapPeek` — hover: rotateX(-30deg) on flap
- `flapOpen` — click: rotateX(-180deg) on flap
- `letterSlide` — translateY from inside envelope to above it
- `fadeIn` — letter text opacity 0→1
- `celebration` — heart particles burst outward on "Yes"

## Responsive
- Mobile breakpoint at 480px — smaller envelope, letter, fonts
- Landscape/short screen breakpoint at 600px height — tighter spacing
- Touch-friendly: "tap to open" hint, large tap targets

## Files
- `src/components/Envelope.tsx` — component logic + state (idle → open → answered)
- `src/components/Envelope.css` — all envelope/letter/celebration styles + responsive
- `src/components/FloatingHearts.tsx` — ambient background hearts (CSS-only animation)
- `src/App.tsx` — composes FloatingHearts + Envelope
- `src/index.css` — global theme (purple gradient bg, Poppins font, reset)
- `index.html` — Google Fonts (Great Vibes + Poppins), title "For You", 💌 favicon

## Current Letter Text
- Greeting: "My Dearest Love,"
- Body: placeholder romantic text (user will replace)
- Question: "Will you be my Valentine?"

## Change Log
- Initial build: envelope + letter + floating hearts + yes/no buttons
- Added mobile responsiveness (480px, 600px height breakpoints)
- Added fullscreen letter mode: click letter after opening → envelope fades, letter expands to center of screen with larger text
