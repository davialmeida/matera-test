import Form from '@components/form';
import Input from '@components/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button } from '@mui/material';
import { HTMLAttributes, useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import ImportFileCard from '@/components/import-file/import-file-card';
import { Product, ProductSchema } from '@/produtos/types';
import NumberUtils from '@/utils/number';

import CreateProductContext from '../context/create-product-context';
import { CreateProductFormWrapper } from './styles';

export type CreateProductFormProps = HTMLAttributes<HTMLDivElement>;

const CreateProductForm: React.FC<CreateProductFormProps> = (props) => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState } = useForm<Product>({
    resolver: zodResolver(ProductSchema),
  });
  const { handleCreateProduct } = useContext(CreateProductContext);

  const errors = formState.errors;

  const backAction = () => {
    navigate('/produtos');
  };

  return (
    <CreateProductFormWrapper {...props}>
      <Form onSubmit={handleSubmit(handleCreateProduct)}>
        <Controller
          name="nome"
          control={control}
          render={({ field }) => (
            <Input
              label="Nome"
              id="nome"
              error={!!errors.nome}
              helperText={errors.nome?.message}
              {...field}
            />
          )}
        />
        <Box display="flex" gap="1em">
          <Controller
            name="preco"
            control={control}
            render={({ field }) => (
              <Input
                fullWidth
                label="Preço"
                id="preco"
                mask={NumberUtils.maskMoneyBRL}
                error={!!errors.preco}
                helperText={errors.preco?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="qt_estoque"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                fullWidth
                label="Quantidade em Estoque"
                id="qt_estoque"
                error={!!errors.qt_estoque}
                helperText={errors.qt_estoque?.message}
                onChange={(e) => onChange(+e.target.value)}
                value={value}
              />
            )}
          />
          <Controller
            name="qt_vendas"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                fullWidth
                label="Quantidade de Vendas"
                id="qt_vendas"
                type="number"
                error={!!errors.qt_vendas}
                helperText={errors.qt_vendas?.message}
                onChange={(e) => onChange(+e.target.value)}
                value={value}
              />
            )}
          />
        </Box>
        <Controller
          name="marca"
          control={control}
          render={({ field }) => (
            <Input
              fullWidth
              label="Marca"
              id="marca"
              error={!!errors.marca}
              helperText={errors.marca?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="avatar"
          control={control}
          render={({ field }) => (
            <div>
              <ImportFileCard
                label="Imagem"
                error={!!errors?.avatar}
                helperText={errors?.avatar?.message}
                {...field}
              />
            </div>
          )}
        />

        <Box display="flex" justifyContent="flex-end" gap="1em">
          <Button color="inherit" onClick={backAction}>
            Voltar
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Criar
          </Button>
        </Box>
      </Form>
    </CreateProductFormWrapper>
  );
};

export default CreateProductForm;
