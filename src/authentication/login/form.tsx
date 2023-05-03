import Form from '@components/form';
import Input from '@components/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import Button from '@/components/button';

type LoginDataForm = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSubmit: (data: LoginDataForm) => void;
};

const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const LoginDataSchema = z.object({
    email: z
      .string({
        required_error: 'Email obrigatório',
      })
      .email({
        message: 'Email inválido',
      }),
    password: z
      .string({
        required_error: 'Senha obrigatória',
      })
      .min(6),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataForm>({
    resolver: zodResolver(LoginDataSchema),
  });

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            type="email"
            label="Email"
            id="email"
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            label="Senha"
            id="password"
            type="password"
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message}
            {...field}
          />
        )}
      />

      <Button
        sx={{
          width: '200px',
          height: '50px',
          margin: '0 auto',
        }}
        type="submit"
        variant="contained"
      >
        Entrar
      </Button>
      <Button
        sx={{
          width: '200px',
          height: '50px',
          margin: '0 auto',
        }}
        type="submit"
        variant="contained"
        color="secondary"
        onClick={(e) => {
          e.preventDefault();
          navigate('/register');
        }}
      >
        Cadastrar
      </Button>
    </Form>
  );
};

export default LoginForm;
