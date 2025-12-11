'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import CalendlyWidget from '@/components/CalendlyWidget';


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
      <section className="flex flex-col items-center px-4 py-20 space-y-12">
        {/* Pill Buttons */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Toggle Calendly inline */}
          <Button onClick={() => setShowCalendly(!showCalendly)}>
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