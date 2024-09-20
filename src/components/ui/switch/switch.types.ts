import * as SwitchPrimitives from '@radix-ui/react-switch';

import { VariantProps } from 'class-variance-authority';
import { switchVariant } from './switch';

export type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
> &
  VariantProps<typeof switchVariant>;
