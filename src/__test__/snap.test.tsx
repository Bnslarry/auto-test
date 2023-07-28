import { render, screen } from '@testing-library/react';
import { DomSnap } from '../components/DomSnap';

describe('examples for snap', () => {
  test('a test for component snap', () => {
    const { baseElement } = render(<DomSnap />);
    expect(baseElement).toMatchSnapshot();
  });

  test('a test for part component snap', () => {
    render(<DomSnap />);
    expect(
      screen.getByRole('textbox', { name: 'form_username' })
    ).toMatchSnapshot();
  });
  test('a test for string snap', () => {
    expect('a test for string snap').toMatchSnapshot();
  });
});
