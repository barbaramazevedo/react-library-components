import { useEffect, useRef, useState } from 'react';
import type { useToastProps } from './interface/notificationToast.interface';

export function useNotificationToast() {
  const [toastData, setToastData] = useState<useToastProps | null>(null);
  const [isHiding, setIsHiding] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const animationDuration = 300;

  const triggerToast = ({ message, type, duration = 4000 }: useToastProps) => {
    console.log(message, type, duration);
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsHiding(false);
    setToastData({ message, type, duration });

    timerRef.current = setTimeout(() => {
      startHiding();
    }, duration);
  };

  const startHiding = () => {
    setIsHiding(true);
    timerRef.current = setTimeout(() => {
      setToastData(null);
      setIsHiding(false);
    }, animationDuration);
  };

  const closeToast = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    startHiding();
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return { toastData, isHiding, triggerToast, closeToast };
}
