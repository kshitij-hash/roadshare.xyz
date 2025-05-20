"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const handleLinkHoverEvents = () => {
      const elements = document.querySelectorAll("a, button, [role=button]")
      if (elements.length > 0) {
        elements.forEach((el) => {
          el.addEventListener("mouseenter", () => setLinkHovered(true))
          el.addEventListener("mouseleave", () => setLinkHovered(false))
        })
      }
    }

    // Only add event listeners on the client
    if (typeof window !== "undefined") {
      addEventListeners()
      // Add a small delay to ensure DOM is fully loaded
      setTimeout(handleLinkHoverEvents, 500)
    }

    return () => {
      if (typeof window !== "undefined") {
        removeEventListeners()
      }
    }
  }, [])

  // Don't render on server or if not mounted
  if (!mounted || typeof window === "undefined") {
    return null
  }

  return (
    <div className="cursor-container">
      <motion.div
        className={`cursor-dot ${hidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: clicked ? 0.5 : linkHovered ? 1.5 : 1,
          borderColor: linkHovered ? "#22d3ee" : "#8b5cf6",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
        className={`cursor-ring ${hidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          borderColor: linkHovered ? "#22d3ee" : "#8b5cf6",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      {/* Cursor trail */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="cursor-trail"
          style={{
            left: position.x,
            top: position.y,
          }}
          animate={{
            scale: (1 - i * 0.1) * (clicked ? 0.5 : 1),
            opacity: 0.2 - i * 0.04,
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.05,
          }}
        />
      ))}

      <style jsx global>{`
        body {
          cursor: none;
        }
        
        .cursor-container {
          position: fixed;
          z-index: 9999;
          pointer-events: none;
        }
        
        .cursor-dot {
          position: fixed;
          width: 8px;
          height: 8px;
          background: #8b5cf6;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease-in-out;
        }
        
        .cursor-ring {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 2px solid #8b5cf6;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease-in-out;
        }
        
        .cursor-trail {
          position: fixed;
          width: 8px;
          height: 8px;
          background: #8b5cf6;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  )
}
