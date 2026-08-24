/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#5e3a8c',
          purpleDark: '#46276d',
          purpleLight: '#805ad5',
          orange: '#ea580c',
          orangeLight: '#f97316',
          navy: '#1e3a8a',
          navyDark: '#0f172a',
          blue: '#2563eb',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          '"Helvetica Neue"',
          '"Segoe UI"',
          '"Apple SD Gothic Neo"',
          '"Noto Sans KR"',
          '"Malgun Gothic"',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
};
