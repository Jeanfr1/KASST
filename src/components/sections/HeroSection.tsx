'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(147, 51, 234, 0.3), transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="block glow-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Revolutionizing
              </span>
              <span className="text-light">Online Video Platforms</span>
              <span className="block text-light">with Blockchain</span>
            </h1>

            <p className="text-xl text-light/80 mb-8">
              Empowering creators, rewarding viewers, and transforming advertising.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                'Benefiting creators and viewers with KASST tokens.',
                'Ad revenue sharing and control over engagement.',
                'Token with increasing value through demand and burns.'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start"
                >
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
                  <span className="text-light/90">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#features" className="btn-primary">
                More Info
              </Link>
              <Link href="#buy" className="btn-secondary">
                Buy Token
              </Link>
            </div>
          </motion.div>

          {/* K2S Token Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />

              {/* K logo */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateZ: [0, 2, 0, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src="/images/k-logo.svg"
                  alt="KASST Token"
                  width={200}
                  height={200}
                  className="animate-glow"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-light/50 text-sm mb-2">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
