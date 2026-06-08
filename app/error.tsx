'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="m-8 rounded-3xl border border-red-500 bg-red-950/80 p-8 text-white">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <p className="mt-4 text-slate-200">{error.message}</p>
      <button
        className="mt-6 rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
