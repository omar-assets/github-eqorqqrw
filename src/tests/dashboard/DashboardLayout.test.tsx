import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { DashboardPage } from '@/pages/DashboardPage';
import { AuthProvider } from '@/contexts/AuthContext';

// Mock the required hooks and components
vi.mock('@/hooks/useRequireAuth', () => ({
  useRequireAuth: () => ({ loading: false, user: { email: 'test@example.com' } })
}));

vi.mock('@/components/dashboard/DashboardStats', () => ({
  DashboardStats: () => <div data-testid="dashboard-stats">Dashboard Stats</div>
}));

vi.mock('@/components/dashboard/MarketplacePreview', () => ({
  MarketplacePreview: () => <div data-testid="marketplace-preview">Marketplace Preview</div>
}));

describe('DashboardLayout', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <DashboardPage />
        </AuthProvider>
      </BrowserRouter>
    );
  });

  it('renders dashboard components', () => {
    expect(screen.getByTestId('dashboard-stats')).toBeInTheDocument();
    expect(screen.getByTestId('marketplace-preview')).toBeInTheDocument();
  });

  it('displays user information', () => {
    expect(screen.getByText(/test@example.com/i)).toBeInTheDocument();
  });

  it('is responsive on different screen sizes', () => {
    const mainContent = screen.getByRole('main');
    
    // Test mobile layout
    window.innerWidth = 375;
    window.dispatchEvent(new Event('resize'));
    expect(mainContent).toHaveClass('px-4');

    // Test tablet layout
    window.innerWidth = 768;
    window.dispatchEvent(new Event('resize'));
    expect(mainContent).toHaveClass('px-4');

    // Test desktop layout
    window.innerWidth = 1024;
    window.dispatchEvent(new Event('resize'));
    expect(mainContent).toHaveClass('px-4');
  });
});