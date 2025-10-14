import { z } from "zod";
export const CreateEncounter = z.object({
patientId: z.string().cuid(),
type: z.enum(["OUTPATIENT","INPATIENT","ER","TELEHEALTH"]).optional(),
startedAt: z.string().datetime().optional(),
notes: z.string().optional()
});
export type CreateEncounter = z.infer<typeof CreateEncounter>;