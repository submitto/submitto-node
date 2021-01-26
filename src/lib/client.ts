// import { ISendSMSParams } from 'lib/types/submitto';
import api from '../utils/axios';
import SMSChannel from './channels/sms';

export default class Client {
  private sms = new SMSChannel();

  public async create(token: string): Promise<void> {
    await api
      .post('sms', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(request => {
        if (!request.headers.authorization) {
          throw new Error('Authentication failed');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
