module.exports = {
  content: [
  './src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/application/assets/background-blur.png)'
      },
      colors: {
        blue: {
          100: '#81D8F7',
          300: '#00AEEF',
          500: '#0076A2',
          700: '#034963'
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}
