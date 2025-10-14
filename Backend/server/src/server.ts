import Fastify from "fastify";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import jwt from "@fastify/jwt";
import routes from "./routes/index.js";
import prismaPlugin from "./plugins/prisma.js";
import { env } from "./env.js";


const app = Fastify({ logger: true });


await app.register(helmet);
await app.register(cors, { origin: env.CORS_ORIGIN, credentials: true });
await app.register(rateLimit, { max: 100, timeWindow: "1 minute" });
await app.register(jwt, { secret: env.JWT_SECRET });
await app.register(prismaPlugin);
await app.register(routes);


app.listen({ port: env.PORT, host: "0.0.0.0" }).catch((err) => {
app.log.error(err);
process.exit(1);
});