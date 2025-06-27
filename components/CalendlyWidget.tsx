'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react'; // or use `react-icons` if preferred

declare global {
  interface Window {
    Calendly?: unknown;
  }
}

interface CalendlyAPI {
  initInlineWidget(options: {
    url: string;
    parentElement: HTMLElement;
  }): void;
}

interface CalendlyWidgetProps {
  onClose: () => void;
}

export default function CalendlyWidget({ onClose }: CalendlyWidgetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    if (widgetLoaded || !ref.current) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
script.onload = () => {
  const calendly = window.Calendly as CalendlyAPI;

  if (calendly && ref.current) {
    calendly.initInlineWidget({
      url: 'https://calendly.com/mxolisi-b-masuku/30min',
      parentElement: ref.current,
    });
    setWidgetLoaded(true);
  }
};

    document.body.appendChild(script);
  }, [widgetLoaded]);

  return (
    <section className="w-full flex justify-center py-12 px-4 relative">
      <div className="w-full max-w-4xl relative">
        {/* Close button top-right */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-10 bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Close booking widget"
        >
          <X className="w-5 h-5 text-gray-800 dark:text-gray-200" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Book a Call</h2>

        <div
          ref={ref}
          className="h-[700px] w-full bg-white rounded-xl shadow overflow-hidden"
        />
      </div>
    </section>
  );
}