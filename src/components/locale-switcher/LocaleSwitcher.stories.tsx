import type { Meta, StoryObj } from '@storybook/nextjs';
import LocaleSwitcherSelect from './LocaleSwitcher';

const meta = {
  title: 'Components/LocaleSwitcher',
  component: LocaleSwitcherSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LocaleSwitcherSelect>;

export default meta;
type Story = StoryObj<typeof LocaleSwitcherSelect>;

export const Default: Story = {
  args: {},
};
