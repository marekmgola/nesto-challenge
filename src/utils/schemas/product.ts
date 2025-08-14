import { z } from "zod";

export const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    family: z.enum(["VALUE_FLEX", "STANDARD"]),
    type: z.enum(["VARIABLE", "FIXED"]),
    term: z.enum([
        "1_YEAR",
        "2_YEAR",
        "3_YEAR",
        "4_YEAR",
        "5_YEAR",
        "6_YEAR",
        "7_YEAR",
        "10_YEAR",
    ]),
    insurable: z.boolean(),
    insurance: z.enum(["INSURED", "CONVENTIONAL"]),
    prepaymentOption: z.enum(["STANDARD", "ENHANCED"]),
    restrictionsOption: z.enum([
        "NO_RESTRICTIONS",
        "SOME_RESTRICTIONS",
        "MORE_RESTRICTIONS",
    ]),
    restrictions: z.string(),
    fixedPenaltySpread: z.string(),
    helocOption: z.enum(["HELOC_WITH", "HELOC_WITHOUT"]),
    helocDelta: z.number(),
    lenderName: z.string(),
    lenderType: z.string(),
    rateHold: z.enum(["30_DAYS", "45_DAYS", "60_DAYS", "90_DAYS", "120_DAYS"]),
    rate: z.number(),
    ratePrimeVariance: z.number(),
    bestRate: z.number(),
    created: z.string(),
    updated: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;

export const GetAllProductsSchema = z.array(ProductSchema)

export type GetAllProducts = z.infer<typeof GetAllProductsSchema>;