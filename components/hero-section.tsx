"use client"

import { useRef, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import dynamic from "next/dynamic"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

// Dynamically import 3D components to avoid SSR issues
const ThreeScene = dynamic(() => import("./three-scene"), { ssr: false })

export default function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-24 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Powered by Solana
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Drive. Share.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 relative">
              Earn.
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Turn your everyday driving into rewards with RoadShare. Share your driving data and earn tokens while
            contributing to the future of transportation.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="#demo" className="inline-flex">
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-black hover:from-white hover:to-white hover:text-purple-500 px-6 py-3 h-auto group relative overflow-hidden inline-flex items-center transition-all duration-300 border border-transparent hover:border-purple-500">
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>

            <Link href="#download" className="inline-flex">
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400 hover:text-white px-6 py-3 h-auto group relative overflow-hidden inline-flex items-center whitespace-nowrap transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
              <span className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5">Download App</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </Button>
            </Link>
          </motion.div>

          {/* <motion.div
            className="flex items-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 p-0.5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                >
                  <div className="w-full h-full rounded-full bg-black" />
                </motion.div>
              ))}
            </div>
            <div className="text-sm text-gray-300">
              <span className="text-white font-bold">2,500+</span> drivers already earning
            </div>
          </motion.div> */}
        </motion.div>

        <motion.div
          className="h-[500px] lg:h-[600px] relative"
          style={{ y, opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-3xl opacity-30"></div>
          <div className="h-full w-full rounded-2xl overflow-hidden border border-purple-500/20 backdrop-blur-sm">
            <Suspense
              fallback={<div className="w-full h-full flex items-center justify-center">Loading 3D model...</div>}
            >
              <ThreeScene />
            </Suspense>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400 animate-pulse"></div>
        <span className="text-sm text-gray-400">Scroll to explore</span>
      </motion.div>
    </section>
  )
}
