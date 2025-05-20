"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TokenomicsSection from "@/components/tokenomics-section"
import VideoDemoSection from "@/components/video-demo-section"
import DownloadSection from "@/components/download-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import dynamic from "next/dynamic"

// Dynamically import the CustomCursor component with no SSR
const CustomCursor = dynamic(() => import("@/components/custom-cursor"), { ssr: false })

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none z-[-1]"></div>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div
          className="absolute top-1/3 left-1/5 w-[500px] h-[500px] rounded-full bg-purple-900/10 animate-pulse"
          style={{ animationDuration: "15s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-cyan-900/10 animate-pulse"
          style={{ animationDuration: "20s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-900/5 animate-pulse"
          style={{ animationDuration: "18s", animationDelay: "1s" }}
        ></div>
      </div>

      {mounted && <CustomCursor />}
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <VideoDemoSection />
        <HowItWorksSection />
        <TokenomicsSection />
        <DownloadSection />
      </main>

      <Footer />
    </div>
  )
}
