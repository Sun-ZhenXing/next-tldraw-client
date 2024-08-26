import type { Config } from 'tailwindcss'

import daisyui from 'daisyui'
import { enabledThemes } from './config/theme'
import { commonUtilities } from './config/tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    daisyui,
    commonUtilities,
  ],
  daisyui: {
    logs: false,
    themes: enabledThemes,
  },
}
export default config
