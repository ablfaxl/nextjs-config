import { render, screen } from '@testing-library/react';
import { Button } from '@/app/_components/button/button';

test('loads and displays greeting', async () => {
  render(<Button>Text</Button>);
  expect(screen.getByText('Text')).toBeTruthy();
});

test('check button', async () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByText('Click Me')).toBeTruthy();
});
