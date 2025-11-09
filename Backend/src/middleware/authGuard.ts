import { FastifyReply, FastifyRequest } from "fastify";
export async function authGuard(request: FastifyRequest, reply: FastifyReply) {
// @ts-ignore
return request.server.auth(request, reply);
}