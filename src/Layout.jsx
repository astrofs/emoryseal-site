import React from 'react';
import { useQuery } from '@tanstack/react-query';
import DonationBar from '@/components/donation-bar';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Layout({ children }) {
  const { data: donationSettings } = useQuery({
    queryKey: ['donationSettings'],
    queryFn: async () => {
      // Mock data - replace with actual API call
      return { 
        goal_amount: 2500, 
        current_amount: 0,
        gofundme_link: 'https://gofund.me/dad15c966'
      };
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <DonationBar 
        currentAmount={donationSettings?.current_amount || 0}
        goalAmount={donationSettings?.goal_amount || 2500}
        gofundmeLink={donationSettings?.gofundme_link}
      />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
