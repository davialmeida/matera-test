import { DashboardCard } from '@components/dashboard-card';
import Layout from '@components/layout';
import { useNavigate } from 'react-router-dom';

import ProductService from '../services/product';
import { Product } from '../types';
import CreateProductContext from './context/create-product-context';
import CreateProductForm from './create-product-form';

const CriarProdutoPage = () => {
  const navigate = useNavigate();
  const handleCreateProduct = async (data: Product) => {
    ProductService.post(data).finally(() => {
      navigate('/produtos');
    });
  };

  return (
    <Layout title="Criar Produtos">
      <DashboardCard title="Criar Produto">
        <CreateProductContext.Provider
          value={{
            produto: null,
            handleCreateProduct,
          }}
        >
          <CreateProductForm />
        </CreateProductContext.Provider>
      </DashboardCard>
    </Layout>
  );
};

export default CriarProdutoPage;
