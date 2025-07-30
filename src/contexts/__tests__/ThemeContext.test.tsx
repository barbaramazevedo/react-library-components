import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../ThemeContext';
import { useTheme } from '../useTheme';

const TestComponent = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <p data-testid="theme">{theme}</p>
      <button onClick={() => setTheme('dark')}>Set Dark Theme</button>
    </>
  );
};

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.className = '';
  });

  test('deve iniciar com tema padrão "light" se não houver nada no localStorage', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(document.body.classList.contains('light')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('light');
  });

  test('deve carregar o tema do localStorage', () => {
    localStorage.setItem('theme', 'purple');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('purple');
    expect(document.body.classList.contains('purple')).toBe(true);
  });

  test('deve atualizar o tema e salvar no localStorage', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button', { name: /set dark theme/i });
    await userEvent.click(button);

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.body.classList.contains('dark')).toBe(true);
  });
});
