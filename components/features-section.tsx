"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Car, BarChart3, Coins, Shield, Zap, Globe } from "lucide-react"

const features = [
  {
    icon: <Car className="h-6 w-6" />,
    title: "Cars As A Node",
    description:
      "Turn your vehicle into a data node on the Solana blockchain, creating a decentralized network of driving information.",
    color: "from-purple-500 to-purple-700",
    size: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Data Visualization",
    description: "See your driving patterns, efficiency, and earnings through intuitive and interactive dashboards.",
    color: "from-cyan-500 to-cyan-700",
    size: "col-span-1 row-span-1",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Token Rewards",
    description: "Earn RoadShare tokens for every mile driven and data shared, creating a passive income stream.",
    color: "from-purple-600 to-indigo-600",
    size: "col-span-1 row-span-1",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Privacy Control",
    description: "You control what data you share and when. Your privacy is always the priority.",
    color: "from-cyan-400 to-blue-600",
    size: "col-span-1 row-span-1",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Real-time Insights",
    description: "Get instant feedback on your driving habits, vehicle performance, and potential optimizations.",
    color: "from-purple-400 to-pink-600",
    size: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Community Network",
    description: "Join a global community of drivers contributing to a decentralized transportation data ecosystem.",
    color: "from-cyan-500 to-emerald-500",
    size: "col-span-1 md:col-span-3 row-span-1",
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Revolutionary Features
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p className="text-gray-300">
            RoadShare transforms your everyday driving experience into a rewarding journey on the Solana blockchain.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.size} relative overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-300 group`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>
              <div className="absolute inset-0 border border-purple-500/20 rounded-2xl"></div>

              <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold flex-1">{feature.title}</h3>
                </div>

                <p className="text-gray-300 mb-4 flex-1">{feature.description}</p>

                <div className="mt-auto">
                  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${feature.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>

              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
