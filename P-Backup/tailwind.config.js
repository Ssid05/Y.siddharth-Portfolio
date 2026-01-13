/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Bold gradient palette
        apple: {
          // Backgrounds - Dark purple-brown gradients
          bg: '#1a0a1f',
          'bg-secondary': '#2d1b35',
          'bg-elevated': '#3d2645',
          
          // Dark mode
          'dark-bg': '#000000',
          'dark-bg-secondary': '#0a0118',
          'dark-bg-elevated': '#1a0f2e',
          
          // Text - White/Light for dark backgrounds
          text: '#ffffff',
          'text-secondary': '#c7b8e8',
          'text-tertiary': '#9d8cc7',
          
          // Dark text
          'dark-text': '#f5f5f7',
          'dark-text-secondary': '#c7b8e8',
          'dark-text-tertiary': '#9d8cc7',
          
          // Accent - Bright blue
          blue: '#0071e3',
          'blue-hover': '#0077ed',
          
          // Borders - Purple tint
          border: '#3d2b5f',
          'dark-border': '#3d2b5f',
          
          // Shadows
          shadow: 'rgba(0, 0, 0, 0.08)',
          'dark-shadow': 'rgba(0, 0, 0, 0.5)',
        },
        // Gradient colors - Softer pink/magenta palette
        'gradient-purple': '#c026d3',
        'gradient-pink': '#f5a3d0',
        'gradient-magenta': '#d946ef',
        'gradient-rose': '#ec4899',
        'gradient-deep': '#7e1f86',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display-xl': ['80px', { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display-lg': ['64px', { lineHeight: '1.0625', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-md': ['48px', { lineHeight: '1.0833', letterSpacing: '-0.003em', fontWeight: '700' }],
        'display-sm': ['40px', { lineHeight: '1.1', letterSpacing: '0em', fontWeight: '700' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'orbit': 'orbit 20s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(40px)' },
          '50%': { opacity: '0.8', filter: 'blur(60px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        'apple': '20px',
      },
      boxShadow: {
        'apple': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'apple-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'apple-hover': '0 12px 48px rgba(0, 0, 0, 0.15)',
        'glow-purple': '0 0 60px rgba(139, 92, 246, 0.6), 0 0 100px rgba(139, 92, 246, 0.3)',
        'glow-pink': '0 0 60px rgba(236, 72, 153, 0.6), 0 0 100px rgba(236, 72, 153, 0.3)',
        'glow-magenta': '0 0 60px rgba(217, 70, 239, 0.6), 0 0 100px rgba(217, 70, 239, 0.3)',
      },
    },
  },
  plugins: [],
}
