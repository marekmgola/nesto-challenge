import type { Meta, StoryObj } from '@storybook/react';
import Banner from './Banner';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'info'],
    },
    message: {
      control: 'text',
    },
    autoHide: {
      control: 'boolean',
    },
    duration: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof Banner>;

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Operation completed successfully!',
    autoHide: true,
    duration: 5000,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'An error occurred. Please try again.',
    autoHide: false,
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: 'Your application is being processed.',
    autoHide: true,
    duration: 3000,
  },
};
