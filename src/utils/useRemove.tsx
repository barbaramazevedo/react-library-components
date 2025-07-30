import { useState } from 'react';

export function useRemove(initialVisible = true) {
  const [isVisible, setIsVisible] = useState(initialVisible);

  const remove = () => setIsVisible(false);

  return { isVisible, remove };
}