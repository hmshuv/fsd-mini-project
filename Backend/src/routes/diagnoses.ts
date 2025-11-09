import { FastifyInstance } from "fastify";
import { CreateDiagnosis } from "../schemas/diagnoses.js";
import { authGuard } from "../middleware/authGuard.js";


export default async function (app: FastifyInstance) {
app.addHook("preHandler", authGuard);


app.get("/encounters/:id/diagnoses", async (req) => {
const { id } = req.params as { id: string };
return app.prisma.diagnosis.findMany({ where: { encounterId: id } });
});


app.post("/diagnoses", async (req, reply) => {
const parsed = CreateDiagnosis.parse(req.body);
const d = await app.prisma.diagnosis.create({ data: parsed });
return reply.code(201).send(d);
});
}