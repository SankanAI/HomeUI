"use client";
import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

// Sample images (replace with your actual images)
const glitchImages = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMh9LdlbDrWsWGfokCScIV4K5KYg8hb95qw&s", name: "Cosmic Drift" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMh9LdlbDrWsWGfokCScIV4K5KYg8hb95qw&s", name: "Digital Wave" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMh9LdlbDrWsWGfokCScIV4K5KYg8hb95qw&s", name: "Pixel Horizon" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMh9LdlbDrWsWGfokCScIV4K5KYg8hb95qw&s", name: "Quantum Pulse" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMh9LdlbDrWsWGfokCScIV4K5KYg8hb95qw&s", name: "Neural Network" }
]

const GlitchImageComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isGlitched, setIsGlitched] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % glitchImages.length
      )
      // Trigger glitch effect
      setIsGlitched(true)
      setTimeout(() => setIsGlitched(false), 200)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const currentImage = glitchImages[currentImageIndex]

  return (
    <Card className="w-full h-full flex items-center justify-center">
      <CardContent className="relative w-full h-[400px] overflow-hidden">
        <div 
          className={`relative w-full h-full transition-all duration-200 
            ${isGlitched ? 'scale-[1.02] rotate-1 translate-x-1' : ''}`}
        >
          <Image 
            src={currentImage.src} 
            alt={currentImage.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded">
          {isGlitched ? 'G L I T C H E D' : currentImage.name}
        </div>
      </CardContent>
    </Card>
  )
}

const DescriptionComponent = () => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Glitch Experience</CardTitle>
        <CardDescription>
          Dive into a dynamic visual journey where technology meets art. 
          Our innovative glitch effect transforms ordinary images into 
          extraordinary digital landscapes, creating a mesmerizing 
          visual narrative that challenges perception.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Each image represents a unique moment frozen in digital time, 
          disrupted and reconstructed through cutting-edge visual 
          manipulation techniques. Experience the beauty of controlled 
          digital chaos.
        </p>
      </CardContent>
    </Card>
  )
}

const GlitchSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div className="order-2 md:order-1">
          <DescriptionComponent />
        </div>
        <div className="order-1 md:order-2">
          <GlitchImageComponent />
        </div>
      </div>
    </div>
  )
}

export default GlitchSection;