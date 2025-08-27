# Keysy Listings App

A simple full-stack web application built with the **T3 Stack**:
**Next.js, TypeScript, Prisma, tRPC, TailwindCSS, and Supabase (PostgreSQL).**

The app connects to a Supabase database, fetches car listings through a tRPC API, and displays them on a `/listings` page.
It is deployed on [Render](https://render.com).

Live Webpage: [https://keysy-listings.onrender.com/listings](https://keysy-listings.onrender.com/)
Github repository: [https://github.com/tariq-pjetrovic/keysy-listings](https://github.com/tariq-pjetrovic/keysy-listings)

---

## Features
- **Supabase PostgreSQL** database with a `listings` table:
  - `id` (UUID, primary key)
  - `make` (string)
  - `model` (string)
  - `year` (integer)
  - `price` (integer)
- **Prisma ORM** for type-safe DB access.
- **tRPC Router** with a `list` endpoint to fetch listings.
- **Next.js App Router frontend** with a `/listings` page.
- **Deployed on Render** with environment variables for DB access.

---

## Tech Stack
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [tRPC](https://trpc.io/)
- [Prisma](https://www.prisma.io/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Render](https://render.com/)

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/tariq-pjetrovic/keysy-listings.git
cd keysy-listings
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```env
DATABASE_URL="postgresql:513290914587@hsil45//postgres:@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1&sslmode=require"
SKIP_ENV_VALIDATION=true
```

### 4. Run locally
```bash
npm run dev
```
### 5. Open http://localhost:3000/listings
