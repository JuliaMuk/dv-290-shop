/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,pug}'],
  darkMode: 'html',
  theme: {
    
    extend: { 
      colors: {
        customBlue: '#1DA1F2',
        customGreen: '#10B981',
      },
    },
  },
  plugins: [
  ],
}

