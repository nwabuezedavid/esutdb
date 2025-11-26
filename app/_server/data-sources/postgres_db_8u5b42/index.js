import { KnexPgAdapter } from '@kottster/server';
import knex from 'knex';

/**
 * Learn more at https://knexjs.org/guide/#configuration-options
 */
const client = knex({
  client: 'pg',
  connection: 'postgresql://neondb_owner:npg_KL5ixIr8pbto@ep-bold-sound-aha0yjyg-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  searchPath: ['public'],
});

export default new KnexPgAdapter(client);