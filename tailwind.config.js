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
        primary: '#F1F4F7',
        secondary: '#003153',
        text: '#202020',
        background: '#E4E8EB',
      },

      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        noto: ['var(--font-noto)', 'sans-serif'],
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