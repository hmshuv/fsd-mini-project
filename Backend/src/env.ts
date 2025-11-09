export const env = {
    PORT: Number(process.env.PORT ?? 4000),
    DATABASE_URL: process.env.DATABASE_URL!,
    JWT_SECRET: process.env.JWT_SECRET ?? "devdevdev",
    CORS_ORIGIN: process.env.CORS_ORIGIN ?? "http://localhost:3000",
    BCRYPT_ROUNDS: Number(process.env.BCRYPT_ROUNDS ?? 10),
    };
