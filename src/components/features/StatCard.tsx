import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/20">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <div className="text-xl font-bold text-primary">{value}</div>
          <div className="text-sm text-gray-100">{label}</div>
        </div>
      </div>
    </div>
  );
}