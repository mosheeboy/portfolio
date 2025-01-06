/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data.json',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f8f8f8',
        secondary: '#d1d1d1',
        text: '#2d2d2d',
        background: '#ffffff',
      },

      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

/*
navy: 293854
white; fdfff7
darker navy: 201f21
blue: 4176fc

white: eoeoeo
sand: bda593
camel: 99755c
green: 374735

ccc5b9
403d39
11120D
fffcfd
*/