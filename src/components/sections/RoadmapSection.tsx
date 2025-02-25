'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaRocket, FaCode, FaUsers, FaGlobe, FaChartLine } from 'react-icons/fa';

// Define roadmap milestones
const roadmapItems = [
  {
    phase: 'Phase 1',
    title: 'Platform Development',
    description: 'Initial development of the K2S platform and token smart contracts.',
    date: 'Q1 2025',
    icon: FaCode,
    status: 'completed',
    color: '#9333ea',
  },
  {
    phase: 'Phase 2',
    title: 'Token Launch',
    description: 'ICO launch and initial exchange listings for the K2S token.',
    date: 'Q2 2025',
    icon: FaRocket,
    status: 'current',
    color: '#10b981',
  },
  {
    phase: 'Phase 3',
    title: 'Creator Onboarding',
    description: 'Onboarding of initial content creators and strategic partnerships.',
    date: 'Q3 2025',
    icon: FaUsers,
    status: 'upcoming',
    color: '#9333ea',
  },
  {
    phase: 'Phase 4',
    title: 'Platform Beta Launch',
    description: 'Public beta launch of the K2S video platform with initial features.',
    date: 'Q4 2025',
    icon: FaGlobe,
    status: 'upcoming',
    color: '#10b981',
  },
  {
    phase: 'Phase 5',
    title: 'Global Expansion',
    description: 'Expansion to global markets and additional exchange listings.',
    date: 'Q1 2026',
    icon: FaChartLine,
    status: 'upcoming',
    color: '#9333ea',
  },
];

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="py-20 bg-dark relative overflow-hidden"
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#9333ea10_1px,transparent_1px),linear-gradient(to_bottom,#9333ea10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [Math.random() * 0.5 + 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ opacity, y }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Roadmap
            </span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            Our journey to revolutionize online video platforms with blockchain technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="relative">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`mb-16 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                {/* Content */}
                <motion.div
                  className={`w-5/12 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`p-6 card backdrop-blur-sm border-l-4`} style={{ borderColor: item.color }}>
                    <h3 className="text-xl font-bold text-light mb-1">{item.phase}: {item.title}</h3>
                    <p className="text-light/70 mb-2">{item.description}</p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'completed'
                          ? 'bg-primary/20 text-primary'
                          : item.status === 'current'
                            ? 'bg-secondary/20 text-secondary'
                            : 'bg-gray-500/20 text-gray-400'
                      }`}
                    >
                      {item.date}
                    </span>
                  </div>
                </motion.div>

                {/* Center point */}
                <motion.div
                  className="w-2/12 flex justify-center relative"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                      item.status === 'completed'
                        ? 'bg-primary'
                        : item.status === 'current'
                          ? 'bg-secondary'
                          : 'bg-gray-700'
                    }`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Pulse animation for current phase */}
                  {item.status === 'current' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-secondary/30"
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  )}
                </motion.div>

                {/* Empty space for alignment */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-block">
            <div className="bg-dark-light rounded-full p-1">
              <div className="flex items-center">
                {roadmapItems.map((item, index) => (
                  <div key={index} className="relative">
                    <div
                      className={`w-16 h-2 ${
                        index === roadmapItems.length - 1 ? 'rounded-r-full' : ''
                      } ${
                        index === 0 ? 'rounded-l-full' : ''
                      } ${
                        item.status === 'completed'
                          ? 'bg-primary'
                          : item.status === 'current'
                            ? 'bg-secondary'
                            : 'bg-gray-700'
                      }`}
                    />
                    <div
                      className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium ${
                        item.status === 'completed'
                          ? 'text-primary'
                          : item.status === 'current'
                            ? 'text-secondary'
                            : 'text-gray-500'
                      }`}
                    >
                      {item.phase}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
