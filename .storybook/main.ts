import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
    })
  },
}
export default config
