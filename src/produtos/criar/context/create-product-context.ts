import { createContext } from 'react';

import { Product } from '@/produtos/types';

const CreateProductContext = createContext<{
  produto: Product;
  handleCreateProduct: (data: Product) => Promise<void>;
}>({
  produto: null,
  handleCreateProduct: () => {
    throw new Error('handleCreateProduct() not implemented');
  },
});

export default CreateProductContext;
