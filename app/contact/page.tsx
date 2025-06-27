'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import CalendlyWidget from '@/components/CalendlyWidget';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Contact() {
  const [showCalendly, setShowCalendly] = useState(false);
  const calendlyRef = useRef<HTMLDivElement>(null);

  // Scroll when widget becomes visible
  useEffect(() => {
    if (showCalendly && calendlyRef.current) {
      calendlyRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [showCalendly]);

  return (
    <>
      <PageHeader pageTitle="Choose your path" />

      <section className="flex flex-col items-center px-4 py-20 space-y-12">
        {/* Pill Buttons */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Email Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-black text-white hover:bg-zinc-800 px-6 py-3 text-lg">
                Send Email
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
              <DialogTitle className="text-xl font-semibold mb-4">
                Send me a message
              </DialogTitle>
              <ContactForm />
            </DialogContent>
          </Dialog>

          {/* Toggle Calendly inline */}
          <Button
            className="bg-gray-200 text-gray-900 hover:bg-gray-300 
                       dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700
                       px-6 py-3 text-lg transition-colors"
            onClick={() => setShowCalendly(!showCalendly)}
          >
            {showCalendly ? 'Hide Booking' : 'Book a Session'}
          </Button>
        </div>

      
     <AnimatePresence>
  {showCalendly && (
    <motion.div
      key="calendly"
      ref={calendlyRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-center"
    >
      <CalendlyWidget onClose={() => setShowCalendly(false)} />
    </motion.div>
  )}
</AnimatePresence>
      </section>
    </>
  );
}