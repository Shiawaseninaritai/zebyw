import { expression } from './RegexEmail';

describe('Testing RegexEmail', () => {
  test('Testing RegexEmail', () => {
    const email = 'email@gmail.com';
    const result = expression.test(email);
    expect(result).toBeTruthy();
  });
});
