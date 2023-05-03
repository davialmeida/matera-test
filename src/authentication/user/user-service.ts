import apiUser from './api';
import { User } from './types';

class UserService {
  static post(data: User) {
    return apiUser.post('/user', data);
  }

  static async login(email: string, password: string) {
    const response = await apiUser.get<User[]>(`/user?email=${email}`);
    const user = response.data?.[0];

    if (!user || user?.senha !== password)
      throw new Error('Dados inválidos, tente novamente');

    return user;
  }
}

export default UserService;
