/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#877EFF",
        "primary-600": "#5D5FEF",
        "secondary-500": "#FFB620",
        "off-white": "#D0DFFF",
        red: "#FF5A5A",
        "red-primary": "#FE492A",
        "red-primary-light": "#FB8489",
        "red-primary-light2": "#FF6F61",
        "dark-1": "#000000",
        "dark-2": "#09090A",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "light-1": "#FFFFFF",
        "light-2": "#EFEFEF",
        "light-3": "#7878A3",
        "light-4": "#5C5C7B",
        "ligt-grey": "#F1F6FF",
        "blue": "#5A4AFF",
        "ligt-grey2": "#788291",
        "ligt-grey3" : "#F1F6FF"
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        Poppins: ['Poppins', 'ans-serif'],
        Braah: ['Braah One','sans-serif'],
        Cairo: ['Cairo', 'sans-serif'],
        monospace: ['Braah One', 'sans-serif'],
        Monomaniac: ['Monomaniac One', 'sans-serif'],
        Mulish: ['Mulish', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      
        
    },
    fontSize: {
      
      small: '0.875rem', // Small (14px)
      medium: '1rem',     // Medium (16px)
      large: '1.25rem', // Extra Large (20px)
    },
  },
  plugins: [],
  extend: {
    spacing: {
      '8xl': '96rem',
      '9xl': '128rem',
    },
    borderRadius: {
      '4xl': '2rem',
    }
  }
}

