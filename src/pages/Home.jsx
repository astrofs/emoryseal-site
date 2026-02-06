import React from 'react'
import { Link } from 'react-router-dom'
import { createPageUrl } from '@/utils'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Fish, Microscope, Users, Calendar, Heart, ExternalLink } from 'lucide-react'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/856973/856973-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/80 to-blue-950/80" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-[1]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-slate-50">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto mb-6 rounded-full bg-white shadow-2xl ring-2 ring-white/40 overflow-hidden flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}seal-logo.png`}
                alt="SEAL logo"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
              SEAL
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-yellow-100/90 font-light mb-6">
              Students Exploring Aquatic Life
            </p>
            
            <p className="text-lg sm:text-xl text-yellow-100/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              A collaborative community dedicated to exploring the wonders of aquatic ecosystems and marine science
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScoyf-hFqWJDYMGLjb8QYiZyhGqWqHaIlUfM1Ts5cRRGPOWXw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all px-8 py-6 text-lg font-semibold">
                  Become a Member
                </Button>
              </a>
              <Link to={createPageUrl('About')}>
                <Button size="lg" className="bg-blue-600 border-2 border-yellow-400 text-white hover:bg-yellow-500 px-8 py-6 text-lg font-semibold">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-4 bg-slate-50">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-blue-700 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold">Our Mission</span>
          </div>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-700 leading-relaxed italic">
            "The mission of SEAL is to provide a 
            <span className="font-semibold text-blue-600"> collaborative </span> 
            and 
            <span className="font-semibold text-blue-500"> intellectually stimulating </span> 
            community for Emory University students interested in all sciences relevant to 
            <span className="font-semibold text-blue-600"> aquatic life </span> 
            and 
            <span className="font-semibold text-blue-600"> aquatic ecosystems</span>."
          </blockquote>
        </motion.div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore, learn, and connect with fellow aquatic enthusiasts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Microscope, title: 'Research', desc: 'Hands-on research opportunities in marine biology and ecology', color: 'cyan' },
              { icon: Fish, title: 'Field Trips', desc: 'Visits to aquariums, marine labs, and coastal ecosystems', color: 'teal' },
              { icon: Users, title: 'Community', desc: 'Connect with like-minded students passionate about aquatic sciences', color: 'blue' },
              { icon: Calendar, title: 'Events', desc: 'Regular meetings, speaker series, and social gatherings', color: 'emerald' },
              { icon: Heart, title: 'Fundraising', desc: 'Raising money for seal sanctuaries and marine conservation', color: 'pink' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br from-${item.color}-50 to-white border border-${item.color}-100 rounded-2xl p-8 h-full hover:shadow-xl hover:shadow-${item.color}-100/50 transition-all duration-300`}>
                  <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-700 to-blue-700">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Dive In?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join SEAL today and become part of Emory's premier aquatic science community
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScoyf-hFqWJDYMGLjb8QYiZyhGqWqHaIlUfM1Ts5cRRGPOWXw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 shadow-xl px-8 py-6 text-lg font-semibold">
                Become a Member
              </Button>
            </a>
            <Link to={createPageUrl('Calendar')}>
              <Button size="lg" className="border-2 border-white bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-lg">
                View Events
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Donation CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-700 to-blue-600">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-6xl mb-6">🦭</div>
          <h2 className="text-4xl font-bold text-white mb-4">Help Us Save the Seals</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Every donation goes directly to seal sanctuary support and marine conservation efforts.
          </p>
          <a 
            href="https://gofund.me/dad15c966" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 shadow-xl px-10 py-6 text-lg font-bold">
              Donate Now
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Our Organization Partners</h3>
            <p className="text-slate-600">Working together for aquatic conservation</p>
          </motion.div>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400">
            <div className="px-6 py-3 bg-white rounded-lg shadow-sm text-slate-600 font-medium">Partner organizations coming soon</div>
          </div>
        </div>
      </section>
    </div>
  )
}
