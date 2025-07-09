import z from 'zod';

export const ImageZod = z.object( {
  _id: z.string(),
  name: z.string(),
  path: z.string(),
  alt: z.string().optional()
} );

export type ImageType = z.infer<typeof ImageZod>