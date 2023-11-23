import { z } from "zod";

// zod user validation schema for user create
export const UserValidationSchema = z.object({
    userId: z.number(),
    username: z.string(),
    password: z.string(),
    fullName: z.object({
        firstName: z.string(),
        lastName: z.string()
    }),
    age: z.number(),
    email: z.string().email(),
    isActive: z.boolean(),
    hobbies: z.string().array(),
    address: z.object({
        street: z.string(),
        city: z.string(),
        country: z.string()
    }),
    isDelete: z.optional(z.boolean())
});