import { useTheme } from '../../../contexts/useTheme';
import { ButtonWrapper, Select, Option } from './selectorButton.style';

export const SelectorButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ButtonWrapper>
      <Select
        value={theme}
        className={theme}
        onChange={(e) => setTheme(e.target.value as any)}
      >
        <Option className={theme} value="light">
          Light
        </Option>
        <Option className={theme} value="dark">
          Dark
        </Option>
        <Option className={theme} value="purple">
          Purple
        </Option>
      </Select>
    </ButtonWrapper>
  );
};
