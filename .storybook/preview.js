import { globalStyles } from '../src/styles/global/styles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'Dark',
    toolbar: {
      icon: 'switchalt',
      items: ['Light', 'Dark'],
      showName: true,
    },
  },
}

export const decorators = [
  (Story) => {
    globalStyles()
    return (
      <>
        <Story />
      </>
    )
  },
]
