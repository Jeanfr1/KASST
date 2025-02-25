import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-1">
            <Link href="#home" className="flex items-center">
              <Image
                src="/images/k-logo.svg"
                alt="K2S Logo"
                width={50}
                height={50}
                className="animate-glow"
              />
              <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                K2S
              </span>
            </Link>
            <p className="mt-4 text-light/80 text-sm">
              Revolutionizing Online Video Platforms with Blockchain
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-light/70 hover:text-primary transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-light/70 hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-light/70 hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-light/70 hover:text-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-light/70 hover:text-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-light mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'Tokenomics', 'Roadmap', 'Team', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-light/70 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-light mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Whitepaper', 'Documentation', 'API', 'Privacy Policy', 'Terms of Service'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-light/70 hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-light mb-4">Stay Updated</h3>
            <p className="text-light/70 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and announcements.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-dark border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-light"
                required
              />
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <p className="text-center text-light/60 text-sm">
            &copy; {new Date().getFullYear()} K2S Token. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
