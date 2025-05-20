"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <img src="/roadshare.png" alt="RoadShare Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            RoadShare
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#tokenomics" className="text-sm text-gray-300 hover:text-white transition-colors">
            Tokenomics
          </Link>
          <Link href="#download" className="text-sm text-gray-300 hover:text-white transition-colors">
            Download
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            className="border-purple-500 text-purple-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400 hover:text-white px-4 py-2 transition-all duration-300"
          >
            Login
          </Button>
          <Button 
            className="bg-gradient-to-r from-purple-500 to-cyan-400 text-black hover:from-white hover:to-white hover:text-purple-500 px-4 py-2 transition-all duration-300 border border-transparent hover:border-purple-500"
          >
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-300 hover:text-white py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#tokenomics"
              className="text-gray-300 hover:text-white py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tokenomics
            </Link>
            <Link
              href="#download"
              className="text-gray-300 hover:text-white py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-800">
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 w-full">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-black hover:opacity-90 w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
