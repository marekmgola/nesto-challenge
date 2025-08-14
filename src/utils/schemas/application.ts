import { z } from "zod";

export const ApplicantSchema = z.object({
    phone: z.string(),
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
});

export type Applicant = z.infer<typeof ApplicantSchema>;

export const ApplicationSchema = z.object({
    id: z.string().readonly(),
    type: z.enum(["NEW", "RENEWAL", "REFINANCE"]),
    createdAt: z.string().readonly(),
    productId: z.number().optional(),
    applicants: z.array(ApplicantSchema),
});

export type Application = z.infer<typeof ApplicationSchema>;