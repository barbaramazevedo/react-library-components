import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../../../contexts/ThemeContext';
import { SelectorButton } from './selectorButton.view';

describe('SelectorButton', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.className = '';
  });

  test('deve renderizar com o tema padrão "light"', () => {
    render(
      <ThemeProvider>
        <SelectorButton />
      </ThemeProvider>,
    );

    const select = screen.getByRole('combobox');
    expect(select).toHaveValue('light');
  });

  test('deve permitir mudar o tema e atualizá-la', async () => {
    render(
      <ThemeProvider>
        <SelectorButton />
      </ThemeProvider>,
    );

    const select = screen.getByRole('combobox');
    await userEvent.selectOptions(select, 'dark');

    expect(select).toHaveValue('dark');
    expect(document.body.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
  });
});
