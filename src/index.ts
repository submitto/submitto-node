import * as dotenv from 'dotenv';

import Client from './lib/client';

dotenv.config();

const client = new Client();

const id = String(process.env.SUBMITTO_ACCESS_ID);
const token = String(process.env.SUBMITTO_ACCESS_TOKEN);

client.create(id, token, {
  message: 'Hello world',
  phone: '+5561982656044',
});
