import React from 'react'
import { Link } from 'react-router-dom'
import { createPageUrl } from '@/utils'
import { Instagram, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white ring-1 ring-slate-200 overflow-hidden flex items-center justify-center">
                <img
                  src="/seal-logo.png"
                  alt="SEAL logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold">SEAL</span>
                <p className="text-xs text-slate-400">Students Exploring Aquatic Life</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Providing a collaborative and intellectually stimulating community for Emory University students interested in aquatic life and ecosystems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cyan-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Team', 'Calendar', 'GetInvolved'].map((page) => (
                <li key={page}>
                  <Link 
                    to={createPageUrl(page)} 
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {page === 'GetInvolved' ? 'Get Involved' : page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-cyan-400 mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://instagram.com/sealatemory" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @sealatemory
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4" />
                sealatemory@gmail.com
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4" />
                Emory University, Atlanta
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SEAL at Emory University. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/sealatemory" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 hover:bg-pink-600 rounded-lg transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
