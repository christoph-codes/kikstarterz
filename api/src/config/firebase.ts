import admin, { ServiceAccount } from 'firebase-admin';

import dotenv from 'dotenv';
dotenv.config();

// @ts-ignore
const { privateKey } = JSON.parse(process.env.FIRE_private_key);

const serviceAccount: ServiceAccount = {
  // @ts-ignore
  "type": process.env.FIRE_type,
  "project_id": process.env.FIRE_project_id,
  "private_key_id": process.env.FIRE_private_key_id,
  privateKey,
  "client_email": process.env.FIRE_client_email,
  "client_id": process.env.FIRE_client_id,
  "auth_uri": process.env.FIRE_auth_uri,
  "token_uri": process.env.FIRE_token_uri,
  "auth_provider_x509_cert_url": process.env.FIRE_auth_provider_cert_url,
  "client_x509_cert_url": process.env.FIRE_client_cert_url,
};

console.log('object', JSON.stringify(serviceAccount));

admin.initializeApp({
  // @ts-ignore
  credential: admin.credential.cert(serviceAccount)
});

export const auth = admin.auth();
export const db = admin.firestore();

export default admin;
