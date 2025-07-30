import type { ToastType } from "../../interface/notificationToast.interface";

export interface useToastProps {
  message: string;
  duration?: number;
  type: ToastType;
}