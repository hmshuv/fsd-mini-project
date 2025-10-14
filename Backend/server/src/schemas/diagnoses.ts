import { z } from "zod";
export const CreateDiagnosis = z.object({
encounterId: z.string().cuid(),
label: z.string().min(1),
code: z.string().optional(),
confirmed: z.boolean().optional()
});
export type CreateDiagnosis = z.infer<typeof CreateDiagnosis>;