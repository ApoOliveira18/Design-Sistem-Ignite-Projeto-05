import type { StoryObj, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-ui/react'

import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button, 
  variant: 'primary',
  size: 'md',
  disabled: false,

  args: {
    children: 'Send'
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: 'inline-radio',
    },
    size: {
      options: ['sm', 'md'],
      control: 'inline-radio',
    },
    disabled: {
      type: 'boolean',
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {  
}

export const Secondary: StoryObj<ButtonProps> = {  
  args: {
    variant: 'secondary',
    children: 'Created New'
  }
}

export const Tertiary: StoryObj<ButtonProps> = {  
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  }
}

export const Small: StoryObj<ButtonProps> = {  
  args: {
    size: 'sm',
  },
}

export const Disabled: StoryObj<ButtonProps> = {  
  args: {
    disabled: true,
  },
}

export const WithIcon: StoryObj<ButtonProps> = {  
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}



