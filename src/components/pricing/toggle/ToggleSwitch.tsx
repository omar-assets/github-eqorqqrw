import React from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  'aria-label': string;
}

export function ToggleSwitch({ checked, onChange, 'aria-label': ariaLabel }: ToggleSwitchProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={() => onChange(!checked)}
      className={`
        relative w-14 h-7 rounded-full p-1 transition-colors duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
        ${checked ? 'bg-primary' : 'bg-gray-200'}
      `}
    >
      <span className="sr-only">{ariaLabel}</span>
      <div
        className={`
          w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ease-in-out
          ${checked ? 'translate-x-7' : 'translate-x-0'}
        `}
      />
    </button>
  );
}