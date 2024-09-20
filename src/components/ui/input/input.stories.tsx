import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/input/input';

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  render: (arg) => <Input placeholder="type something" {...arg} />,
};
