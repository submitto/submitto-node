import AWS from 'aws-sdk';

interface ISendMessageParams {
  message: string;
  phone: string;
}

export default class Client {
  private credentials;

  private sns;

  constructor() {
    this.credentials = new AWS.Credentials({
      accessKeyId: String(process.env.AWS_ACCESS_KEY_ID),
      secretAccessKey: String(process.env.AWS_ACCESS_SECRET),
    });
    this.sns = new AWS.SNS({
      region: process.env.AWS_DEFAULT_REGION,
      credentials: this.credentials,
    });
  }

  public async publishMessage({
    message,
    phone,
  }: ISendMessageParams): Promise<void> {
    try {
      const params = {
        Message: message,
        PhoneNumber: phone,
      };

      const sendMessage = await this.sns.publish(params).promise();

      if (sendMessage) {
        const messageSentId = sendMessage.MessageId;

        console.log(`messageId is ${messageSentId}`);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
