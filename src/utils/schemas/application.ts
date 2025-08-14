import { z } from "zod";

export const ApplicantSchema = z.object({
    phone: z.string(),
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
});

export type Applicant = z.infer<typeof ApplicantSchema>;

export const ApplicationSchema = z.object({
    id: z.string().readonly(),
    token: z.string(),
    type: z.enum(["NEW", "RENEWAL", "REFINANCE"]),
    applicants: z.array(ApplicantSchema),
    productId: z.number().optional(),
    createdAt: z.string().readonly(),
});

export type Application = z.infer<typeof ApplicationSchema>;
