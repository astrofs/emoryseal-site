import React from 'react'
import { Link } from 'react-router-dom'
import { createPageUrl } from '@/utils'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Waves, Target, Eye, Heart, Leaf, BookOpen, Globe } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">About SEAL</h1>
            <p className="text-xl text-yellow-100/90 leading-relaxed">
              Students Exploring Aquatic Life at Emory University
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white border border-yellow-100 rounded-3xl p-10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                The mission of SEAL is to provide a collaborative and intellectually stimulating community for Emory University students interested in all sciences relevant to aquatic life and aquatic ecosystems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white border border-teal-100 rounded-3xl p-10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We envision a community where students from all backgrounds can come together to learn, explore, and contribute to the understanding and preservation of aquatic environments worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Stand For</h2>
            <p className="text-lg text-slate-600">Our core values guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Passion', desc: 'Deep love for aquatic sciences and marine life', gradient: 'from-rose-500 to-pink-600' },
              { icon: BookOpen, title: 'Education', desc: 'Commitment to learning and sharing knowledge', gradient: 'from-yellow-500 to-blue-600' },
              { icon: Leaf, title: 'Conservation', desc: 'Dedication to protecting aquatic ecosystems', gradient: 'from-emerald-500 to-green-600' },
              { icon: Globe, title: 'Community', desc: 'Building connections that last beyond graduation', gradient: 'from-violet-500 to-purple-600' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Story</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="text-lg leading-relaxed mb-6">
                SEAL (Students Exploring Aquatic Life) was founded by a group of passionate Emory students who shared a common love for the ocean and aquatic ecosystems. What started as informal discussions about marine biology evolved into a vibrant community dedicated to exploration and education.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Today, SEAL brings together students from diverse academic backgrounds—from biology and environmental science to policy and economics—united by their interest in understanding and protecting our planet's aquatic environments.
              </p>
              <p className="text-lg leading-relaxed">
                Through field trips, research opportunities, guest speakers, and community events, we provide members with hands-on experiences and networking opportunities that extend far beyond the classroom.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-700 to-blue-700">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-xl text-yellow-100 mb-8">
            Become part of Emory's premier aquatic science organization
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScoyf-hFqWJDYMGLjb8QYiZyhGqWqHaIlUfM1Ts5cRRGPOWXw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 shadow-xl px-8 py-6 text-lg font-semibold">
              Get Involved
            </Button>
          </a>
        </motion.div>
      </section>
    </div>
  )
}
