import api from '../utils/axios';

interface AuthState {
  token: string;
}

export default class Client {
  public async getCredentials({ token }: AuthState): Promise<void> {
    await api
      .get('profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
