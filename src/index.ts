import * as dotenv from 'dotenv';

import Client from './lib/client';

dotenv.config();

const client = new Client();

const token = String(process.env.SUBMITTO_ACCESS_TOKEN);

client.create(token);
