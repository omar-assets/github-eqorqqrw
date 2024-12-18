import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchFAQ() {
  const [query, setQuery] = useState('');

  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for answers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 
                     focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
}