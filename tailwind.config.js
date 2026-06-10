module.exports = {
  content: ["./index.html", "./404.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: '#ffffff',
        ink: '#050505',
        'ink-mute': '#888888',
        signal: '#E52E2E',
        line: '#e5e5e5',
      },
      fontFamily: {
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        body: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
