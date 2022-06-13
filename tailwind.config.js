module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'hover-yellow': '#F4DE4D',
        'text-grey': '#212529',
        'text-blue': '#003F92',
        'text-red' : '#FD2E24',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'image1': "url('/img/content/img1.png')",
        'image2': "url('/img/content/img2.png')",
        'image3': "url('/img/content/img3.png')",
        'image4': "url('/img/content/img4.png')",
        'image5': "url('/img/content/img5.png')",
        'image6': "url('/img/content/img6.png')",
        'image7': "url('/img/content/img7.png')",
        'image8': "url('/img/content/img8.png')",
      },
    },
  },
  plugins: [],
}
