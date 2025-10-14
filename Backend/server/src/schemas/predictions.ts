import { z } from "zod";
export const CreatePrediction = z.object({
encounterId: z.string().cuid(),
model: z.object({ name: z.string(), version: z.string() }),
topLabel: z.string().optional(),
probabilities: z.record(z.number())
});
export type CreatePrediction = z.infer<typeof CreatePrediction>;