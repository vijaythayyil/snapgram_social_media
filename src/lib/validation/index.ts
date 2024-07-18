import { z } from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Too Short" }).max(50),
  username: z.string().min(2, { message: "Too Short" }).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be 8 charachter or more" })
    .max(50),
});
