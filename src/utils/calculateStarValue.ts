import type { MouseEvent } from 'react';

export function calculateStarValue(
  event: MouseEvent<HTMLElement>,
  starIndex: number,
): number {
  const { left, width } = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - left;
  const percent = x / width;
  return starIndex - (percent < 0.5 ? 0.5 : 0);
}
