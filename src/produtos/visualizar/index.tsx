import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import AlertError from '@/components/alerts/error';
import { DashboardCard } from '@/components/dashboard-card';
import Layout from '@/components/layout';
import Skeleton from '@/components/skeleton';

import ProductService from '../services/product';
import { Product } from '../types';
import { VisualizarProdutoContext } from './contexts/visualizar-produto-context';
import VisualizarProdutoTemplate from './template';

const VisualizarProdutoPage = () => {
  const { id } = useParams();

  const query = useQuery<Product, AxiosError>(`productById-${id}`, () =>
    ProductService.getProductById(id),
  );

  return (
    <Layout title="Visualizar Produtos">
      <DashboardCard title="Visualizar Produto">
        {query.isLoading && <Skeleton />}

        {query.status === 'success' && (
          <VisualizarProdutoContext.Provider value={{ produto: query.data }}>
            <VisualizarProdutoTemplate />
          </VisualizarProdutoContext.Provider>
        )}

        <AlertError
          sx={{ marginTop: '2em' }}
          message={(query.error?.response?.data as string) || query.error?.message}
          error={query.isError}
        />
      </DashboardCard>
    </Layout>
  );
};

export default VisualizarProdutoPage;
