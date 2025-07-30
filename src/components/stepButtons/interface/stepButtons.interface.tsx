import type { ButtonHTMLAttributes } from 'react';

export interface StepButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'next' | 'back';
  label?: string;
  disabled?: boolean;
}