import React from 'react';
import { render, screen } from '@testing-library/react';
import Countdown from './Countdown';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Countdown', () => {
  it('renders labels and target', () => {
    render(<Countdown />);
    expect(screen.getByText(/Days/i)).toBeTruthy();
    expect(screen.getByText(/Target:/i)).toBeTruthy();
  });
});
