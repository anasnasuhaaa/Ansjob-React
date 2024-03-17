const withMT = require("@material-tailwind/react/utils/withMT");
 import bg from "./src/assets/bgimg.jpg"
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/bgimg.jpg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}); 