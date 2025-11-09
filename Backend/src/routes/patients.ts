import { FastifyInstance } from "fastify";
import { CreatePatient, UpdatePatient } from "../schemas/patients.js";
import { authGuard } from "../middleware/authGuard.js";


 export default async function (app: FastifyInstance) {
// app.addHook("preHandler", authGuard);


app.get("/patients", async (req) => {
return app.prisma.patient.findMany({ orderBy: { createdAt: "desc" }, take: 50 });
});


app.post("/patients", async (req, reply) => {
const parsed = CreatePatient.parse(req.body);
const patientData = {
  firstName: parsed.firstName,
  lastName: parsed.lastName,
  email: parsed.email,
  phone: parsed.phone,
  dateOfBirth: parsed.dateOfBirth ? new Date(parsed.dateOfBirth) : null,
  address: parsed.address,
  bloodType: parsed.bloodType,
  height: parsed.height,
  weight: parsed.weight,
  allergies: parsed.allergies,
};
const patient = await app.prisma.patient.create({ data: patientData });
return reply.code(201).send(patient);
});


app.get("/patients/:id", async (req, reply) => {
const { id } = req.params as { id: string };
const patient = await app.prisma.patient.findUnique({
  where: { id },
  include: {
    encounters: {
      include: {
        diagnoses: true,
        predictions: true,
        attachments: true
      },
      orderBy: { createdAt: "desc" }
    }
  }
});
if (!patient) return reply.code(404).send({ message: "Not found" });
return patient;
});


app.put("/patients/:id", async (req, reply) => {
const { id } = req.params as { id: string };
const parsed = UpdatePatient.parse(req.body);
const patient = await app.prisma.patient.update({
  where: { id },
  data: parsed
});
return patient;
});


app.get("/patients/:id/reports", async (req, reply) => {
const { id } = req.params as { id: string };
const encounters = await app.prisma.encounter.findMany({
  where: { patientId: id },
  include: {
    diagnoses: true,
    predictions: {
      include: { model: true }
    },
    attachments: true
  },
  orderBy: { createdAt: "desc" }
});

const reports = encounters.map((encounter: any) => ({
  id: encounter.id,
  title: encounter.diagnoses[0]?.label || "Medical Report",
  date: encounter.createdAt.toISOString().split('T')[0],
  type: "Medical Report",
  status: encounter.diagnoses[0]?.confirmed ? "Completed" : "Pending",
  confidence: encounter.predictions[0]?.probabilities ?
    Math.max(...Object.values(encounter.predictions[0].probabilities as Record<string, number>)) * 100 : 0,
  diagnosis: encounter.diagnoses[0]?.label || "Pending",
  attachments: encounter.attachments
}));

return reports;
});
}
