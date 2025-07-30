"use client";
import { motion } from "framer-motion";

export default function BeforeAfter({ }: { config?: string }) {
  return (
    <section id="before-after" className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-8 py-16 md:py-24 ">
        {/* <ProblemsTitle /> */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.1 }}
            className="rounded-2xl bg-orange-300 shadow-lg ring-2 ring-inset ring-orange-400 transform transition-all"
          >
            <div className="p-8 sm:p-12">
              <div className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-slate-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M232,184a8,8,0,0,1-16,0A88,88,0,0,0,67.47,120.16l26.19,26.18A8,8,0,0,1,88,160H24a8,8,0,0,1-8-8V88a8,8,0,0,1,13.66-5.66l26.48,26.48A104,104,0,0,1,232,184Z"></path>
                </svg>
                <p className="text-base font-semibold text-slate-700">Before</p>
              </div>
              <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                High Costs, Energy Waste, Crop Loss – The Struggles of
                Traditional Farming.
              </h3>
              <ul className="mt-6 space-y-3 text-base text-slate-600 sm:text-lg">
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      className="h-4 w-4 text-slate-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  Unsuitable temperatures for high-value crops in hot climates
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      className="h-4 w-4 text-slate-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  Reliance on energy-intensive ACs and refrigerated trucks
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      className="h-4 w-4 text-slate-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  30-40% crop damage during transportation
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      className="h-4 w-4 text-slate-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  No real-time monitoring or control over growing conditions
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      className="h-4 w-4 text-slate-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  High costs due to energy-intensive methods and transportation
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.1 }}
            className="rounded-2xl bg-green-400 shadow-lg ring-1 ring-inset ring-green-600 transform transition-all"
          >
            <div className="p-8 sm:p-12">
              <div className="inline-flex items-center gap-2">
                <p className="text-base font-semibold text-white">After</p>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48-11.32-48-48A8,8,0,0,0,120,56V96.3A104.15,104.15,0,0,0,24,200a8,8,0,0,0,16,0,88.11,88.11,0,0,1,80-87.63V152a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,181.66,98.34Z"></path>
                </svg>
              </div>
              <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Smart, Sustainable Farming with Real-Time Control and Perfect
                Growth Conditions.
              </h3>
              <ul className="mt-6 space-y-3 text-base text-white sm:text-lg">
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Ideal temperature range (16-24°C) maintained using evaporative
                  cooling
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Energy-efficient clay-based cooling system with minimal power
                  consumption
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Healthy crops with 90% accuracy in growth and quality
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  IoT-enabled system for real-time temperature control and
                  progress tracking
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Affordable prototype with a payback period of just 3 weeks
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
