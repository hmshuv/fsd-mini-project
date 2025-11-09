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


app.post("/encounters/:id/attachments", async (req, reply) => {
const { id } = req.params as { id: string };

// For now, simulate file upload - in production you'd use multer or similar
const attachment = await app.prisma.attachment.create({
  data: {
    encounterId: id,
    kind: "image", // or "report" based on file type
    url: "uploaded-file-url", // This would be the actual uploaded file URL
    mimeType: "application/pdf", // or actual mime type
  }
});
return reply.code(201).send(attachment);
});
}
