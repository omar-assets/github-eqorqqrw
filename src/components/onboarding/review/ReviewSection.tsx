import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, ChevronRight } from 'lucide-react';

interface ReviewSectionProps {
  icon: LucideIcon;
  title: string;
  editRoute: string;
  children: React.ReactNode;
}

export function ReviewSection({ icon: Icon, title, editRoute, children }: ReviewSectionProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <h3 className="font-medium text-gray-900">{title}</h3>
        </div>
        <Link
          to={editRoute}
          className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-medium transition-colors"
        >
          Edit
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}