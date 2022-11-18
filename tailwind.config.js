const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
	teal: colors.teal,
      },
      keyframes: {
	wiggle: {
		'0%': { transform: 'rotate(0deg) scale(1)' },
		'25%': { transform: 'rotate(-3deg) scale(1.05)' },
		'50%': { transform: 'rotate(3deg) scale(1.1)' },
		'75%': { transform: 'rotate(-3deg) scale(1.05)' },
		'100%': { transform: 'rotate(0deg) scale(1)' }
	},
	fadeIn: {
		'0%': {opacity: 0},
		'100%': {opacity: 1}
	}
      },
      animation: {
      	wiggle: 'wiggle 1s ease-in-out',
      }
    }
  },
   variants: {
     extend: {
       animation: ['hover', 'focus', 'motion-safe'],
     }
  },
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './public/index.html',
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
}
