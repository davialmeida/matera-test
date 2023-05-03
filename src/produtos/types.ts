import { z } from 'zod';

export const ProductSchema = z.object({
  createdAt: z
    .string()
    .refine((data) => {
      return new Date(data).toString() !== 'Invalid Date';
    })
    .optional(),
  nome: z
    .string({
      required_error: 'O nome do produto é obrigatório',
    })
    .min(3)
    .max(255),
  preco: z.string({
    required_error: 'O preço do produto é obrigatório',
  }),
  avatar: z.instanceof(File, {
    message: 'O avatar do produto é obrigatório',
  }),
  qt_estoque: z
    .number({
      required_error: 'A quantidade em estoque é obrigatória',
    })
    .refine((data) => {
      return !isNaN(+data);
    }),
  qt_vendas: z
    .number({
      required_error: 'A quantidade de vendas é obrigatória',
    })
    .refine((data) => {
      return !isNaN(+data);
    }),
  marca: z
    .string({
      required_error: 'A marca do produto é obrigatória',
    })
    .min(3)
    .max(255),
  id: z.string().uuid().optional(),
});

export type Product = z.infer<typeof ProductSchema>;

export type ProductDTO = Product & {
  avatar: string;
};
