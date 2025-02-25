'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChartPie, FaRocket, FaUsers, FaBullhorn, FaCode } from 'react-icons/fa';

// Token distribution data
const tokenDistribution = [
  { name: 'ICO', percentage: 20, color: '#9333ea', icon: FaRocket },
  { name: 'Rewards', percentage: 25, color: '#a855f7', icon: FaUsers },
  { name: 'Marketing', percentage: 30, color: '#10b981', icon: FaBullhorn },
  { name: 'Team & Advisors', percentage: 15, color: '#7e22ce', icon: FaUsers },
  { name: 'Reserve', percentage: 10, color: '#34d399', icon: FaChartPie },
];

// Fund allocation data
const fundAllocation = [
  { name: 'Development', percentage: 40, color: '#9333ea', icon: FaCode },
  { name: 'Marketing', percentage: 30, color: '#10b981', icon: FaBullhorn },
  { name: 'Reserve', percentage: 15, color: '#a855f7', icon: FaChartPie },
  { name: 'Operations', percentage: 15, color: '#34d399', icon: FaUsers },
];

// ICO rounds data
const icoRounds = [
  {
    name: 'Seed Round 1',
    supply: '2%',
    tokens: '420,000',
    price: '€2.60 - €6.00',
    description: 'To attract early supporters with the best pricing.',
  },
  {
    name: 'Seed Round 2',
    supply: '5%',
    tokens: '840,000',
    price: '€6.00 - €10.00',
    description: 'To attract early supporters with the best pricing.',
  },
  {
    name: 'Public Round',
    supply: '10%',
    tokens: '2,100,000',
    price: '€10.00 - €15.00',
    description: 'To open the token sale to the public, with pricing aligned to market maturity.',
  },
];

export default function TokenomicsSection() {
  const [activeTab, setActiveTab] = useState('distribution');

  return (
    <section id="ico" className="py-20 bg-dark relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#9333ea05,#10b98105,#9333ea05)] opacity-50"></div>

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
              KASST Tokenomics
            </span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            <span className="text-3xl font-bold text-primary">21 million</span> K2S tokens
          </p>
          <p className="text-light/70 max-w-3xl mx-auto mt-4">
            Capping the token supply at 21 million, inspired by Bitcoin, creates scarcity and market comparability,
            boosting investor confidence in long-term growth. This drives demand as the platform scales, with value
            stability supported by deflationary mechanisms and advertiser buybacks.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm p-1 bg-dark-light">
            {['distribution', 'allocation', 'ico'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-light/70 hover:text-light'
                }`}
              >
                {tab === 'distribution' && 'Token Distribution'}
                {tab === 'allocation' && 'Fund Allocation'}
                {tab === 'ico' && 'ICO Rounds'}
              </button>
            ))}
          </div>
        </div>

        {/* Token Distribution */}
        {activeTab === 'distribution' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Pie chart visualization */}
              <div className="relative">
                <div className="aspect-square relative max-w-md mx-auto">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {tokenDistribution.map((item, index) => {
                      // Calculate the start and end angles for the pie slice
                      const previousPercentages = tokenDistribution
                        .slice(0, index)
                        .reduce((sum, curr) => sum + curr.percentage, 0);
                      const startAngle = (previousPercentages / 100) * 360;
                      const endAngle = ((previousPercentages + item.percentage) / 100) * 360;

                      // Convert angles to radians and calculate coordinates
                      const startRad = ((startAngle - 90) * Math.PI) / 180;
                      const endRad = ((endAngle - 90) * Math.PI) / 180;

                      const x1 = 50 + 40 * Math.cos(startRad);
                      const y1 = 50 + 40 * Math.sin(startRad);
                      const x2 = 50 + 40 * Math.cos(endRad);
                      const y2 = 50 + 40 * Math.sin(endRad);

                      // Determine if the arc should be drawn as a large arc
                      const largeArcFlag = item.percentage > 50 ? 1 : 0;

                      // Create the SVG path for the pie slice
                      const path = `
                        M 50 50
                        L ${x1} ${y1}
                        A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}
                        Z
                      `;

                      return (
                        <path
                          key={index}
                          d={path}
                          fill={item.color}
                          stroke="#0f0f1a"
                          strokeWidth="1"
                          className="transition-all duration-300 hover:opacity-90"
                        />
                      );
                    })}
                    <circle cx="50" cy="50" r="25" fill="#0f0f1a" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-light">21M</span>
                      <span className="block text-sm text-light/70">Total Supply</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distribution details */}
              <div>
                <h3 className="text-2xl font-bold text-light mb-6">Token Distribution</h3>
                <div className="space-y-4">
                  {tokenDistribution.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <item.icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-light">{item.name}</span>
                          <span className="font-bold text-light">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-dark rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${item.percentage}%`,
                              backgroundColor: item.color,
                            }}
                          ></div>
                        </div>
                        <div className="text-right text-sm text-light/70 mt-1">
                          {(item.percentage * 210000) / 10}K tokens
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Fund Allocation */}
        {activeTab === 'allocation' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Circular visualization */}
              <div className="relative">
                <div className="aspect-square relative max-w-md mx-auto">
                  {fundAllocation.map((item, index) => {
                    const angle = (index / fundAllocation.length) * 2 * Math.PI;
                    const radius = 120;
                    const x = 200 + radius * Math.cos(angle);
                    const y = 200 + radius * Math.sin(angle);

                    return (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${(x / 400) * 100}%`, top: `${(y / 400) * 100}%` }}
                      >
                        <div
                          className="w-20 h-20 rounded-full flex flex-col items-center justify-center text-center"
                          style={{ backgroundColor: `${item.color}20` }}
                        >
                          <item.icon className="w-6 h-6 mb-1" style={{ color: item.color }} />
                          <span className="text-xs font-medium text-light">{item.percentage}%</span>
                        </div>
                      </motion.div>
                    );
                  })}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#9333ea20' }}
                    >
                      <span className="text-lg font-bold text-light">Funds</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Allocation details */}
              <div>
                <h3 className="text-2xl font-bold text-light mb-6">Fund Allocation</h3>
                <div className="space-y-6">
                  {fundAllocation.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-center mb-2">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                          style={{ backgroundColor: `${item.color}20` }}
                        >
                          <item.icon className="w-5 h-5" style={{ color: item.color }} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-light">{item.name}</h4>
                          <p className="text-light/70">{item.percentage}% of funds raised</p>
                        </div>
                      </div>
                      <div className="card backdrop-blur-sm p-4">
                        {item.name === 'Development' && (
                          <p className="text-sm text-light/70">
                            Infrastructure, backend, and platform scalability.
                          </p>
                        )}
                        {item.name === 'Marketing' && (
                          <p className="text-sm text-light/70">
                            Aggressive campaigns to drive user and creator acquisition.
                          </p>
                        )}
                        {item.name === 'Reserve' && (
                          <p className="text-sm text-light/70">
                            Ensures long-term stability and unforeseen challenges.
                          </p>
                        )}
                        {item.name === 'Operations' && (
                          <p className="text-sm text-light/70">
                            Team, legal, compliance, and day-to-day operations.
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ICO Rounds */}
        {activeTab === 'ico' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-light mb-6 text-center">ICO Rounds</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {icoRounds.map((round, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="card backdrop-blur-sm border border-primary/20 overflow-hidden"
                >
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-light mb-4">{round.name}</h4>

                    <div className="space-y-3 mb-4">
                      <div>
                        <span className="text-light/70 text-sm">Supply</span>
                        <p className="text-xl font-bold text-light">{round.supply}</p>
                      </div>

                      <div>
                        <span className="text-light/70 text-sm">Tokens Available</span>
                        <p className="text-xl font-bold text-light">{round.tokens}</p>
                      </div>

                      <div>
                        <span className="text-light/70 text-sm">Target Price</span>
                        <p className="text-xl font-bold text-light">{round.price}</p>
                      </div>
                    </div>

                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <p className="text-sm text-light/90">{round.description}</p>
                    </div>
                  </div>
                  <div className={`h-2 ${index === 2 ? 'bg-secondary' : 'bg-primary'}`}></div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <a
                href="#buy"
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Buy KASST Token Now!
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
