/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from '@testing-library/react';
import { DomExpect } from '../components/DomExpect/index';

describe('DOM断言:页面元素的断言', () => {
  // ...
  test('form validation without semi', () => {
    render(<DomExpect />);
    const form = screen.getByRole('form', { name: 'form' });
    const username = screen.getByRole('textbox', { name: 'form_username' });
    const age = screen.getByRole('spinbutton', { name: 'form_age' });
    const manCheckbox = screen.getByRole('radio', {
      checked: true,
      name: 'form_sex'
    });
    const womanCheckbox = screen.getByRole('radio', {
      checked: false,
      name: 'form_sex'
    });
    expect(username).toBeDisabled();
    expect(age).toBeEnabled();
    expect(age).toBeRequired();
    expect(manCheckbox).toBeChecked();
    expect(womanCheckbox).not.toBeChecked();
    expect(form).toHaveFormValues({
      username: 'glow',
      age: 26,
      sex: 'man'
    });
    expect(age).toHaveValue(26);
  });
  // ...
  test('visible validation with semi', () => {
    render(<DomExpect />);
    const username = screen.getByLabelText('username');
    const age = screen.getByLabelText('age');
    expect(username).toBeDisabled();
    expect(age).toBeEnabled();
    expect(age).toBeRequired();
  });
});
