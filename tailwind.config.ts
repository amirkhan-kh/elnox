import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'wiggle-left': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-8px)' },
        },
      },
      animation: {
        'wiggle-left': 'wiggle-left 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
