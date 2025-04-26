"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MVPNavigation from "../MVPNavigation";
import MVPForm from "../MVPForm";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMVPForm, setShowMVPForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenMVPForm = () => {
    setIsOpen(false); // Close mobile menu
    setShowMVPForm(true);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-light/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link href="#home" className="flex items-center">
              <Image
                src="/images/k-logo.svg"
                alt="KASST Logo"
                width={50}
                height={50}
                className="animate-glow"
              />
              <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                KASST
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="ml-10 flex items-center space-x-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-light hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ))}

              {/* MVP Kasst Button */}
              <MVPNavigation />

              <Link
                href="#buy"
                className="btn-primary flex items-center justify-center"
              >
                Buy Token
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-light hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-light/90 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-light hover:text-primary hover:bg-dark-light transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile MVP Kasst Button */}
          <button
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-light hover:text-primary hover:bg-dark-light transition-colors duration-300"
            onClick={handleOpenMVPForm}
          >
            MVP Kasst
          </button>

          <Link
            href="#buy"
            className="block px-3 py-2 rounded-md text-base font-medium bg-primary hover:bg-primary-dark text-white transition-colors duration-300 text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Buy Token
          </Link>
        </div>
      </motion.div>

      {/* MVP Form for Mobile (rendered here so it's outside the mobile menu) */}
      {showMVPForm && (
        <MVPForm
          onClose={() => setShowMVPForm(false)}
          onSubmitSuccess={() => {
            setShowMVPForm(false);
            window.location.href = "/mvp";
          }}
        />
      )}
    </nav>
  );
}
