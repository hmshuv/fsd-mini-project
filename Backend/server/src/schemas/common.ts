import { z } from "zod";
export const IdParam = z.object({ id: z.string().cuid() });
export type IdParam = z.infer<typeof IdParam>;