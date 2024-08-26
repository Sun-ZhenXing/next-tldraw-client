import plugin from 'tailwindcss/plugin'

/**
 * Common tailwindcss utilities
 */
export const commonUtilities = plugin(({ addUtilities }) => {
  addUtilities({
    '.flex-center': {
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    },
  })
}, ['responsive', 'hover'])
