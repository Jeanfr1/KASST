'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
};

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 bg-dark relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#9333ea15_1px,transparent_1px),linear-gradient(to_bottom,#9333ea15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              The Problem
            </span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            Current online video platforms face significant challenges that affect creators, viewers, and advertisers alike.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Problem 1: Creators */}
          <motion.div
            custom={1}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card backdrop-blur-sm border border-primary/20 overflow-hidden"
          >
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <div className="relative w-40 h-40">
                    <Image
                      src="/images/creator-problem.svg"
                      alt="Creator Problem"
                      width={160}
                      height={160}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 md:pl-6">
                  <h3 className="text-2xl font-bold text-light mb-2">Creator Challenges</h3>
                  <p className="text-light/70">
                    Creators face limited benefits, inconsistent monetization models, and lack of transparency.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Unpredictable algorithm changes affect visibility',
                  'Limited revenue sharing and high platform fees',
                  'Lack of ownership over content and audience',
                  'No transparency in monetization calculations',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-light/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Problem 2: Viewers */}
          <motion.div
            custom={2}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card backdrop-blur-sm border border-primary/20 overflow-hidden"
          >
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <div className="relative w-40 h-40">
                    <Image
                      src="/images/viewer-problem.svg"
                      alt="Viewer Problem"
                      width={160}
                      height={160}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 md:pl-6">
                  <h3 className="text-2xl font-bold text-light mb-2">Viewer Frustrations</h3>
                  <p className="text-light/70">
                    Viewers are overwhelmed by intrusive ads and receive no rewards for their attention and engagement.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Forced to watch intrusive advertisements',
                  'No compensation for time and attention',
                  'Limited control over content recommendations',
                  'Privacy concerns with data collection practices',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-light/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
