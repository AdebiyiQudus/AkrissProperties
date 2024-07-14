//const { orange } = require('color-name');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './index.html',
    './contact.html',
    './investment.html',
    './team.html',
  ],
  theme: {
    extend: {
      appearance: ['responsive', 'hover', 'focus'],
      backgroundImage: {
        'team-hero': "url('/img/team_new_hero.jpg')",
        'home-hero': "url('/img/img_3.jpg')",
      },
    },
    screens: {
      lg: '1080px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: '#222',
      layout: '#111418;',
      gradient: '#22222200',
      gray: '#fafafa',
      white: '#ffffff',
      orange: {
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.appearance-none': {
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          appearance: 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover', 'focus']);
    },
  ],
};
