import { render, screen, renderHook } from '@testing-library/react';
import { RenderHook } from '../components/RenderHook';
import userEvent from '@testing-library/user-event';
import useCount from '../components/RenderHook/useCount';
import { act } from 'react-dom/test-utils';

describe('examples for render hook', () => {
  test('a test for component with useCount', async () => {
    render(<RenderHook />);
    const note = screen.getByRole('note');
    expect(note).toHaveTextContent('0');
    await userEvent.click(screen.getByRole('button'));
    expect(note).toHaveTextContent('1');
  });
  test('a test for useCount', () => {
    const { result } = renderHook(() => useCount());
    act(() => {
      result.current.increase();
    });
    expect(result.current.num).toBe(1);
  });
});
