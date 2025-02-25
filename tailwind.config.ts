import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        dark: {
          DEFAULT: "var(--dark)",
          light: "var(--dark-light)",
        },
        light: "var(--light)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-bg.png')",
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'brightness(100%) drop-shadow(0 0 2px rgba(147, 51, 234, 0.7))' },
          '100%': { filter: 'brightness(120%) drop-shadow(0 0 10px rgba(147, 51, 234, 0.9))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      // Add custom utilities for opacity variants
      const opacityVariants: Record<string, Record<string, string>> = {};

      // Generate opacity variants for primary color - background
      for (let i = 10; i <= 90; i += 10) {
        const key = `.bg-primary\\/${i}`;
        opacityVariants[key] = {
          backgroundColor: `rgba(147, 51, 234, ${i / 100})`,
        };
      }

      // Generate opacity variants for secondary color - background
      for (let i = 10; i <= 90; i += 10) {
        const key = `.bg-secondary\\/${i}`;
        opacityVariants[key] = {
          backgroundColor: `rgba(16, 185, 129, ${i / 100})`,
        };
      }

      // Generate opacity variants for primary color - border
      for (let i = 10; i <= 90; i += 10) {
        const key = `.border-primary\\/${i}`;
        opacityVariants[key] = {
          borderColor: `rgba(147, 51, 234, ${i / 100})`,
        };
      }

      // Generate opacity variants for secondary color - border
      for (let i = 10; i <= 90; i += 10) {
        const key = `.border-secondary\\/${i}`;
        opacityVariants[key] = {
          borderColor: `rgba(16, 185, 129, ${i / 100})`,
        };
      }

      addUtilities(opacityVariants);
    }),
  ],
} satisfies Config;
