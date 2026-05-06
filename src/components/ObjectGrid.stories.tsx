import type { Meta, StoryObj } from '@storybook/react-vite'
import { ObjectGrid } from './ObjectGrid'

const meta = {
  title: 'Components/ObjectGrid',
  component: ObjectGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'text',
      description: 'String in the format "x,y DIRECTION"',
    },
  },
} satisfies Meta<typeof ObjectGrid>

export default meta

type Story = StoryObj<typeof meta>

export const North: Story = {
  args: {
    placement: '1,1 NORTH',
  },
}

export const East: Story = {
  args: {
    placement: '2,3 EAST',
  },
}

export const SouthWestBoundary: Story = {
  args: {
    placement: '0,0 SOUTH',
  },
}

export const NorthEastBoundary: Story = {
  args: {
    placement: '4,4 WEST',
  },
}

export const InvalidInput: Story = {
  args: {
    placement: '5,1 UP',
  },
}
