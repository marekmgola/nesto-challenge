import type { Meta, StoryObj } from '@storybook/nextjs';
import Spinner from './Spinnner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'text',
      description: 'CSS variable name for the spinner color',
    },
    size: {
      control: 'number',
      description: 'Size of the spinner in pixels',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    color: '--color_yellow',
    size: 50,
  },
};

export const Large: Story = {
  args: {
    color: '--color_yellow',
    size: 100,
  },
};

export const Small: Story = {
  args: {
    color: '--color_yellow',
    size: 25,
  },
};
