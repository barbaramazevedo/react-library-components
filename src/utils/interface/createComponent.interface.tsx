export interface createComponentProps {
  elementType: string;
  id?: string;
  type?: string;
  className?: string;
  text?: string;
  title?: string;
  href?: string;
  src?: string;
  width?: string;
  height?: string;
  target?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}