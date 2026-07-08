module.exports = {
    content: ["./index.html", "./404.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
          extend: {
                  colors: {
                            paper: '#F1EADC',
                            ink: '#2B241C',
                            'ink-mute': '#8A7A63',
                            signal: '#B24A2A',
                            line: '#E0D3BC',
                  },
                  fontFamily: {
                            display: ['"Outfit"', 'system-ui', 'sans-serif'],
                            body: ['"Outfit"', 'system-ui', 'sans-serif'],
                  },
          },
    },
    plugins: [],
}
