import { Cep } from '../types';
import cepApi from './api';

class CepService {
  static getByCep(cep: string) {
    return cepApi.get<Cep>(`${cep}/json/`);
  }
}

export default CepService;
