/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'bree-serif': ['"Bree Serif"', 'serif']
      },
      colors: {
        primary: {
          'light-blue': '#7A5AF8',
          'dark-blue': '#4A1FB8',
          'black': '#0C0C0C',
        },
        shade: {
          1: '#140832',
          2: '#281164',
          3: '#361786',
          4: '#4a1fb8',
          5: '#5825da'
        },
        tint: {
          1: '#6435dd',
          2: '#7e56e3',
          3: '#a489eb',
          4: '#cbbbf4',
          5: '#f2eefc'
        },
        neutral: {
          gray: {
            1: '#d6d6d6',
            2: '#e0e0e0',
            3: '#ebebeb',
            4: '#f5f5f5',
            5: '#a3a3a3',
            6: '#adadad',
            7: '#b8b8b8',
            8: '#c2c2c2',
            9: '#cccccc',
            10: '#999999',
            11: '#8f8f8f',
            12: '#858585'
          },
          black: {
            1: '#667085',
            2: '#475467',
            3: '#344054',
            4: '#1D2939',
            5: '#101828',
            6: '#F9FAFB',
            7: '#F2F4F7',
            8: '#E4E7EC',
            9: '#D0D5DD',
            10: '#98A2B3'
          }
        },
        srate: {
          error: {
            1: '#B81F40',
            2: '#fe7895',
            3: '#fec9d4'
          },
          success: {
            1: '#218012',
            2: '#8DB81F',
            3: '#7fff6a',
            4: '#cfffc8'
          },
          info: {
            1: '#004AB9',
            2: '#4A1FB8',
            3: '#c3d8f8'
          },
          warning: {
            1: '#FFC000',
            2: '#1FB897',
            3: '#1FB897'
          }
        }
       
      }
    },
  },
  plugins: [],
}