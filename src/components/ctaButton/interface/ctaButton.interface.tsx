export interface ctaButtonProps {
  id: string;
  elementType: string;
  type?: string;
  text: string;
  className: 'primary' | 'secondary' | 'disable' | 'btn-close';
  currentValue?: number;
  operation?: 'sum' | 'deduct' | 'remove' | 'alert';
  alertMessage?: string;
  onClick?: (e: React.MouseEvent) => void;
}
