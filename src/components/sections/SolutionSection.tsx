'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section
      id="solution"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0f0f1a, #1a1a2e, #0f0f1a)',
      }}
    >
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.5 + 0.5],
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
          style={{ opacity, scale, y }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              The Solution
            </span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            KASST is the future of online video platforms, powered by blockchain technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Globe visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />

              {/* Globe with blockchain */}
              <motion.div
                animate={{
                  rotateY: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20" style={{ transform: 'rotate(30deg)' }} />
                  <div className="absolute inset-0 rounded-full border-2 border-primary/10" style={{ transform: 'rotate(60deg)' }} />

                  {/* Blockchain cubes */}
                  <motion.div
                    className="absolute"
                    style={{ top: '30%', left: '20%' }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 border-2 border-primary/70 transform rotate-45" />
                  </motion.div>

                  <motion.div
                    className="absolute"
                    style={{ top: '50%', left: '60%' }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <div className="w-6 h-6 border-2 border-primary/70 transform rotate-45" />
                  </motion.div>

                  <motion.div
                    className="absolute"
                    style={{ top: '70%', left: '40%' }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <div className="w-7 h-7 border-2 border-primary/70 transform rotate-45" />
                  </motion.div>

                  <motion.div
                    className="absolute"
                    style={{ top: '40%', left: '40%' }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  >
                    <div className="w-5 h-5 border-2 border-primary/70 transform rotate-45" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Solution text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-light mb-3">Blockchain-Powered Transparency</h3>
              <p className="text-light/70">
                KASST leverages blockchain technology to provide complete transparency and security for all transactions and data. Every view, engagement, and payment is recorded on the blockchain, ensuring fairness and trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-light mb-3">Ethical and Fair Ecosystem</h3>
              <p className="text-light/70">
                Our platform creates an ethical and fair ecosystem where creators are properly compensated, viewers are rewarded for their attention, and advertisers reach genuinely engaged audiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-light mb-3">Revolutionary Token Economy</h3>
              <p className="text-light/70">
                The K2S token powers the entire ecosystem, creating a circular economy that benefits all participants. With built-in scarcity mechanisms and utility, the token is designed to increase in value over time.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold mb-6 glow-text">
            KASST is the future
          </h3>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            An ecosystem that benefits all participants, creating a sustainable and fair platform for content creators, viewers, and advertisers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
