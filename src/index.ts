import * as dotenv from 'dotenv';

import { Client } from './lib/client';

export * from './types';

dotenv.config();

const token = String(process.env.SUBMITTO_ACCESS_TOKEN);

const client = new Client(token);

client.sendMessage({ message: 'hello', phone: '+5561982656044' });
