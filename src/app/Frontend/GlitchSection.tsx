"use client";
import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import Bottomcard from './Bottomcard';

const DescriptionComponent = () => {
  return (
    <Card className=" h-full bg-[#192734] border-none">
      <CardHeader className="w-full">
        <CardTitle className="text-3xl text-white text-left">Sankan AI</CardTitle>
        <CardDescription className="text-lg text-white text-left">
        Spark is a revolutionary learning platform that transforms education into an adventure, blending critical thinking, coding, financial wisdom, communication skills, and adaptability through gamified, interactive challenges that make learning irresistibly fun for the next generation of innovators.
        </CardDescription>
        <Button  className="px-px w-[14vh] bg-[#6d28d9] border-none text-white">
              Join Waitlist
        </Button>
      </CardHeader>
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
        <div className="order-1 md:order-2  lg:w-[430px]">
          <div className="p-3 bg-white rounded-md">
            <Bottomcard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlitchSection;