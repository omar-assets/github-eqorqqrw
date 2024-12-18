import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { signOut } from '@/lib/firebase/auth/index';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { MobileNavigation } from './MobileNavigation';
import { AuthButtons } from './AuthButtons';
import { SkipLink } from '../ui/SkipLink';
import { ROUTES } from '@/utils/constants';
import { logger } from '@/utils/logger';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      logger.info('User logged out successfully');
      navigate(ROUTES.HOME);
    } catch (error) {
      logger.error('Logout error:', error);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href={ROUTES.MARKETPLACE}>Marketplace</NavLink>
            <NavLink href={ROUTES.HOW_IT_WORKS}>How it Works</NavLink>
            <NavLink href={ROUTES.ABOUT}>About</NavLink>
            <NavLink href={ROUTES.FAQS}>FAQs</NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            ) : (
              <AuthButtons />
            )}
          </div>

          <MobileMenu 
            isOpen={isMenuOpen} 
            onToggle={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </div>
      </div>

      <MobileNavigation 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </header>
  );
}