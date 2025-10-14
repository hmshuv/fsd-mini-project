import fp from "fastify-plugin";
import fastifyJwt from "@fastify/jwt";
import { env } from "../env.js";


export default fp(async (app) => {
await app.register(fastifyJwt, { secret: env.JWT_SECRET });
app.decorate("auth", async (request: any, reply: any) => {
try { await request.jwtVerify(); } catch { return reply.code(401).send({ message: "Unauthorized" }); }
});
});


declare module "fastify" {
interface FastifyInstance { auth: any }
}
