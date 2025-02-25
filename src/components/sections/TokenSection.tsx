'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaEye, FaCoins, FaChartLine, FaUserFriends, FaVideo, FaAd, FaLock, FaUsers } from 'react-icons/fa';

const tokenFeatures = [
  {
    icon: FaEye,
    title: 'Viewers earn K2S',
    description: 'Viewers earn K2S by engaging with content and ads.',
  },
  {
    icon: FaChartLine,
    title: 'Stable Value',
    description: 'Stable or increasing token value over time.',
  },
  {
    icon: FaVideo,
    title: 'Creator Monetization',
    description: 'Creators use K2S for monetization or reinvesting in ads.',
  },
  {
    icon: FaAd,
    title: 'Advertiser Buybacks',
    description: 'Advertisers buy back tokens to sustain campaign budgets.',
  },
  {
    icon: FaCoins,
    title: 'Campaign Funding',
    description: 'Advertisers purchase K2S to fund campaigns.',
  },
  {
    icon: FaUserFriends,
    title: 'Reward Currency',
    description: 'Acts as the reward currency for viewers and creators.',
  },
  {
    icon: FaLock,
    title: 'Transaction Security',
    description: 'Powers platform advertising transactions.',
  },
  {
    icon: FaUsers,
    title: 'Governance',
    description: 'Facilitates community-driven governance.',
  },
];

export default function TokenSection() {
  return (
    <section id="tokenomics" className="py-20 bg-dark-light relative overflow-hidden">
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
              The Engine of the KASST Ecosystem
            </span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            The K2S token powers our entire platform, creating a sustainable economy for all participants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          {/* Token visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-2 md:order-1"
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
                  alt="K2S Token"
                  width={200}
                  height={200}
                  className="animate-glow"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Token features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 md:order-2">
            {tokenFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card backdrop-blur-sm"
              >
                <div className="flex items-start p-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-light mb-1">{feature.title}</h3>
                    <p className="text-sm text-light/70">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold mb-6 glow-text">
            Why K2S Token Will Increase in Value
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: 'Growing Demand',
                description: 'Users and creators earn K2S tokens, allowing advertisers to buy them.',
                icon: FaChartLine,
              },
              {
                title: 'Transaction Burns',
                description: 'A portion of each transaction is burned, reducing token supply.',
                icon: FaLock,
              },
              {
                title: 'Exclusive Perks',
                description: 'Perks like enhanced visibility and premium features encourage token holding.',
                icon: FaUserFriends,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card backdrop-blur-sm border border-primary/20"
              >
                <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-light mb-3">{item.title}</h4>
                  <p className="text-light/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
