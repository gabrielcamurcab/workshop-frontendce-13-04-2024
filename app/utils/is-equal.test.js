import { isEqual } from "./is-equal";

describe('isEqual', () => {
  test('result is different expected', () => {
    expect(isEqual(5,7)).toBe(false);
  });
  test('result is equal expected', () => {
    expect(isEqual(5,5)).toBe(true);
  })
});
