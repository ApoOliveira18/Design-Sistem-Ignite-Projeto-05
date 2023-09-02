/* eslint-disable prettier/prettier */
//import React from 'react';
//import * as Checkbox from '@radix-ui/react-checkbox';

import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'


export default {
  title: 'Form/Checkbox',
  component: Checkbox, 

  args: {},
  decorators: [
    (Story: () => string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => {
      return(
        <Box 
        as="label"
        css={{display: 'flex', flexDirection: 'row', gap: '$2'}}
        >
          {Story()}
          <Text size="sm">Accept Terms of use</Text>
        </Box>
      )
    }
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}





