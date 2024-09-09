import { z } from 'zod';

export const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(30, { message: 'Name must be at most 30 characters.' }),
  hometown: z
    .string()
    .min(2, { message: 'Hometown must be at least 2 characters.' })
    .max(30, { message: 'Hometown must be at most 30 characters.' }),
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters.' })
    .max(25, { message: 'Username must be at most 25 characters.' }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
});

export const SignInValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
});

export const PostValidation = z.object({
  content: z.string().min(5).max(63206),
  file: z.custom<File[]>(),
  tags: z.string(),
});
