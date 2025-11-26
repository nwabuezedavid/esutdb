import { createApp, createIdentityProvider } from '@kottster/server';
import schema from '../../kottster-app.json';

/* 
 * For security, consider moving the secret data to environment variables.
 * See https://kottster.app/docs/deploying#before-you-deploy
 */
export const app = createApp({
  schema,
  secretKey: '2RAFpe8GdTCY9mCTArg2376jRzTziHWS',
  kottsterApiToken: '8LqjtlCqFgEcwmKhjXhsUoEYoceaQLe6',

  /*
   * The identity provider configuration.
   * See https://kottster.app/docs/app-configuration/identity-provider
   */
  identityProvider: createIdentityProvider('sqlite', {
    fileName: 'app.db',

    passwordHashAlgorithm: 'bcrypt',
    jwtSecretSalt: '4zTNeDxL8gM3TU4_',
    
    /* The root admin user credentials */
    rootUsername: 'admin',
    rootPassword: 'NWABUEZE',
  }),
});