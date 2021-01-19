import * as dotenv from 'dotenv';

import Client from './lib/client';

dotenv.config();

const client = new Client();

client.getCredentials({
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTEwMTIwNzEsImV4cCI6MTYxMTA5ODQ3MSwic3ViIjoiNjA1MWRkY2YtODkzMS00YzAxLThhZWItMjQ3OGRiNzVlNTlhIn0.bXEQNm_p4B7qx0JToqvK-V6Vn-LxiUBZBExs3_Kapqs',
});
