import { z } from "zod";

export const ContactFormSchema = z.object({
    applicants: z.array(
        z.object({
            firstName: z.string().min(1, "First name is required"),
            lastName: z.string().min(1, "Last name is required"),
            email: z.string().email("Please enter a valid email address"),
            phone: z.string().min(10, "Phone number must be at least 10 digits"),
        })
    ).min(1, "At least one applicant is required"),
    applicationId: z.string(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
