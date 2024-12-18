import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface MobileNavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  primary?: boolean;
  onClick?: () => void;
}

export function MobileNavItem({ icon: Icon, label, href, primary, onClick }: MobileNavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      onClick={onClick}
      className={`
        group flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg
        transition-colors duration-200
        ${primary 
          ? 'bg-primary text-white hover:bg-primary-medium'
          : isActive
            ? 'bg-primary/10 text-primary'
            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
        }
      `}
    >
      <Icon className={`h-5 w-5 ${primary ? 'text-white' : isActive ? 'text-primary' : 'text-gray-400 group-hover:text-gray-500'}`} />
      <span>{label}</span>
    </Link>
  );
}