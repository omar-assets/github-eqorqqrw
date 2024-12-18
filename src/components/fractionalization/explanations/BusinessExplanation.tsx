import React from 'react';
import { Briefcase } from 'lucide-react';

export function BusinessExplanation() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">Business Equity Fractionalization</h3>
      </div>

      <div className="italic text-gray-600 border-l-4 border-primary/20 pl-4">
        "As a startup founder, I needed growth capital without giving up control. Fractionalization allowed me to sell 20% of my equity to 100 investors while maintaining operational autonomy." - Sarah Chen, Tech Entrepreneur
      </div>

      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Business equity fractionalization revolutionizes how companies raise capital and how investors participate in business growth. By dividing ownership into smaller units, companies can access funding while investors gain exposure to promising ventures.
        </p>

        <div className="bg-primary/5 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-2">Example Scenario:</h4>
          <p className="text-gray-600 mb-4">
            A growing tech company valued at $10 million offers 10% equity through fractionalization:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• 1,000 fractions at $1,000 each</li>
            <li>• Quarterly dividend distributions</li>
            <li>• Regular shareholder updates</li>
            <li>• Secondary market trading options</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-2">Interactive Exercise:</h4>
        <p className="text-gray-600">
          If you were investing $5,000 in business equity, how would you allocate it?
        </p>
        <ul className="space-y-2 text-gray-600 mt-4">
          <li>• Early-stage startups (high risk/reward)</li>
          <li>• Established SMEs (moderate risk/reward)</li>
          <li>• Franchise businesses (lower risk/reward)</li>
        </ul>
      </div>

      <div className="text-gray-600">
        <strong className="text-primary">Key Takeaway:</strong> Business equity fractionalization creates win-win scenarios for companies seeking capital and investors looking for growth opportunities.
      </div>
    </div>
  );
}