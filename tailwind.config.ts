import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        "gray-primary": "var(--gray-primary)",
        "gray-light": "var(--gray-light)",
        "green-primary": "var(--green-primary)",
        "green-light": "var(--green-light)",
        "yellow-primary": "var(--yellow-primary)",
      },
      backgroundColor: {
        "gray-primary": "var(--gray-primary)",
        "gray-light": "var(--gray-light)",
        "green-primary": "var(--green-primary)",
        "green-light": "var(--green-light)",
        "yellow-primary": "var(--yellow-primary)",
        "yellow-hover": "var(--yellow-hover)",
        "green-gradient": "var(--green-gradient)"
      },
      background: {
      }
    },
  },
  plugins: [],
}
export default config
