import admin, { ServiceAccount } from 'firebase-admin';

const serviceAccount: ServiceAccount = require('../utils/firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;