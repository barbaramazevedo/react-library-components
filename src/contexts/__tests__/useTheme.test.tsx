import { renderHook } from '@testing-library/react';
import { ThemeProvider } from '../ThemeContext';
import { useTheme } from '../useTheme';

describe('useTheme hook', () => {
  test('deve retornar o contexto corretamente quando usado dentro do ThemeProvider', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    expect(result.current).toHaveProperty('theme');
    expect(result.current).toHaveProperty('setTheme');
  });

  test('deve lançar erro quando usado fora do ThemeProvider', () => {
    const renderWithoutProvider = () => {
      renderHook(() => useTheme());
    };

    expect(renderWithoutProvider).toThrow(
      'useTheme must be used inside a ThemeProvider',
    );
  });
});
