import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { Linkedin, User, Mail } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

export default function Team() {
  const { data: members = [], isLoading } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: async () => ([
      {
        id: 'tm-1',
        name: 'Yilin Qiao',
        role: 'Supreme Leader',
        year: 'Freshman',
        email: 'yqiao49@emory.edu',
      },
      {
        id: 'tm-2',
        name: 'Niccolo Balestriere',
        role: 'VP',
        year: 'Freshman',
        email: 'njbales@emory.edu',
      },
      {
        id: 'tm-3',
        name: 'Hira Malik',
        role: 'Events Chair',
        year: 'Freshman',
        email: 'hira.malik@emory.edu',
      },
      {
        id: 'tm-4',
        name: 'Diya Choksi',
        role: 'Deputy treasurer',
        year: 'Freshman',
        email: 'dkchoks@emory.edu',
      },
      {
        id: 'tm-5',
        name: 'Gloria Nip',
        role: 'Communications',
        year: 'Freshman',
        email: 'gloria.nip@emory.edu',
      },
      {
        id: 'tm-6',
        name: 'Bowen Lan',
        role: 'Communications',
        year: 'Freshman',
        email: 'bowen.lan@emory.edu',
      },
      {
        id: 'tm-7',
        name: 'Alex Strofs',
        role: 'Treasurer',
        year: 'Freshman',
        email: 'alex.strofs@emory.edu',
      },
      {
        id: 'tm-8',
        name: 'Aeris Asantewa',
        role: 'Communications',
        year: 'Freshman',
        email: 'amasant@emory.edu',
      },
    ]),
  })

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">Our Team</h1>
            <p className="text-xl text-yellow-100/90">
              Meet the passionate students leading SEAL
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-8">
                  <Skeleton className="w-32 h-32 rounded-full mx-auto mb-6" />
                  <Skeleton className="h-6 w-40 mx-auto mb-2" />
                  <Skeleton className="h-4 w-32 mx-auto mb-4" />
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
            </div>
          ) : members.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Team Coming Soon</h3>
              <p className="text-slate-600">
                Our leadership team will be announced shortly. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="relative mb-6">
                    {member.image_url ? (
                      <img 
                        src={member.image_url} 
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto ring-4 ring-yellow-100 group-hover:ring-yellow-200 transition-all"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-500 to-blue-500 flex items-center justify-center mx-auto">
                        <span className="text-4xl font-bold text-white">
                          {member.name?.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  
                  {(member.major || member.year) && (
                    <p className="text-sm text-slate-500 mb-4">
                      {member.major}{member.major && member.year ? ' • ' : ''}{member.year}
                    </p>
                  )}
                  
                  {member.bio && (
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-center gap-4">
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </a>
                    )}
                    {member.linkedin_url && (
                      <a 
                        href={member.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
