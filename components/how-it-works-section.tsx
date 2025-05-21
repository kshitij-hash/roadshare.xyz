"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Download, Smartphone, Car, BarChart3, Coins } from "lucide-react"

const steps = [
  {
    icon: <Download className="h-6 w-6" />,
    title: "Download the App",
    description: "Get started by downloading the RoadShare app from the App Store or Google Play.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Connect Your Wallet",
    description: "Link your Solana wallet to receive token rewards directly.",
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "Drive & Share Data",
    description: "The app runs in the background, collecting driving data as you travel.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "View Your Impact",
    description: "See how your driving data contributes to the network and improves transportation.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Earn Rewards",
    description: "Receive RoadShare tokens based on your contribution to the network.",
  },
]

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="how-it-works" className="py-20 relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              RoadShare
            </span>{" "}
            Works
          </h2>
          <p className="text-gray-300">A simple process to start earning rewards for your everyday driving</p>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row gap-8 items-center mb-16 last:mb-0 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="md:w-1/2 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative p-6 rounded-2xl border border-purple-500/30 bg-black/50 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center text-black font-bold">
                  {index + 1}
                </div>
              </div>

              <div className="md:w-1/2 md:opacity-0"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
