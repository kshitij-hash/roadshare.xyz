"use client"

export default function VideoDemoSection() {
  return (
    <section id="demo" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              See RoadShare in Action
            </span>
            <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 w-full"></div>
          </h2>
          <p className="text-gray-300">
            Watch how RoadShare transforms your driving experience and rewards you for your data
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
              <iframe 
                src="https://www.loom.com/embed/1191a7da5d224fefb0628a246116557b?sid=10d9bd97-51cc-42c7-b8bb-52204715b827" 
                frameBorder="0" 
                allowFullScreen 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%',
                  borderRadius: '0.5rem'
                }}
              ></iframe>
            </div>
          </div>

          {/* Video features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { title: "Data Visualization", description: "See your driving metrics in real-time" },
              { title: "Token Rewards", description: "Watch your earnings grow as you drive" },
              { title: "Community Insights", description: "Connect with other drivers in the network" },
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-xl border border-purple-500/20 bg-black/30 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
