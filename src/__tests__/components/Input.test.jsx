import { describe, expect, test, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { Input } from '@/components/Input/Input';

describe('Input', () => {
  test('calls onChange when text is changed', () => {
    const handleChange = vi.fn();
    render(<Input value="" onChange={handleChange} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});