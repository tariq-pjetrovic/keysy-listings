"use client";
import { api } from "@/trpc/react";

export default function ListingsPage() {
  const { data, isLoading, error } = api.listings.list.useQuery();

  if (isLoading) return <main className="p-6">Loading…</main>;
  if (error) return <main className="p-6">Error: {error.message}</main>;
  if (!data?.length) return <main className="p-6">No listings yet.</main>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Listings</h1>
      <ul className="space-y-2">
        {data.map((l) => (
          <li key={l.id} className="rounded border p-3">
            <div className="font-medium">{l.make} {l.model}</div>
            <div className="text-sm opacity-80">Year: {l.year} • Price: ${l.price}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}