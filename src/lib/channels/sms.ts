import { ISendSMSParams } from 'lib/types/submitto';

export default class SMSChannel {
  private messages: ISendSMSParams[] = [];

  public async sendSMS({ message, phone }: ISendSMSParams): Promise<void> {
    this.messages.push({
      message,
      phone,
    });
  }
}
