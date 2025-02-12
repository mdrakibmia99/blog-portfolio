import { z } from 'zod';

const projectValidationSchema = z.object({
  body: z.object({
    image: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

const projectUpdateValidationSchema = z.object({
  body: z.object({
    image: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const projectValidation = {
  projectValidationSchema,
  projectUpdateValidationSchema,
};
