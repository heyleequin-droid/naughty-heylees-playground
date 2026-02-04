import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BarMenu from './BarMenu';

describe('BarMenu component', () => {
  it('renders categories and items', () => {
    render(<BarMenu />);

    // categories
    expect(screen.getByText('Drinks')).toBeInTheDocument();
    expect(screen.getByText('Kisses')).toBeInTheDocument();
    expect(screen.getByText('Upgrades')).toBeInTheDocument();

    // sample items
    expect(screen.getByText(/Flirty Martini/i)).toBeInTheDocument();
    expect(screen.getByText(/Cheek Kiss/i)).toBeInTheDocument();
    expect(screen.getByText(/Private Booth/i)).toBeInTheDocument();
  });
});
