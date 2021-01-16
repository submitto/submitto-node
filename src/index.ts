import * as dotenv from 'dotenv';

import Client from './lib/client';

dotenv.config();

const client = new Client();

client.publishMessage({
  message: 'Hello world',
  phone: '+5561983379257',
});
