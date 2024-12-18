import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/Footer';

describe('Responsive Design Checks', () => {
  const resizeTo = (width: number) => {
    window.innerWidth = width;
    window.dispatchEvent(new Event('resize'));
  };

  describe('Header', () => {
    beforeEach(() => {
      render(<Header />);
    });

    it('shows mobile menu on small screens', () => {
      resizeTo(375);
      expect(screen.getByRole('button', { name: /menu/i })).toBeVisible();
      expect(screen.queryByRole('navigation')).not.toBeVisible();
    });

    it('shows full navigation on large screens', () => {
      resizeTo(1024);
      expect(screen.queryByRole('button', { name: /menu/i })).not.toBeVisible();
      expect(screen.getByRole('navigation')).toBeVisible();
    });
  });

  describe('Footer', () => {
    beforeEach(() => {
      render(<Footer />);
    });

    it('stacks content vertically on mobile', () => {
      resizeTo(375);
      const footer = screen.getByRole('contentinfo');
      expect(footer.firstElementChild).toHaveClass('grid-cols-1');
    });

    it('shows grid layout on desktop', () => {
      resizeTo(1024);
      const footer = screen.getByRole('contentinfo');
      expect(footer.firstElementChild).toHaveClass('md:grid-cols-4');
    });
  });
});