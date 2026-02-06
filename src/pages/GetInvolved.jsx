import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'
import { CheckCircle2, Users, Mail, Heart, Calendar, Instagram, ExternalLink, Loader2 } from 'lucide-react'

export default function GetInvolved() {
  const urlParams = new URLSearchParams(window.location.search)
  const initialTab = urlParams.get('tab') === 'membership' ? 'membership' : 'membership'
  const [activeTab, setActiveTab] = useState(initialTab)
  
  const [membershipForm, setMembershipForm] = useState({
    name: '',
    email: '',
    major: '',
    year: '',
    interests: '',
    message: '',
  })

  const [newsletterForm, setNewsletterForm] = useState({
    name: '',
    email: '',
  })

  const [submitted, setSubmitted] = useState({ membership: false, newsletter: false })

  const membershipMutation = useMutation({
    mutationFn: (data) => new Promise((resolve) => {
      setTimeout(() => resolve({ ...data, type: 'membership' }), 400)
    }),
    onSuccess: () => {
      setSubmitted(prev => ({ ...prev, membership: true }))
      toast.success('Membership application submitted!')
    },
  })

  const newsletterMutation = useMutation({
    mutationFn: (data) => new Promise((resolve) => {
      setTimeout(() => resolve({ ...data, type: 'newsletter' }), 400)
    }),
    onSuccess: () => {
      setSubmitted(prev => ({ ...prev, newsletter: true }))
      toast.success('Successfully subscribed to newsletter!')
    },
  })

  const handleMembershipSubmit = (e) => {
    e.preventDefault()
    membershipMutation.mutate(membershipForm)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    newsletterMutation.mutate(newsletterForm)
  }

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
            <h1 className="text-5xl font-bold text-white mb-6">Get Involved</h1>
            <p className="text-xl text-yellow-100/90">
              Join our community and make a splash with SEAL
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Ways to Get Involved</h2>
            <p className="text-lg text-slate-600">Multiple opportunities to engage with our community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, title: 'Become a Member', desc: 'Join our community and access all SEAL activities', color: 'cyan' },
              { icon: Heart, title: 'Donate', desc: 'Support our programs and field research initiatives', color: 'pink', link: 'https://gofund.me/dad15c966' },
              { icon: Calendar, title: 'Attend Events', desc: 'Participate in meetings, workshops, and trips', color: 'emerald' },
              { icon: Instagram, title: 'Follow Us', desc: 'Stay connected through social media', color: 'violet', link: 'https://instagram.com/sealatemory' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-slate-100">
                  <CardHeader className="text-center">
                    <div className={`w-14 h-14 bg-${item.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                  {item.link && (
                    <CardContent className="pt-0">
                      <a 
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`text-${item.color}-600 text-sm font-medium flex items-center justify-center gap-1 hover:underline`}
                      >
                        Learn More <ExternalLink className="w-3 h-3" />
                      </a>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="membership" className="text-base py-3">
                <Users className="w-4 h-4 mr-2" />
                Join the Club
              </TabsTrigger>
              <TabsTrigger value="newsletter" className="text-base py-3">
                <Mail className="w-4 h-4 mr-2" />
                Newsletter
              </TabsTrigger>
            </TabsList>

            <TabsContent value="membership">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Membership Application</CardTitle>
                    <CardDescription>
                      Fill out the form below to join SEAL and become part of our aquatic science community
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted.membership ? (
                      <div className="text-center py-12">
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Submitted!</h3>
                        <p className="text-slate-600">
                          Thank you for your interest in SEAL. We'll be in touch soon!
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleMembershipSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              value={membershipForm.name}
                              onChange={(e) => setMembershipForm(prev => ({ ...prev, name: e.target.value }))}
                              required
                              placeholder="Your full name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Emory Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={membershipForm.email}
                              onChange={(e) => setMembershipForm(prev => ({ ...prev, email: e.target.value }))}
                              required
                              placeholder="yourname@emory.edu"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="major">Major</Label>
                            <Input
                              id="major"
                              value={membershipForm.major}
                              onChange={(e) => setMembershipForm(prev => ({ ...prev, major: e.target.value }))}
                              placeholder="e.g., Biology, Environmental Science"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="year">Year</Label>
                            <Select
                              value={membershipForm.year}
                              onValueChange={(value) => setMembershipForm(prev => ({ ...prev, year: value }))}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select year" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Freshman">Freshman</SelectItem>
                                <SelectItem value="Sophomore">Sophomore</SelectItem>
                                <SelectItem value="Junior">Junior</SelectItem>
                                <SelectItem value="Senior">Senior</SelectItem>
                                <SelectItem value="Graduate">Graduate</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="interests">Areas of Interest</Label>
                          <Input
                            id="interests"
                            value={membershipForm.interests}
                            onChange={(e) => setMembershipForm(prev => ({ ...prev, interests: e.target.value }))}
                            placeholder="e.g., Marine Biology, Conservation, Research"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Why do you want to join SEAL?</Label>
                          <Textarea
                            id="message"
                            value={membershipForm.message}
                            onChange={(e) => setMembershipForm(prev => ({ ...prev, message: e.target.value }))}
                            placeholder="Tell us about your interest in aquatic science..."
                            rows={4}
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                          disabled={membershipMutation.isPending}
                        >
                          {membershipMutation.isPending ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            'Submit Application'
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="newsletter">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Subscribe to Our Newsletter</CardTitle>
                    <CardDescription>
                      Get updates about SEAL events, research opportunities, and aquatic science news
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted.newsletter ? (
                      <div className="text-center py-12">
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Subscribed!</h3>
                        <p className="text-slate-600">
                          You'll receive our newsletter at your email address.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleNewsletterSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="newsletter-name">Name *</Label>
                          <Input
                            id="newsletter-name"
                            value={newsletterForm.name}
                            onChange={(e) => setNewsletterForm(prev => ({ ...prev, name: e.target.value }))}
                            required
                            placeholder="Your name"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="newsletter-email">Email Address *</Label>
                          <Input
                            id="newsletter-email"
                            type="email"
                            value={newsletterForm.email}
                            onChange={(e) => setNewsletterForm(prev => ({ ...prev, email: e.target.value }))}
                            required
                            placeholder="yourname@email.com"
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                          disabled={newsletterMutation.isPending}
                        >
                          {newsletterMutation.isPending ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Subscribing...
                            </>
                          ) : (
                            'Subscribe to Newsletter'
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-32 px-4 bg-gradient-to-br from-blue-700 to-blue-700">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-8xl mb-8">🦭</div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">Raise Money to Save the Seal</h2>
          <p className="text-2xl text-yellow-100 mb-4 font-medium">
            Raising money for a seal sanctuary
          </p>
          <p className="text-xl text-yellow-200/80 mb-10 max-w-3xl mx-auto">
            Your donation directly supports seal conservation efforts, habitat protection, and rehabilitation programs. Every contribution helps save these amazing marine animals!
          </p>
          <a 
            href="https://gofund.me/dad15c966" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 shadow-2xl px-12 py-8 text-xl font-bold">
              Donate on GoFundMe
              <ExternalLink className="w-6 h-6 ml-3" />
            </Button>
          </a>
        </motion.div>
      </section>
    </div>
  )
}
