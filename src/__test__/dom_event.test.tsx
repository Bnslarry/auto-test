import { fireEvent, render, screen } from '@testing-library/react';
import { DomEvent } from '../components/DomEvent';
import userEvent from '@testing-library/user-event';

describe('Dom 组件绑定事件触发模拟', () => {
  test('mock events with fireEvent', () => {
    const clickEvent = jest.fn();
    render(<DomEvent onClick={clickEvent} />);
    fireEvent.click(screen.getByRole('note'));
    expect(clickEvent).toBeCalled();
    expect(clickEvent).toBeCalledTimes(1);
  });
  test('mock events with userEvent', async () => {
    const clickEvent = jest.fn();
    render(<DomEvent onClick={clickEvent} />);
    await userEvent.click(screen.getByRole('note'));
    expect(clickEvent).toBeCalled();
    expect(clickEvent).toBeCalledTimes(1);
  });
});
