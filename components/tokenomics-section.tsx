"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend)

export default function TokenomicsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const chartData = {
    labels: ["Community Rewards", "Development", "Team", "Marketing", "Reserve"],
    datasets: [
      {
        data: [40, 25, 15, 10, 10],
        backgroundColor: [
          "rgba(139, 92, 246, 0.8)", // purple
          "rgba(34, 211, 238, 0.8)", // cyan
          "rgba(167, 139, 250, 0.8)", // purple lighter
          "rgba(103, 232, 249, 0.8)", // cyan lighter
          "rgba(196, 181, 253, 0.8)", // purple lightest
        ],
        borderColor: [
          "rgba(139, 92, 246, 1)",
          "rgba(34, 211, 238, 1)",
          "rgba(167, 139, 250, 1)",
          "rgba(103, 232, 249, 1)",
          "rgba(196, 181, 253, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
  }

  const tokenInfo = [
    { label: "Token Name", value: "RoadShare Token" },
    { label: "Symbol", value: "ROAD" },
    { label: "Blockchain", value: "Solana" },
    { label: "Total Supply", value: "1,000,000,000 ROAD" },
    { label: "Initial Price", value: "$0.01 USD" },
  ]

  const tokenDistribution = [
    { label: "Community Rewards", value: "40%", color: "bg-purple-500" },
    { label: "Development", value: "25%", color: "bg-cyan-400" },
    { label: "Team", value: "15%", color: "bg-purple-400" },
    { label: "Marketing", value: "10%", color: "bg-cyan-300" },
    { label: "Reserve", value: "10%", color: "bg-purple-300" },
  ]

  return (
    <section id="tokenomics" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Tokenomics
            </span>
          </h2>
          <p className="text-gray-300">Understanding the RoadShare token economy and distribution</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-30"></div>
            <div className="relative p-8 rounded-2xl border border-purple-500/30 bg-black/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Token Information</h3>

              <div className="space-y-4 mb-8">
                {tokenInfo.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6">Token Distribution</h3>

              <div className="space-y-4">
                {tokenDistribution.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                    <div className="flex-1 flex justify-between">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="h-[400px] relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-30"></div>
            <div className="relative w-full h-full max-w-md mx-auto">
              <Doughnut data={chartData} options={chartOptions} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  ROAD
                </div>
                <div className="text-sm text-gray-300">Token</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
