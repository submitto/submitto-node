import { SNS, AWSError } from 'aws-sdk';

export interface ISendMessageParams {
  message: string;
  phone: string;
}

export default class SMSChannel {
  private sns;

  constructor() {
    this.sns = new SNS({
      region: 'us-east-1',
      credentials: {
        accessKeyId: String(process.env.AWS_ACCESS_KEY_ID),
        secretAccessKey: String(process.env.AWS_ACCESS_SECRET),
      },
    });
  }

  public async publishMessage({
    message,
    phone,
  }: ISendMessageParams): Promise<void> {
    const params = {
      Message: message,
      PhoneNumber: phone,
    };

    await this.sns
      .publish(params)
      .promise()
      .then((data: SNS.PublishResponse) => {
        console.log('Event published to SNS, message Id: ', data.MessageId);
      })
      .catch((err: AWSError) => {
        console.log(err, err.stack);
      });
  }
}
