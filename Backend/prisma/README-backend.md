# Aimed API


## Prereqs
- Docker Desktop (or Postgres locally)
- Node 20+ (if running outside Docker)


## Quick start (Docker)
1. `docker compose up --build`
2. API is at `http://localhost:4000/api/ping`
3. Log in (dev): `POST /api/auth/login` -> copy token
4. Use token for subsequent requests.


## Local dev (no Docker)
1. Create Postgres and set `DATABASE_URL` in `server/.env`
2. `npm --prefix server i`
3. `npm --prefix server run migrate`
4. `npm --prefix server run dev`


## Migrations & Studio
- Update schema in `prisma/schema.prisma`
- `npx prisma migrate dev --name <change>`
- `npx prisma studio` to view data


## Security notes
- JWT secret must be rotated for prod.
- Put server behind HTTPS; consider OAuth/OIDC provider.
- Enable audit logging and stricter CORS in prod.


## Connecting from Next.js
Set env in frontend and call endpoints: