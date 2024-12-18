import React, { useEffect, useRef } from 'react';
import { MobileNavItem } from './MobileNavItem';
import { ROUTES } from '@/utils/constants';
import { Building2, BookOpen, Users, HelpCircle, LogIn, UserPlus, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useClickAway } from '@/hooks/useClickAway';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const { user } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Handle click outside to close
  useClickAway(menuRef, onClose);

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const mainNavItems = [
    { icon: Building2, label: 'Marketplace', href: ROUTES.MARKETPLACE },
    { icon: BookOpen, label: 'How it Works', href: ROUTES.HOW_IT_WORKS },
    { icon: Users, label: 'About', href: ROUTES.ABOUT },
    { icon: HelpCircle, label: 'FAQs', href: ROUTES.FAQS }
  ];

  const authNavItems = user ? [] : [
    { icon: LogIn, label: 'Sign In', href: ROUTES.LOGIN },
    { icon: UserPlus, label: 'Get Started', href: ROUTES.REGISTER, primary: true }
  ];

  return (
    <div 
      className="lg:hidden fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
    >
      <div 
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl animate-in slide-in-from-right duration-300"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="px-4 py-4 border-b border-gray-200 flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">Menu</span>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-1">
              {mainNavItems.map((item) => (
                <MobileNavItem
                  key={item.href}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  onClick={onClose}
                />
              ))}
            </div>

            {/* Auth Navigation */}
            {authNavItems.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                {authNavItems.map((item) => (
                  <MobileNavItem
                    key={item.href}
                    icon={item.icon}
                    label={item.label}
                    href={item.href}
                    primary={item.primary}
                    onClick={onClose}
                  />
                ))}
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}