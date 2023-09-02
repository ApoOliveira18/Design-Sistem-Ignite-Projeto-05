/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, MultiStep, MultiStepProps } from '@ignite-ui/react'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep, 

  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story: () => string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => {
      return(
        <Box 
        as="label" 
        css={{display: 'flex', flexDirection: 'column', gap: '$2'}}
        >
          <Text>{Story()}</Text>
        </Box>
      )
    }
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
 }

 export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
 }


