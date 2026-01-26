import { z } from "zod";


export const passwordSchema = z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-zA-Z]/, "Password must contain at least one letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character");

export const emailSchema = z.object({
    email: z.string().email("Invalid email"),
});

export const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().nonempty("Password is required"),
});

export const userSchema = z.object({
    phone_number: z.string(),
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    date_of_birth: z
        .string()
        .datetime()
        .optional()
        .refine(
            (date) => {
                if (!date) return true;
                const dob = new Date(date);
                const today = new Date();
                let age = today.getFullYear() - dob.getFullYear();
                const monthDiff = today.getMonth() - dob.getMonth();
                if (
                    monthDiff < 0 ||
                    (monthDiff === 0 && today.getDate() < dob.getDate())
                ) {
                    age--;
                }
                return age >= 18;
            },
            { message: "You must be at least 18 years old" }
        ),
    gender: z.string(),
});