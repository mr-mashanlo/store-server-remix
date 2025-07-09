import z from 'zod';

export const CategoryInputZod = z.object( {
  name: z.string(),
  slug: z.string(),
  description: z.string().optional()
} );

export const CategoryZod = CategoryInputZod.extend( {
  _id: z.string()
} );

export type CategoryInputType = z.infer<typeof CategoryInputZod>

export type CategoryType = z.infer<typeof CategoryZod>