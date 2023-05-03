import { z } from 'zod';

export const UserSchema = z.object({
  nome: z.string(),
  sobrenome: z.string(),
  cpf: z.string(),
  sexo: z.string(),
  dt_nascimento: z.string(),
  cep: z.string(),
  cidade: z.string(),
  estado: z.string(),
  logradouro: z.string(),
  bairro: z.string(),
  complemento: z.string().optional(),
  email: z.string(),
  senha: z.string(),
  token: z.string().optional(),
  image: z.string().optional(),
  id: z.string().optional(),
});

export type User = z.infer<typeof UserSchema>;
