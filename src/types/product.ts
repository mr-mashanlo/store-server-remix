import z from 'zod';

const ImageZod = z.object( {
  _id: z.string(),
  url: z.string(),
  alt: z.string()
} );

const OptionZod = z.object( {
  _id: z.string(),
  name: z.string(),
  price: z.number(),
  image: ImageZod
} );

export const ProductZod = z.object( {
  _id: z.string(),
  name: z.string(),
  excerpt: z.string(),
  description: z.string(),
  images: z.array( ImageZod ),
  options: z.array( OptionZod )
} );

export type ProductType = z.infer<typeof ProductZod>