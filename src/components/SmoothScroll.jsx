import { ReactLenis } from 'lenis/react'

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ smoothWheel: true, duration: 1.2 }}>
      {children}
    </ReactLenis>
  )
}
