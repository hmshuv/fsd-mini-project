import { z } from "zod";

export const CreatePatient = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  dateOfBirth: z.string().datetime().optional(),
  address: z.string().optional(),
  bloodType: z.string().optional(),
  height: z.number().optional(),
  weight: z.number().optional(),
  allergies: z.string().optional(),
});

export const UpdatePatient = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  phone: z.string().optional(),
  dateOfBirth: z.string().datetime().optional(),
  address: z.string().optional(),
  bloodType: z.string().optional(),
  height: z.number().optional(),
  weight: z.number().optional(),
  allergies: z.string().optional(),
});

export type CreatePatient = z.infer<typeof CreatePatient>;
export type UpdatePatient = z.infer<typeof UpdatePatient>;
