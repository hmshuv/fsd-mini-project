import { FastifyInstance } from "fastify";
import { CreateEncounter } from "../schemas/encounters.js";
import { authGuard } from "../middleware/authGuard.js";


export default async function (app: FastifyInstance) {
app.addHook("preHandler", authGuard);


app.get("/patients/:id/encounters", async (req) => {
const { id } = req.params as { id: string };
return app.prisma.encounter.findMany({ where: { patientId: id }, orderBy: { startedAt: "desc" } });
});


app.post("/encounters", async (req, reply) => {
const parsed = CreateEncounter.parse(req.body);
const enc = await app.prisma.encounter.create({ data: parsed });
return reply.code(201).send(enc);
});
}