import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { ROUTES } from '@/utils/constants';

export function DashboardButton() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <button
      onClick={() => navigate(ROUTES.DASHBOARD)}
      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
    >
      <LayoutDashboard className="h-5 w-5" />
      <span>Dashboard</span>
    </button>
  );
}