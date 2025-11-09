import { FastifyInstance } from "fastify";
import health from "./health.js";
import auth from "./auth.js";
import patients from "./patients.js";
import encounters from "./encounters.js";
import diagnoses from "./diagnoses.js";
import predictions from "./predictions.js";


export default async function routes(app: FastifyInstance) {
app.register(health, { prefix: "/api" });
app.register(auth, { prefix: "/api" });
app.register(patients, { prefix: "/api" });
app.register(encounters, { prefix: "/api" });
app.register(diagnoses, { prefix: "/api" });
app.register(predictions, { prefix: "/api" });
}
