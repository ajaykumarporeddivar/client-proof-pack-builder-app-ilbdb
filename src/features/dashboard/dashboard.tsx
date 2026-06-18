```typescript
// src/features/dashboard/dashboard.tsx
'use client';

import { cn } from '@/lib/utils';
import { data } from '@/lib/data';
import { Record } from '@/lib/types';

const Dashboard = () => {
  return (
    <div className={cn('bg-zinc-50', 'p-4', 'md:p-6', 'lg:p-8')}>
      <h1 className={cn('font-bold', 'text-zinc-900', 'tracking-tight')}>Dashboard</h1>
      <ul>
        {data.records.map((record: Record) => (
          <li key={record.id} className={cn('bg-white', 'border', 'border-zinc-200', 'rounded-xl', 'shadow-sm', 'p-4', 'md:p-6', 'lg:p-8')}>
            <h2 className={cn('font-bold', 'text-zinc-900', 'tracking-tight')}>{record.name}</h2>
            <p className={cn('text-zinc-600')}>{record.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
```