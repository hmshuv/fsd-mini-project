import { FastifyInstance } from "fastify";
import { CreatePrediction } from "../schemas/predictions.js";
import { authGuard } from "../middleware/authGuard.js";


export default async function (app: FastifyInstance) {
app.addHook("preHandler", authGuard);


app.post("/predictions", async (req, reply) => {
const parsed = CreatePrediction.parse(req.body);
const { model, ...rest } = parsed;


// ensure model row exists (name+version unique)
const mdl = await app.prisma.model.upsert({
where: { name_version: { name: model.name, version: model.version } },
update: {},
create: { name: model.name, version: model.version }
});


const pred = await app.prisma.prediction.create({
data: { ...rest, modelId: mdl.id }
});
return reply.code(201).send(pred);
});
}