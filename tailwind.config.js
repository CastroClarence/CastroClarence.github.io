const flowbite = require("flowbite-react/tailwind")
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'text': 'hsl(var(--text))',
        'background': 'hsl(var(--background))',
        'primary': 'hsl(var(--primary))',
        'secondary': 'hsl(var(--secondary))',
        'accent': 'hsl(var(--accent))',
        'background-transparent': 'hsl(var(--background-transparent))'
       },   
      screens: {
        'xs' : '320px'
      }    
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

