import { Client } from 'faunadb';

export const fauna = new Client({
  secret: 'fnAEU7vGTzAAQAonk_jSjGFnYJfAJn3gmTDHGf-K',
  domain: 'db.us.fauna.com',
})