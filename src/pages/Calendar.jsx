import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { format, parseISO, isAfter, isBefore, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay } from 'date-fns'
import { Calendar as CalendarIcon, MapPin, Clock, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

const eventTypeColors = {
  Meeting: 'bg-blue-100 text-blue-700 border-blue-200',
  'Field Trip': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Workshop: 'bg-violet-100 text-violet-700 border-violet-200',
  Social: 'bg-pink-100 text-pink-700 border-pink-200',
  Volunteer: 'bg-amber-100 text-amber-700 border-amber-200',
  Speaker: 'bg-cyan-100 text-cyan-700 border-cyan-200',
  Other: 'bg-slate-100 text-slate-700 border-slate-200',
}

const sampleEvents = [
  {
    id: 'evt-1',
    title: 'Welcome Meeting',
    date: '2026-02-05',
    event_type: 'Meeting',
    time: '6:30 PM',
    location: 'Atwood 260',
    description: 'Kick off the semester with introductions and plans for upcoming events.',
  },
  {
    id: 'evt-2',
    title: 'Aquarium Field Trip',
    date: '2026-02-15',
    event_type: 'Field Trip',
    time: '9:00 AM',
    location: 'Georgia Aquarium',
    description: 'Explore marine exhibits and behind-the-scenes conservation work.',
    registration_link: 'https://docs.google.com/forms/d/1dQ1mC3WCq0p5T_e8q2M9Vjm3Bn8LX5ITL6cxzHC-t-I/edit',
  },
  {
    id: 'evt-3',
    title: 'Marine Biology Workshop',
    date: '2026-03-01',
    event_type: 'Workshop',
    time: '4:00 PM',
    location: 'MSC Multipurpose Room',
    description: 'Hands-on microscopy and specimen lab session.',
  },
  {
    id: 'evt-4',
    title: 'Community Beach Cleanup',
    date: '2026-03-20',
    event_type: 'Volunteer',
    time: '10:00 AM',
    location: 'Tybee Island',
    description: 'Help protect marine habitats with a shoreline cleanup.',
  },
  {
    id: 'evt-5',
    title: 'Guest Speaker: Seal Conservation',
    date: '2026-04-03',
    event_type: 'Speaker',
    time: '7:00 PM',
    location: 'White Hall 205',
    description: 'Learn about seal rescue and rehabilitation efforts.',
  },
]

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  
  const { data: events = [], isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => sampleEvents,
  })

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const upcomingEvents = events.filter(event => 
    isAfter(parseISO(event.date), new Date()) || isSameDay(parseISO(event.date), new Date())
  ).slice(0, 5)

  const getEventsForDay = (day) => {
    return events.filter(event => isSameDay(parseISO(event.date), day))
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">Events Calendar</h1>
            <p className="text-xl text-cyan-100/90">
              Stay updated with our meetings, trips, and activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm p-6"
              >
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {format(currentMonth, 'MMMM yyyy')}
                  </h2>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1))}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1))}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Weekday Headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm font-medium text-slate-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Empty cells for days before month start */}
                  {Array.from({ length: monthStart.getDay() }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square" />
                  ))}
                  
                  {days.map(day => {
                    const dayEvents = getEventsForDay(day)
                    const hasEvents = dayEvents.length > 0
                    
                    return (
                      <div
                        key={day.toISOString()}
                        className={`aspect-square p-1 rounded-lg transition-colors ${
                          isToday(day) 
                            ? 'bg-cyan-500 text-white' 
                            : hasEvents 
                              ? 'bg-cyan-50 hover:bg-cyan-100' 
                              : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="h-full flex flex-col">
                          <span className={`text-sm font-medium ${isToday(day) ? '' : 'text-slate-700'}`}>
                            {format(day, 'd')}
                          </span>
                          {hasEvents && (
                            <div className="flex-1 flex flex-col justify-end gap-0.5">
                              {dayEvents.slice(0, 2).map((event, i) => (
                                <div 
                                  key={event.id}
                                  className={`text-[10px] truncate px-1 py-0.5 rounded ${
                                    isToday(day) ? 'bg-white/20' : 'bg-cyan-200'
                                  }`}
                                  title={event.title}
                                >
                                  {event.title}
                                </div>
                              ))}
                              {dayEvents.length > 2 && (
                                <span className={`text-[10px] ${isToday(day) ? 'text-white/70' : 'text-cyan-600'}`}>
                                  +{dayEvents.length - 2} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>

            {/* Upcoming Events */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-sm p-6"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-cyan-600" />
                  Upcoming Events
                </h3>

                {isLoading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="space-y-2">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    ))}
                  </div>
                ) : upcomingEvents.length === 0 ? (
                  <p className="text-slate-500 text-center py-8">
                    No upcoming events scheduled yet.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {upcomingEvents.map(event => (
                      <div 
                        key={event.id}
                        className="border border-slate-100 rounded-xl p-4 hover:border-cyan-200 hover:bg-cyan-50/30 transition-all"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-semibold text-slate-900">{event.title}</h4>
                          {event.event_type && (
                            <Badge variant="outline" className={eventTypeColors[event.event_type]}>
                              {event.event_type}
                            </Badge>
                          )}
                        </div>
                        
                        <div className="space-y-1 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="w-4 h-4 text-slate-400" />
                            {format(parseISO(event.date), 'EEEE, MMMM d, yyyy')}
                          </div>
                          {event.time && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-slate-400" />
                              {event.time}
                            </div>
                          )}
                          {event.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-slate-400" />
                              {event.location}
                            </div>
                          )}
                        </div>
                        
                        {event.description && (
                          <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                            {event.description}
                          </p>
                        )}
                        
                        {event.registration_link && (
                          <a 
                            href={event.registration_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-cyan-600 hover:text-cyan-700 mt-2"
                          >
                            Register <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
