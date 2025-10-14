import { FastifyInstance } from "fastify";
import { CreatePatient } from "../schemas/patients.js";
import { authGuard } from "../middleware/authGuard.js";


export default async function (app: FastifyInstance) {
app.addHook("preHandler", authGuard);


app.get("/patients", async (req) => {
return app.prisma.patient.findMany({ orderBy: { createdAt: "desc" }, take: 50 });
});


app.post("/patients", async (req, reply) => {
const parsed = CreatePatient.parse(req.body);
const patient = await app.prisma.patient.create({ data: parsed });
return reply.code(201).send(patient);
});


app.get("/patients/:id", async (req, reply) => {
const { id } = req.params as { id: string };
const patient = await app.prisma.patient.findUnique({ where: { id }, include: { encounters: true } });
if (!patient) return reply.code(404).send({ message: "Not found" });
return patient;
});
}