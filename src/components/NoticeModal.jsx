import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Plus, Minus, Close } from './Icons.jsx'

const MIN_ZOOM = 1
const MAX_ZOOM = 5
const BUTTON_STEP = 1.4
const WHEEL_STEP = 0.0015

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

const toolBtn =
  'grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white/10'

/**
 * Full-screen notice viewer. Zoom (buttons, wheel, pinch) and pan (drag) use a CSS transform only,
 * so the image is never stretched. Mount it with a `key` per notice so zoom/pan reset on every open.
 */
export default function NoticeModal({ notice, onClose }) {
  const [view, setView] = useState({ scale: 1, x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const stageRef = useRef(null)
  const imgRef = useRef(null)
  const closeRef = useRef(null)
  const viewRef = useRef(view)
  const pointers = useRef(new Map())
  const gesture = useRef({ moved: false, pinchDist: 0, onBackdrop: false })

  const commit = useCallback((next) => {
    viewRef.current = next
    setView(next)
  }, [])

  // Keep the image inside reachable bounds: no panning when it is smaller than the stage.
  const limit = useCallback((scale, x, y) => {
    const stage = stageRef.current
    const img = imgRef.current
    if (!stage || !img) return { scale, x: 0, y: 0 }
    const maxX = Math.max(0, (img.offsetWidth * scale - stage.clientWidth) / 2)
    const maxY = Math.max(0, (img.offsetHeight * scale - stage.clientHeight) / 2)
    return { scale, x: clamp(x, -maxX, maxX), y: clamp(y, -maxY, maxY) }
  }, [])

  // Zoom so the point under (clientX, clientY) stays put; defaults to the stage centre.
  const zoomTo = useCallback((nextScale, clientX, clientY) => {
    const stage = stageRef.current
    if (!stage) return
    const { scale, x, y } = viewRef.current
    const s = clamp(nextScale, MIN_ZOOM, MAX_ZOOM)
    if (s === scale) return
    if (s === MIN_ZOOM) return commit({ scale: 1, x: 0, y: 0 })
    const rect = stage.getBoundingClientRect()
    const cx = (clientX ?? rect.left + rect.width / 2) - (rect.left + rect.width / 2)
    const cy = (clientY ?? rect.top + rect.height / 2) - (rect.top + rect.height / 2)
    const k = s / scale
    commit(limit(s, cx - (cx - x) * k, cy - (cy - y) * k))
  }, [commit, limit])

  const reset = useCallback(() => commit({ scale: 1, x: 0, y: 0 }), [commit])

  // Escape + background scroll lock + focus handling.
  useEffect(() => {
    const opener = document.activeElement
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === '+' || e.key === '=') zoomTo(viewRef.current.scale * BUTTON_STEP)
      else if (e.key === '-') zoomTo(viewRef.current.scale / BUTTON_STEP)
      else if (e.key === '0') reset()
    }
    const html = document.documentElement
    const prev = { body: document.body.style.overflow, html: html.style.overflow }
    document.body.style.overflow = 'hidden'
    html.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev.body
      html.style.overflow = prev.html
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [onClose, zoomTo, reset])

  // Wheel must be a non-passive native listener so we can stop the page from scrolling.
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const onWheel = (e) => {
      e.preventDefault()
      zoomTo(viewRef.current.scale * Math.exp(-e.deltaY * WHEEL_STEP * (e.deltaMode === 1 ? 16 : 1)), e.clientX, e.clientY)
    }
    stage.addEventListener('wheel', onWheel, { passive: false })
    return () => stage.removeEventListener('wheel', onWheel)
  }, [zoomTo])

  // Keep pan within bounds if the window is resized/rotated.
  useEffect(() => {
    const onResize = () => {
      const { scale, x, y } = viewRef.current
      commit(limit(scale, x, y))
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [commit, limit])

  const onPointerDown = (e) => {
    // Capture retargets later events to the stage, so remember now whether the press began on empty backdrop.
    if (pointers.current.size === 0) gesture.current.onBackdrop = e.target === stageRef.current
    stageRef.current.setPointerCapture?.(e.pointerId)
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    gesture.current.moved = false
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      gesture.current.pinchDist = Math.hypot(a.x - b.x, a.y - b.y)
    }
    if (viewRef.current.scale > 1) setDragging(true)
  }

  const onPointerMove = (e) => {
    const prev = pointers.current.get(e.pointerId)
    if (!prev) return
    const cur = { x: e.clientX, y: e.clientY }
    pointers.current.set(e.pointerId, cur)

    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      const dist = Math.hypot(a.x - b.x, a.y - b.y)
      if (gesture.current.pinchDist) {
        zoomTo(viewRef.current.scale * (dist / gesture.current.pinchDist), (a.x + b.x) / 2, (a.y + b.y) / 2)
      }
      gesture.current.pinchDist = dist
      gesture.current.moved = true
      return
    }

    const dx = cur.x - prev.x
    const dy = cur.y - prev.y
    if (Math.abs(dx) + Math.abs(dy) > 0) gesture.current.moved = true
    const { scale, x, y } = viewRef.current
    if (scale > 1) commit(limit(scale, x + dx, y + dy))
  }

  const onPointerUp = (e) => {
    const wasBackdropTap =
      e.type === 'pointerup' && pointers.current.size === 1 && !gesture.current.moved && gesture.current.onBackdrop
    pointers.current.delete(e.pointerId)
    gesture.current.pinchDist = 0
    setDragging(false)
    // Only a plain click on the empty backdrop closes; clicks on the image or drags never do.
    if (wasBackdropTap) onClose()
  }

  const { scale, x, y } = view
  const zoomable = scale > 1

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={notice.heading}
      className="fixed inset-0 z-[100] flex flex-col bg-dark/90 backdrop-blur-sm"
    >
      {/* top bar */}
      <div className="relative z-10 flex items-center justify-between gap-4 px-5 py-4 text-white tablet:px-[30px]">
        <div className="min-w-0">
          <p className="t-highlight text-body-dark">{notice.date}</p>
          <h3 className="t-h6 truncate">{notice.heading}</h3>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close notice"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-dark transition-colors hover:bg-primary hover:text-white"
        >
          <Close />
        </button>
      </div>

      {/* image stage */}
      <div
        ref={stageRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={(e) => e.target === imgRef.current && (scale > 1 ? reset() : zoomTo(2.5, e.clientX, e.clientY))}
        className={`relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-3 tablet:px-[30px] ${
          zoomable ? (dragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
        }`}
        style={{ touchAction: 'none' }}
      >
        <img
          ref={imgRef}
          src={notice.image}
          alt={notice.heading}
          draggable={false}
          className="max-h-full max-w-full select-none object-contain will-change-transform"
          style={{
            transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
            transition: dragging ? 'none' : 'transform 120ms ease-out',
          }}
        />
      </div>

      {/* zoom controls */}
      <div className="relative z-10 flex items-center justify-center gap-3 px-5 py-4 text-white">
        <button type="button" className={toolBtn} onClick={() => zoomTo(scale / BUTTON_STEP)} disabled={scale <= MIN_ZOOM} aria-label="Zoom out">
          <Minus />
        </button>
        <button
          type="button"
          onClick={reset}
          disabled={scale === 1 && x === 0 && y === 0}
          aria-label="Reset zoom"
          className="t-highlight h-11 min-w-[76px] rounded-full bg-white/10 px-4 transition-colors hover:bg-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white/10"
        >
          {Math.round(scale * 100)}%
          <span className="sr-only"> reset</span>
        </button>
        <button type="button" className={toolBtn} onClick={() => zoomTo(scale * BUTTON_STEP)} disabled={scale >= MAX_ZOOM} aria-label="Zoom in">
          <Plus />
        </button>
      </div>
    </div>,
    document.body,
  )
}
