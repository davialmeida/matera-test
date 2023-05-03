import { createContext } from 'react';

import { ProductDTO } from '@/produtos/types';

const ListarProdutosContext = createContext<{
  produtos: ProductDTO[];
}>({
  produtos: [],
});

export default ListarProdutosContext;
