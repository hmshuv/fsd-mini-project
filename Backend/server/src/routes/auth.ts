import { FastifyInstance } from "fastify";


export default async function (app: FastifyInstance) {
app.post("/auth/login", async (req, reply) => {
// Dev-only: accept any email, issue JWT
const body = req.body as { email?: string };
const email = body?.email ?? "dev@local";
const token = app.jwt.sign({ sub: email, role: "CLINICIAN" }, { expiresIn: "7d" });
return reply.send({ token });
});
}