import { ComponentMeta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Basic: StoryObj<ButtonProps> = {
  args: {
    text: 'hello world',
  },
}
