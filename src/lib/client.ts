import api from '../utils/axios';
import SMSChannel, { ISendMessageParams } from './channels/sms';

export default class Client {
  private sms = new SMSChannel();

  public async create(
    id: string,
    token: string,
    { message, phone }: ISendMessageParams,
  ): Promise<void> {
    await api
      .get('profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        const responseId = response.data.id;

        if (responseId !== id) {
          throw new Error('Authentication failed');
        }

        return this.sms.publishMessage({
          message,
          phone,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
