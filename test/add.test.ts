import { describe, it, expect } from 'vitest';
import { add } from '../src/add';

describe('add function', () => {
  it('adds two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
    expect(add(-1, -1)).toBe(-2);
  });

  it('handles zero', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });

  it('handles decimal numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});