```typescript
// src/features/exports/exports.tsx
'use client';

import { cn } from '@/lib/utils';
import { data } from '@/lib/data';
import { Record } from '@/lib/types';

const Exports = () => {
  const handleExport = () => {
    // Handle export functionality
  };

  return (
    <div className={cn('bg-zinc-50', 'p-4', 'md:p-6', 'lg:p-8')}>
      <h1 className={cn('font-bold', 'text-zinc-900', 'tracking-tight')}>Exports</h1>
      <ul>
        {data.records.map((record: Record) => (
          <li key={record.id} className={cn('bg-white', 'border', 'border-zinc-200', 'rounded-xl', 'shadow-sm', 'p-4', 'md:p-6', 'lg:p-8')}>
            <h2 className={cn('font-bold', 'text-zinc-900', 'tracking-tight')}>{record.name}</h2>
            <p className={cn('text-zinc-600')}>{record.description}</p>
            <button
              onClick={handleExport}
              className={cn('bg-zinc-900', 'text-white', 'hover:bg-zinc-700', 'px-4', 'py-2', 'rounded-lg', 'mt-4')}
            >
              Export
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exports;
```