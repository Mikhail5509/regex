import Validator from '../validator';


describe('Validator', () => {
  test('valid username with letters and numbers', () => {
    expect(Validator.validateUsername('user123')).toBe(true);
  });

  test('valid username with hyphens and underscores', () => {
    expect(Validator.validateUsername('user_name-123')).toBe(true);
  });

  test('username starting with a letter', () => {
    expect(Validator.validateUsername('a1b2c3')).toBe(true);
  });

  test('username starting with a hyphen', () => {
    expect(Validator.validateUsername('-user')).toBe(false);
  });

  test('username ending with a digit', () => {
    expect(Validator.validateUsername('user123')).toBe(false);
  });

  test('username with more than 3 consecutive digits', () => {
    expect(Validator.validateUsername('user1234')).toBe(false);
  });

  test('username with special characters', () => {
    expect(Validator.validateUsername('user@name')).toBe(false);
  });

  test('username with valid length', () => {
    expect(Validator.validateUsername('a_b-c123')).toBe(true);
  });

  test('username with invalid length', () => {
    expect(Validator.validateUsername('a'.repeat(21))).toBe(false);
  });
});
