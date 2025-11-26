"use strict";
const server = require("@kottster/server");
const knex = require("knex");
const client = knex({
  client: "pg",
  connection: "postgresql://neondb_owner:npg_KL5ixIr8pbto@ep-bold-sound-aha0yjyg-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  searchPath: ["public"]
});
const index = new server.KnexPgAdapter(client);
module.exports = index;
