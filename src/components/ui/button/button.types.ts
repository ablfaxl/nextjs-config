import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './button';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
