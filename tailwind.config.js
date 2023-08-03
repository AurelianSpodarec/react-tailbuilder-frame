function withOpacity(variableName) {
  return ({ opacityValue }) => {
      if (opacityValue !== undefined) {
          return `rgba(var(${variableName}), ${opacityValue})`
      }
      return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
      "./index.html",
      './src/**/*.{html,js,ts,jsx,tsx}'
  ],
  theme: {
      extend: {
          colors: {
              skin: {
                  accent: {
                      "200": withOpacity('--color-accent-200'),
                      "500": withOpacity('--color-accent-500'),
                  }
              }
          },
          textColor: {
              skin: {
                  base: withOpacity('--color-text-base'),
                  leading: withOpacity('--color-text-leading'),
                  muted: withOpacity('--color-text-muted'),
                  // inverted: `text-skin-base`,
              }
            },
            backgroundColor: {
              skin: {
                  base: withOpacity('--color-bg-base')
              }
            }
      },
  },
  plugins: [],
}