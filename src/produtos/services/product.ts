import { Product, ProductDTO } from '@/produtos/types';

import productApi from './api';

class ProductService {
  static getProductById = async (id: string) => {
    const response = await productApi.get<ProductDTO>(`/produto/${id}`);

    return response.data;
  };

  static getProducts = async () => {
    const response = await productApi.get<ProductDTO[]>('/produto');

    return response.data;
  };

  static post(product: Product) {
    return productApi.post('/produto', product);
  }
}

export default ProductService;
