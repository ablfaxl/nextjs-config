import { FC } from 'react';

export const Button: FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
