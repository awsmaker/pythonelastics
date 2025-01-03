module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{js,jsx,ts,tsx}",
    "./blog/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-purple': '#b400ff',
        'space-black': '#0a0a0a',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #00f3ff' },
          '100%': { textShadow: '0 0 20px #00f3ff, 0 0 30px #00f3ff' },
        },
      },
    },
  },
  plugins: [],
} 