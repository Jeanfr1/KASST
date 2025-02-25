'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaServer, FaLock, FaExchangeAlt, FaCode, FaDatabase } from 'react-icons/fa';

// Technical features data
const technicalFeatures = [
  {
    id: 'blockchain',
    title: 'Blockchain Architecture',
    description: 'Our platform is built on a high-performance blockchain designed specifically for video content, enabling fast transactions and low fees.',
    icon: FaDatabase,
    color: '#9333ea',
    details: [
      'Layer 2 scaling solution for high throughput',
      'Custom consensus mechanism optimized for content delivery',
      'Smart contract infrastructure for creator payments',
      'Decentralized storage integration for content persistence',
    ],
    codeSnippet: `
// Example smart contract for content monetization
contract K2SContent {
    address public creator;
    uint256 public viewPrice;
    mapping(address => bool) public hasPaid;

    constructor(uint256 _price) {
        creator = msg.sender;
        viewPrice = _price;
    }

    function payForContent() external payable {
        require(msg.value >= viewPrice, "Insufficient payment");
        hasPaid[msg.sender] = true;
        payable(creator).transfer(msg.value);
    }
}`,
  },
  {
    id: 'tokenomics',
    title: 'Token Integration',
    description: 'The K2S token powers all platform interactions, from content purchases to creator rewards and governance.',
    icon: FaExchangeAlt,
    color: '#10b981',
    details: [
      'ERC-20 compatible token with custom extensions',
      'Staking mechanisms for platform governance',
      'Automated reward distribution system',
      'Anti-fraud measures to protect creator earnings',
    ],
    codeSnippet: `
// K2S Token staking mechanism
function stakeTokens(uint256 amount) external {
    require(k2sToken.balanceOf(msg.sender) >= amount, "Insufficient balance");

    // Transfer tokens to staking contract
    k2sToken.transferFrom(msg.sender, address(this), amount);

    // Update user's staking balance
    stakingBalances[msg.sender] += amount;

    // Calculate voting power based on stake
    votingPower[msg.sender] = calculateVotingPower(stakingBalances[msg.sender]);

    emit TokensStaked(msg.sender, amount);
}`,
  },
  {
    id: 'security',
    title: 'Security Framework',
    description: 'Multi-layered security approach protecting user data, creator content, and platform transactions.',
    icon: FaLock,
    color: '#9333ea',
    details: [
      'End-to-end encryption for all content delivery',
      'Multi-signature transaction validation',
      'Regular security audits by third-party experts',
      'Decentralized identity verification system',
    ],
    codeSnippet: `
// Content encryption and access control
function encryptContent(bytes memory content, bytes32 accessKey) internal pure returns (bytes memory) {
    // Implementation of AES-256 encryption
    // ...

    return encryptedContent;
}

function verifyAccess(address user, uint256 contentId) external view returns (bool) {
    // Check if user has purchased or has subscription
    if (contentPurchases[user][contentId] || hasActiveSubscription(user)) {
        return true;
    }

    // Check if content is free
    if (contentRegistry[contentId].isFree) {
        return true;
    }

    return false;
}`,
  },
  {
    id: 'api',
    title: 'Developer API',
    description: 'Comprehensive API allowing third-party integration and extension of the K2S platform.',
    icon: FaCode,
    color: '#10b981',
    details: [
      'RESTful and GraphQL API endpoints',
      'Webhook system for real-time events',
      'SDK support for major programming languages',
      'Extensive documentation and developer resources',
    ],
    codeSnippet: `
// Example API request for content retrieval
const getContent = async (contentId, userToken) => {
  try {
    const response = await fetch(
      \`https://api.k2s.io/v1/content/\${contentId}\`,
      {
        method: 'GET',
        headers: {
          'Authorization': \`Bearer \${userToken}\`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error('Content access denied');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return null;
  }
};`,
  },
  {
    id: 'infrastructure',
    title: 'Decentralized Infrastructure',
    description: 'Hybrid infrastructure combining decentralized storage with optimized delivery networks.',
    icon: FaServer,
    color: '#9333ea',
    details: [
      'Content distribution across decentralized nodes',
      'Incentivized storage providers network',
      'Adaptive streaming based on network conditions',
      'Redundancy mechanisms for 99.9% uptime',
    ],
    codeSnippet: `
// Node selection algorithm for content delivery
function selectOptimalNodes(
    bytes32 contentId,
    uint256 userRegion
) public view returns (address[] memory) {
    // Find nodes with the content that are closest to user
    address[] memory availableNodes = contentRegistry[contentId].hostingNodes;

    // Sort by proximity and performance metrics
    address[] memory sortedNodes = sortNodesByProximity(availableNodes, userRegion);

    // Return top 3 nodes for redundancy
    return getTopNodes(sortedNodes, 3);
}`,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function TechnicalOverviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('blockchain');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  // Find the active feature
  const activeFeature = technicalFeatures.find(feature => feature.id === activeTab);

  return (
    <section
      id="technical"
      ref={sectionRef}
      className="py-20 bg-dark-light relative overflow-hidden"
    >
      {/* Background effect - code-like pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-secondary/40"
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
              Technical Overview
            </span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            The innovative technology powering the K2S platform.
          </p>
        </motion.div>

        {/* Interactive blockchain visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative h-40 md:h-60 overflow-hidden rounded-xl bg-dark/50 backdrop-blur-sm">
            {/* Animated blockchain nodes */}
            <div className="absolute inset-0">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary/30 flex items-center justify-center"
                  style={{
                    left: `${(i * 10) + Math.random() * 5}%`,
                    top: `${30 + Math.random() * 40}%`,
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 0 rgba(147, 51, 234, 0.4)',
                      '0 0 0 8px rgba(147, 51, 234, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary"></div>
                </motion.div>
              ))}

              {/* Connection lines */}
              {[...Array(15)].map((_, i) => {
                const startX = Math.floor(i / 2) * 10 + Math.random() * 5;
                const endX = startX + 10 + Math.random() * 10;
                const startY = 30 + Math.random() * 40;
                const endY = 30 + Math.random() * 40;

                return (
                  <motion.div
                    key={`line-${i}`}
                    className="absolute h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50"
                    style={{
                      left: `${startX}%`,
                      top: `${startY}%`,
                      width: `${endX - startX}%`,
                      transformOrigin: 'left center',
                      transform: `rotate(${Math.atan2(endY - startY, endX - startX) * (180 / Math.PI)}deg)`,
                    }}
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                );
              })}

              {/* Data packets */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`packet-${i}`}
                  className="absolute w-1.5 h-1.5 rounded-full bg-secondary"
                  initial={{
                    left: `${(i * 20) + 5}%`,
                    top: `${30 + Math.random() * 40}%`,
                  }}
                  animate={{
                    left: [`${(i * 20) + 5}%`, `${(i * 20) + 25}%`],
                    top: [`${30 + Math.random() * 40}%`, `${30 + Math.random() * 40}%`],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tabs navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {technicalFeatures.map((feature) => (
            <motion.button
              key={feature.id}
              variants={itemVariants}
              onClick={() => setActiveTab(feature.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === feature.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-dark-light text-light/70 hover:text-light'
              }`}
            >
              <div className="flex items-center">
                <feature.icon className="mr-2 h-4 w-4" />
                {feature.title}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Content area */}
        {activeFeature && (
          <motion.div
            key={activeFeature.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Feature details */}
            <div className="card backdrop-blur-sm p-6 border-l-4" style={{ borderColor: activeFeature.color }}>
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                  style={{ backgroundColor: `${activeFeature.color}20` }}
                >
                  <activeFeature.icon className="w-6 h-6" style={{ color: activeFeature.color }} />
                </div>
                <h3 className="text-2xl font-bold text-light">{activeFeature.title}</h3>
              </div>

              <p className="text-light/70 mb-6">{activeFeature.description}</p>

              <h4 className="text-lg font-semibold text-light mb-3">Key Components:</h4>
              <ul className="space-y-2 mb-6">
                {activeFeature.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    </div>
                    <span className="text-light/80">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Code snippet */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-dark rounded-lg overflow-hidden shadow-xl"
              >
                <div className="bg-gray-900 px-4 py-2 flex items-center">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">{activeFeature.title} Implementation</div>
                </div>
                <pre className="p-4 overflow-x-auto text-sm font-mono text-light/90 leading-relaxed">
                  <code>{activeFeature.codeSnippet}</code>
                </pre>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full blur-2xl -z-10"></div>
            </div>
          </motion.div>
        )}

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-light mb-4">Ready to Dive Deeper?</h3>
          <p className="text-light/70 max-w-2xl mx-auto mb-8">
            Explore our comprehensive technical documentation to learn more about the K2S platform architecture and how you can build on top of it.
          </p>
          <a
            href="#"
            className="btn-primary inline-flex items-center"
          >
            <FaCode className="mr-2" /> Read the Docs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
