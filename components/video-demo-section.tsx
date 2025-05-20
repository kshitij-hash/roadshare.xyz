"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Play } from "lucide-react"

export default function VideoDemoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              See RoadShare in Action
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p className="text-gray-300">
            Watch how RoadShare transforms your driving experience and rewards you for your data
          </p>
        </motion.div>

        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Video thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-cyan-900/40 z-10"></div>
            <div className="absolute inset-0 bg-black">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-70"></div>
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Play className="h-8 w-8 text-black ml-1" />
              </motion.div>
            </div>

            {/* Video title */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent z-10">
              <h3 className="text-2xl font-bold mb-2">RoadShare Platform Demo</h3>
              <p className="text-gray-300">See how easy it is to start earning with your driving data</p>
            </div>

            {/* Animated border */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent z-10"
              animate={{
                borderColor: [
                  "rgba(139, 92, 246, 0)",
                  "rgba(139, 92, 246, 0.5)",
                  "rgba(34, 211, 238, 0.5)",
                  "rgba(139, 92, 246, 0)",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Video duration */}
            <div className="absolute bottom-6 right-6 px-2 py-1 bg-black/60 rounded text-sm z-20">2:45</div>
          </motion.div>

          {/* Video features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { title: "Data Visualization", description: "See your driving metrics in real-time" },
              { title: "Token Rewards", description: "Watch your earnings grow as you drive" },
              { title: "Community Insights", description: "Connect with other drivers in the network" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl border border-purple-500/20 bg-black/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
