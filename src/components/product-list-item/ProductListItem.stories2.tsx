import type { Meta, StoryObj } from '@storybook/react';
import ProductListItem from './ProductListItem';

const meta = {
  title: 'Components/ProductListItem',
  component: ProductListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '600px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductListItem>;

export default meta;
type Story = StoryObj<typeof ProductListItem>;

const sampleProduct = {
  id: 1,
  name: 'Fixed 5 Year',
  family: 'STANDARD' as const,
  type: 'FIXED' as const,
  term: '5_YEAR' as const,
  insurable: true,
  insurance: 'CONVENTIONAL' as const,
  prepaymentOption: 'STANDARD' as const,
  restrictionsOption: 'NO_RESTRICTIONS' as const,
  restrictions: 'No restrictions apply',
  fixedPenaltySpread: '3%',
  helocOption: 'HELOC_WITHOUT' as const,
  helocDelta: 0,
  lenderName: 'Sample Bank',
  lenderType: 'A Lender',
  rateHold: '90_DAYS' as const,
  rate: 3.99,
  ratePrimeVariance: 0,
  bestRate: 3.99,
  created: '2025-08-15T07:00:00.000Z',
  updated: '2025-08-15T07:00:00.000Z',
};

export const Default: Story = {
  args: {
    product: sampleProduct,
    isFirst: true,
    compact: false,
  },
};

export const Compact: Story = {
  args: {
    product: sampleProduct,
    isFirst: true,
    compact: true,
  },
};

export const WithSeparator: Story = {
  args: {
    product: sampleProduct,
    isFirst: false,
    compact: false,
  },
};
