"use strict";
const server = require("@kottster/server");
const id = "f9db87ce-d977-4729-a6b2-d0abfa987dcc";
const meta = { "name": "ESUT ENS Admin Panel", "icon": "https://web.kottster.app/icon.png" };
const dataSources = { "postgres_db_0rwmn1": { "type": "postgres", "url": "postgres://2089541d14fc56fb1d3b1b7c7a3464663c8ad9c782857dbfb3e1a593dc2ceaef:sk_-GNdHxYyUcILx--PyTiLL@db.prisma.io:5432/postgres?sslmode=require" } };
const schema = {
  id,
  meta,
  dataSources
};
const app = server.createApp({
  schema,
  secretKey: "2RAFpe8GdTCY9mCTArg2376jRzTziHWS",
  kottsterApiToken: "8LqjtlCqFgEcwmKhjXhsUoEYoceaQLe6",
  /*
   * The identity provider configuration.
   * See https://kottster.app/docs/app-configuration/identity-provider
   */
  identityProvider: server.createIdentityProvider("sqlite", {
    fileName: "app.db",
    passwordHashAlgorithm: "bcrypt",
    jwtSecretSalt: "4zTNeDxL8gM3TU4_",
    /* The root admin user credentials */
    rootUsername: "admin",
    rootPassword: "NWABUEZE"
  })
});
async function bootstrap() {
  await app.listen();
}
bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
