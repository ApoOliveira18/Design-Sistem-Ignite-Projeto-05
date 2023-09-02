import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar, 

  args: {
    src: 'https://avatars.githubusercontent.com/u/62668890?v=4',
    alt: 'Adilson Oliveira',
  },
  argTypes: {
   src: {
      control: {
        type:'text',
      }
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {  
}

export const CustomTag: StoryObj<AvatarProps> = { 
  args: {
    src: undefined,
  } 
} 