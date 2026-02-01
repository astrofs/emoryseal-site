"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DonationBar({ currentAmount = 0, goalAmount = 2500, gofundmeLink }) {
  const percentage = Math.min((currentAmount / goalAmount) * 100, 100)
  
  return (
    <div className="bg-gradient-to-r from-cyan-700 to-teal-700 text-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1 w-full sm:w-auto">
          <Heart className="w-6 h-6 text-pink-300 flex-shrink-0" />
          <div className="flex-1 max-w-lg">
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-semibold text-base">Raise Money to Save the Seal 🦭</span>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-cyan-100">Current: ${currentAmount.toLocaleString()}</span>
              <span className="text-cyan-100 font-medium">Goal: ${goalAmount.toLocaleString()}</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
        <a 
          href={gofundmeLink || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button 
            size="default" 
            className="bg-white text-cyan-800 hover:bg-cyan-50 font-semibold shadow-lg px-6"
          >
            Donate Now
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </div>
    </div>
  )
}
