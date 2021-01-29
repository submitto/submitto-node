import { IMessageParams, IMessageRequest } from '../types/submitto';
import api from '../utils/axios';

export class Client {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  async sendMessage({ message, phone }: IMessageParams): Promise<void> {
    const data = { message, phone };

    const headers = { Authorization: `Bearer ${this.token}` };

    await api
      .post('sms', data, {
        headers,
      })
      .then(response => {
        this.createMessage(response.data.message, response.data.phone);
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  private createMessage(message: string, phone: string): IMessageRequest {
    return {
      message,
      phone,
    };
  }
}
