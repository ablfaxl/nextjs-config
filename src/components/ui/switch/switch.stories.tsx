import { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/components/ui/switch/switch';

const meta = {
  title: 'Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSwitch: Story = {
  render: (arg) => <Switch {...arg} variant="default" />,
};

export const DesableSwitch: Story = {
  render: (arg) => <Switch {...arg} disabled />,
};
