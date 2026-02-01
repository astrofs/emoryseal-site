"use client"

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createPageUrl } from '@/utils'
import { Menu, X, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', page: 'Home' },
  { name: 'About Us', page: 'About' },
  { name: 'Our Team', page: 'Team' },
  { name: 'Calendar', page: 'Calendar' },
  { name: 'Get Involved', page: 'GetInvolved' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-white shadow-lg ring-1 ring-slate-200 overflow-hidden group-hover:shadow-cyan-200 transition-shadow flex items-center justify-center">
              <img
                src="/seal-logo.png"
                alt="SEAL logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                SEAL
              </span>
              <p className="text-[10px] text-slate-500 -mt-1 tracking-wide">EMORY UNIVERSITY</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="https://instagram.com/sealatemory" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://docs.google.com/forms/d/1dQ1mC3WCq0p5T_e8q2M9Vjm3Bn8LX5ITL6cxzHC-t-I/edit" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-cyan-700 to-teal-700 hover:from-cyan-800 hover:to-teal-800 text-white shadow-lg hover:shadow-cyan-200 transition-all">
                Join SEAL
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className="block px-4 py-3 text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <a 
                  href="https://instagram.com/sealatemory" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-slate-500 hover:text-pink-500"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://docs.google.com/forms/d/1dQ1mC3WCq0p5T_e8q2M9Vjm3Bn8LX5ITL6cxzHC-t-I/edit" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-cyan-700 to-teal-700">
                    Join SEAL
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
