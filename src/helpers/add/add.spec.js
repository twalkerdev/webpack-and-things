import { add } from './add.js';

describe('Add', () => {
  it('should give the correct answer', () => {
    const x = add(5, 5);
    expect(x).toBe(10);
  });
});
