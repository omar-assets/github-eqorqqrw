import React from 'react';

interface ReviewFieldProps {
  label: string;
  value?: string | null;
  capitalize?: boolean;
}

export function ReviewField({ label, value, capitalize }: ReviewFieldProps) {
  if (!value) return null;

  return (
    <div>
      <dt className="text-sm text-gray-500 mb-1">{label}</dt>
      <dd className={`text-gray-900 ${capitalize ? 'capitalize' : ''}`}>
        {value}
      </dd>
    </div>
  );
}