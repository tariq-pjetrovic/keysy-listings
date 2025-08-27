import { PrismaClient } from "@prisma/client";

function normalizeDbUrl(url?: string) {
  if (!url) return url;
  const u = new URL(url);
  if (u.host.includes("pooler.supabase.com")) {
    const set = (k: string, v: string) => { if (!u.searchParams.has(k)) u.searchParams.set(k, v); };
    set("pgbouncer", "true");
    set("connection_limit", "1");
    set("sslmode", "require");
    set("statement_cache_size", "0");
  }
  return u.toString();
}

export const db = new PrismaClient({
  log: ["error", "warn"],
  datasources: { db: { url: normalizeDbUrl(process.env.DATABASE_URL) } },
});