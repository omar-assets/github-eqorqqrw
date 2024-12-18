import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;
  
  return (
    <Link
      to={href}
      className={`
        relative px-3 py-2 text-base font-medium transition-colors
        ${isActive 
          ? 'text-primary' 
          : 'text-gray-600 hover:text-gray-900'
        }
        before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5
        before:bg-primary before:transform before:scale-x-0 before:transition-transform
        hover:before:scale-x-100 ${isActive ? 'before:scale-x-100' : ''}
      `}
    >
      {children}
    </Link>
  );
}