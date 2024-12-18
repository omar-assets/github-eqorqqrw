import React from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import { ToggleLabel } from './ToggleLabel';
import { Tooltip } from './Tooltip';

interface PricingToggleProps {
  isAnnual: boolean;
  onChange: (isAnnual: boolean) => void;
  annualDiscount?: number;
}

export function PricingToggle({ isAnnual, onChange, annualDiscount = 20 }: PricingToggleProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <ToggleLabel
          active={!isAnnual}
          text="Monthly"
          tooltipText="Pay month-to-month with flexibility to cancel anytime"
        />
        
        <ToggleSwitch
          checked={isAnnual}
          onChange={onChange}
          aria-label={`Switch to ${isAnnual ? 'monthly' : 'annual'} billing`}
        />
        
        <ToggleLabel
          active={isAnnual}
          text="Annual"
          tooltipText={`Save ${annualDiscount}% by paying annually`}
        >
          <span className="ml-1.5 text-primary text-sm">
            Save {annualDiscount}%
          </span>
        </ToggleLabel>
      </div>

      {isAnnual && (
        <Tooltip>
          Annual plans are billed once for the entire year and include a {annualDiscount}% discount
        </Tooltip>
      )}
    </div>
  );
}