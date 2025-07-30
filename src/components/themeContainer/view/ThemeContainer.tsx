import { ReactNode } from 'react';
import '../../../styles/themes/light.css';
import '../../../styles/themes/dark.css';
import '../../../styles/themes/purple.css';
import { useTheme } from '../../../contexts/useTheme';
import { SelectorButton } from '../../selectorButton/view/SelectorButton.view';

interface Props {
  children: ReactNode;
}

export const ThemeContainer = ({ children }: Props) => {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <SelectorButton />
      {children}
    </div>
  );
};
