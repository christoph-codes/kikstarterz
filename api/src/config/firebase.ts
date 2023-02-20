import admin, { ServiceAccount } from 'firebase-admin';

const serviceAccount: ServiceAccount = require('../../firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const auth = admin.auth();

export default {admin, auth};