import Button from '@components/button';
import { DashboardCard } from '@components/dashboard-card';
import Layout from '@components/layout';
import { Add } from '@mui/icons-material';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import ProductService from '../services/product';
import { ProductDTO } from '../types';
import ListarProdutosContext from './contexts/listar-produtos-context';
import PagedProdutoTable from './table';

const ListarProdutosPage = () => {
  const query = useQuery<ProductDTO[], AxiosError>('products', () =>
    ProductService.getProducts(),
  );
  const navigate = useNavigate();

  const handleCriarNovoProduto = () => {
    navigate('/produtos/criar');
  };

  return (
    <Layout title="Produtos">
      <DashboardCard
        title="Produtos"
        actions={
          <>
            <Button
              variant="contained"
              onClick={handleCriarNovoProduto}
              startIcon={<Add />}
            >
              Criar novo
            </Button>
          </>
        }
      >
        <ListarProdutosContext.Provider value={{ produtos: query.data }}>
          <PagedProdutoTable />
        </ListarProdutosContext.Provider>
      </DashboardCard>
    </Layout>
  );
};

export default ListarProdutosPage;
