import { z } from "zod";

// zod user validation schema for user create
export const UserValidationSchema = z.object({
    userId: z.number().refine(data => data >= 0, { message: "userId must be a non-negative number" }),
    username: z.string().min(3, { message: "username must be at least 3 characters long" }),
    password: z.string().min(8, { message: "password must be at least 8 characters long" }),
    fullName: z.object({
        firstName: z.string(),
        lastName: z.string()
    }),
    age: z.number(),
    email: z.string().email({ message: "invalid email format" }),
    isActive: z.boolean(),
    hobbies: z.array(z.string()),
    address: z.object({
        street: z.string(),
        city: z.string(),
        country: z.string()
    })
});