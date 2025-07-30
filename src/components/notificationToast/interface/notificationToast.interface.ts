export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface NotificationToastProps {
    message: string;
    type: ToastType;
    duration?: number; 
    onClose?: () => void;
}