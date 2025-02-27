'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

// Team member data
const teamMembers = [
  {
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    bio: 'Blockchain visionary with 10+ years in tech leadership and video platform development.',
    image: '/images/team-placeholder-1.svg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Sophia Chen',
    role: 'CTO',
    bio: 'Former senior engineer at major tech companies with expertise in blockchain and distributed systems.',
    image: '/images/team-placeholder-2.svg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Product',
    bio: 'Product strategist with experience scaling video platforms and creator ecosystems.',
    image: '/images/team-placeholder-3.svg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Elena Rodriguez',
    role: 'Blockchain Lead',
    bio: 'Smart contract specialist with a background in tokenomics and decentralized applications.',
    image: '/images/team-placeholder-4.svg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'David Kim',
    role: 'Marketing Director',
    bio: 'Growth expert specializing in crypto marketing and community building.',
    image: '/images/team-placeholder-5.svg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Olivia Taylor',
    role: 'UX/UI Designer',
    bio: 'Award-winning designer focused on creating intuitive and engaging user experiences.',
    image: '/images/team-placeholder-6.svg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
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

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-dark-light relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9333ea10,transparent_70%)] opacity-70"></div>

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
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            The visionaries and experts behind the K2S platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="card backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                <div className="relative h-64 overflow-hidden">
                  {/* Placeholder for team member image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-dark-light via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-4">
                        <a
                          href={member.social.linkedin}
                          className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                          aria-label={`${member.name}&#39;s LinkedIn`}
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                          aria-label={`${member.name}&#39;s Twitter`}
                        >
                          <FaTwitter className="w-5 h-5" />
                        </a>
                        <a
                          href={member.social.github}
                          className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                          aria-label={`${member.name}&#39;s GitHub`}
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-light mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-light/70 text-sm">{member.bio}</p>
                </div>

                {/* Animated border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-light mb-4">Join Our Team</h3>
          <p className="text-light/70 max-w-2xl mx-auto mb-8">
            We&#39;re always looking for talented individuals who are passionate about blockchain, video platforms, and creating a fair ecosystem for creators and viewers.
          </p>
          <a
            href="#"
            className="btn-primary inline-flex items-center"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
