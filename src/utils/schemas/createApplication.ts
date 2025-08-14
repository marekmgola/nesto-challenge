import { z } from "zod";

export const CreateApplicationSchema = z.object({
    productId: z.number(),
});

export type CreateApplication = z.infer<typeof CreateApplicationSchema>;
