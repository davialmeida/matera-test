import { createContext } from 'react';

import { Product } from '@/produtos/types';

export const VisualizarProdutoContext = createContext<{
  produto: Product;
}>({
  produto: null,
});
