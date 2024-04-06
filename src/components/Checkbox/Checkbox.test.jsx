import { describe, expect, test, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { Checkbox } from '@/components/Checkbox/Checkbox';

describe('Checkbox', () => {
  test('changes state when clicked', () => {
    const handleChange = vi.fn();
    render(<Checkbox checked={false} onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
