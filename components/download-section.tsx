"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Apple, ArrowRight, Globe, Smartphone } from "lucide-react"
import Image from "next/image"

export default function DownloadSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="download" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black pointer-events-none"></div>

      <div ref={ref} className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-cyan-900/40"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center p-8 md:p-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  Start Earning
                </span>{" "}
                While You Drive?
              </h2>

              <p className="text-gray-300 text-lg">
                Download the RoadShare app today and join thousands of drivers already earning rewards for their
                everyday commutes.
              </p>

              <div className="space-y-3 w-full max-w-[280px]">
                <div className="relative">
                  <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3 pr-12 border border-gray-700 hover:bg-white/20 transition-colors cursor-not-allowed">
                    <div className="flex items-center">
                      <img 
                        src="/Google_Play_2022_icon.svg" 
                        alt="Get on Google Play" 
                        className="h-6 w-6"
                      />
                      <span className="ml-3 text-white">Google Play</span>
                    </div>
                  </div>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded">
                    SOON
                  </span>
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3 pr-12 border border-gray-700 hover:bg-white/20 transition-colors cursor-not-allowed">
                    <div className="flex items-center">
                      <img 
                        src="/App_Store_(iOS).svg" 
                        alt="Download on the App Store" 
                        className="h-6 w-6"
                      />
                      <span className="ml-3 text-white">App Store</span>
                    </div>
                  </div>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded">
                    SOON
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-sm text-gray-300">
                <Smartphone className="h-4 w-4 flex-shrink-0" />
                <span>Available for iOS and Android devices (Coming Soon)</span>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[500px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[280px] h-[560px] rounded-[40px] border-8 border-black bg-black overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=1080&width=540"
                    alt="RoadShare App"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xl font-bold mb-2">RoadShare</div>
                    <div className="text-sm text-gray-300 mb-4">Drive. Share. Earn.</div>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 text-black hover:opacity-90">
                      Coming Soon...
                      {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
