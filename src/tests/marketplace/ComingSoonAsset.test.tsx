import { render, screen, fireEvent } from '@testing-library/react';
import { ComingSoonAsset } from '@/components/marketplace/assets/ComingSoonAsset';
import { vi } from 'vitest';

describe('ComingSoonAsset', () => {
  const mockProps = {
    title: 'Test Asset',
    type: 'Real Estate',
    totalValue: '$1,000,000',
    fractionPrice: '$1,000',
    fractions: 1000,
    returns: '10% annually',
    image: 'https://example.com/image.jpg',
    launchDate: '2024-01-01',
    onNotify: vi.fn(),
    isNotified: false
  };

  it('renders asset details correctly', () => {
    render(<ComingSoonAsset {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.type)).toBeInTheDocument();
    expect(screen.getByText(mockProps.totalValue)).toBeInTheDocument();
  });

  it('handles notification click', () => {
    render(<ComingSoonAsset {...mockProps} />);
    fireEvent.click(screen.getByText('Get Notified'));
    expect(mockProps.onNotify).toHaveBeenCalled();
  });
});