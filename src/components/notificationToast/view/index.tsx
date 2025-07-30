import { createPortal } from 'react-dom';
import type { NotificationToastProps } from '../interface/notificationToast.interface';
import './notificationToast.scss';
import classNames from 'classnames';
import { useTheme } from '../../../contexts/useTheme';

export function NotificationToast({
  message,
  type = 'info',
  onClose,
}: NotificationToastProps) {
  const { theme } = useTheme();
  return createPortal(
    <div className={classNames('toast', type, theme)}>
      <span>{message}</span>
      <button onClick={onClose} className="closeBtn">
        ×
      </button>
    </div>,
    document.body,
  );
}
