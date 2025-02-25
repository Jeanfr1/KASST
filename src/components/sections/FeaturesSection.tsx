'use client';

import { motion } from 'framer-motion';
import { FaEye, FaVideo, FaAd } from 'react-icons/fa';

const features = [
  {
    title: 'For Viewers',
    icon: FaEye,
    description: 'Watch videos and earn tokens for your time. Choose when and how to view ads.',
    benefits: [
      'Earn K2S tokens for watching content',
      'Control your ad experience',
      'Support creators directly',
      'Participate in platform governance',
    ],
    color: 'from-primary to-primary-light',
  },
  {
    title: 'For Creators',
    icon: FaVideo,
    description: 'Earn directly from engagement and views. Transparent revenue tracking with smart contracts.',
    benefits: [
      'Fair compensation for content',
      'Real-time earnings tracking',
      'Direct relationship with audience',
      'Multiple monetization options',
    ],
    color: 'from-primary-dark to-primary',
  },
  {
    title: 'For Advertisers',
    icon: FaAd,
    description: 'Directly reward your target audience for their attention. Access engaged, incentivized users.',
    benefits: [
      'Higher engagement rates',
      'Transparent performance metrics',
      'Direct audience targeting',
      'Cost-effective campaigns',
    ],
    color: 'from-secondary to-secondary-light',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#9333ea33_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

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
              Features of KASST
            </span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            Our platform offers unique benefits for all participants in the ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card backdrop-blur-sm border border-primary/20 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-light">{feature.title}</h3>
                </div>
                <p className="text-light/70 text-center mb-6">
                  {feature.description}
                </p>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-light/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block gradient-border p-0.5">
            <button className="bg-dark-light px-8 py-4 rounded-lg text-light hover:bg-dark-light/80 transition-colors duration-300">
              <span className="text-xl font-semibold">Join the Ecosystem</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
