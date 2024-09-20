import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@/components/ui/button/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (arg) => (
    <Button variant="default" {...arg}>
      Default
    </Button>
  ),
};

export const Destructive: Story = {
  render: (arg) => (
    <Button variant="destructive" {...arg}>
      Destructive
    </Button>
  ),
};

export const Ghost: Story = {
  render: (arg) => (
    <Button variant="ghost" {...arg}>
      Ghost
    </Button>
  ),
};

export const Link: Story = {
  render: (arg) => (
    <Button variant="link" {...arg}>
      Link
    </Button>
  ),
};

export const Outline: Story = {
  render: (arg) => (
    <Button variant="outline" {...arg}>
      Outline
    </Button>
  ),
};

export const Secondary: Story = {
  render: (arg) => (
    <Button variant="secondary" {...arg}>
      Secondary
    </Button>
  ),
};
