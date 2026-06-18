```typescript
// src/features/intake/intake.tsx
'use client';

import { cn } from '@/lib/utils';
import { Record } from '@/lib/types';
import { useState } from 'react';

const Intake = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className={cn('bg-zinc-50', 'p-4', 'md:p-6', 'lg:p-8')}>
      <h1 className={cn('font-bold', 'text-zinc-900', 'tracking-tight')}>Intake</h1>
      <form onSubmit={handleSubmit}>
        <label className={cn('block', 'text-zinc-600', 'mb-2')} htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={cn('block', 'w-full', 'p-2', 'border', 'border-zinc-200', 'rounded-md')}
        />
        <label className={cn('block', 'text-zinc-600', 'mt-4', 'mb-2')} htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={cn('block', 'w-full', 'p-2', 'border', 'border-zinc-200', 'rounded-md')}
        />
        <button
          type="submit"
          className={cn('bg-zinc-900', 'text-white', 'hover:bg-zinc-700', 'px-4', 'py-2', 'rounded-lg', 'mt-4')}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Intake;
```