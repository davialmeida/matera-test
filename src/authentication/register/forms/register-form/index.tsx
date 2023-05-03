import Button from '@components/button';
import Form from '@components/form';
import Input from '@components/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { User, UserSchema } from '@/authentication/user/types';
import ufs from '@/cep/ufs';
import Select from '@/components/select';
import DateUtils from '@/utils/date';
import NumberUtils from '@/utils/number';

import RegisterContext from '../../register-context';
import { Separator } from './styles';

function RegisterForm() {
  const { handleCepChange, handleRegisterSubmit, handleBack } =
    useContext(RegisterContext);

  const {
    control,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<User>({
    defaultValues: {
      dt_nascimento: DateUtils.format(new Date(), 'yyyy-MM-dd'),
      sexo: 'M',
    },
    resolver: zodResolver(UserSchema),
  });

  return (
    <Form onSubmit={handleSubmit(handleRegisterSubmit)}>
      <Separator>
        <Controller
          name="nome"
          control={control}
          render={({ field }) => (
            <Input
              fullWidth
              label="Nome"
              id="name"
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="sobrenome"
          control={control}
          render={({ field }) => (
            <Input
              fullWidth
              label="Sobrenome"
              id="sobrenome"
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message}
              {...field}
            />
          )}
        />
      </Separator>

      <Controller
        name="cpf"
        control={control}
        render={({ field }) => (
          <Input
            fullWidth
            label="CPF"
            id="cpf"
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message}
            mask={NumberUtils.maskCpf}
            inputProps={{ maxLength: 14 }}
            {...field}
          />
        )}
      />

      <Separator>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              fullWidth
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
          name="senha"
          control={control}
          render={({ field }) => (
            <Input
              fullWidth
              type="password"
              label="Senha"
              id="senha"
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message}
              {...field}
            />
          )}
        />
      </Separator>

      <Separator>
        <Controller
          name="sexo"
          control={control}
          render={({ field }) => (
            <Select
              fullWidth
              label="Sexo"
              id="sexo"
              options={[
                { value: 'M', label: 'Masculino' },
                { value: 'F', label: 'Feminino' },
              ]}
              error={!!errors[field.name]}
              {...field}
            />
          )}
        />

        <Controller
          name="dt_nascimento"
          control={control}
          render={({ field }) => (
            <Input
              fullWidth
              type="date"
              label="Data de Nascimento"
              id="dt_nascimento"
              {...field}
            />
          )}
        />
      </Separator>

      <Separator>
        <Controller
          name="cep"
          control={control}
          render={({ field }) => (
            <Input
              fullWidth
              label="CEP"
              id="cep"
              mask={NumberUtils.maskCep}
              inputProps={{
                shrink: true,
                maxLength: 9,
                onChange: (e) => {
                  handleCepChange(e.currentTarget.value).then((response) => {
                    setValue('cep', response?.cep);
                    setValue('logradouro', response?.logradouro);
                    setValue('bairro', response?.bairro);
                    setValue('complemento', response?.complemento);
                    setValue('cidade', response?.localidade);
                    setValue('estado', response?.uf);
                  });
                },
              }}
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="logradouro"
          control={control}
          render={({ field }) => (
            <Input
              fullWidth
              label="Logradouro"
              id="logradouro"
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message}
              {...field}
            />
          )}
        />
      </Separator>

      <Separator>
        <Controller
          name="complemento"
          control={control}
          render={({ field }) => (
            <Input
              fullWidth
              label="Complemento"
              id="complemento"
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="bairro"
          control={control}
          render={({ field }) => (
            <Input
              fullWidth
              label="Bairro"
              id="bairro"
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message}
              {...field}
            />
          )}
        />
      </Separator>

      <Separator>
        <Controller
          name="cidade"
          control={control}
          render={({ field }) => (
            <Input
              fullWidth
              label="Cidade"
              id="cidade"
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="estado"
          control={control}
          render={({ field }) => (
            <Select
              fullWidth
              label="Estado"
              id="estado"
              options={ufs}
              error={!!errors[field.name]}
              {...field}
            />
          )}
        />
      </Separator>

      <Button
        sx={{
          width: '200px',
          height: '50px',
          margin: '0 auto',
        }}
        type="submit"
        variant="contained"
        color="primary"
      >
        Salvar
      </Button>

      <Button
        sx={{
          width: '200px',
          height: '50px',
          margin: '0 auto',
        }}
        type="button"
        variant="contained"
        color="secondary"
        onClick={handleBack}
      >
        Voltar
      </Button>
    </Form>
  );
}

export default RegisterForm;
