import admin, { ServiceAccount } from 'firebase-admin';

const serviceAccount: ServiceAccount = require('../firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const auth = admin.auth();
export const db = admin.firestore();

export default admin;