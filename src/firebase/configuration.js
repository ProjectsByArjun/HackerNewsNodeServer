import admin from 'firebase-admin';
import serviceAccount from './hacker-news-display-firebase-adminsdk-z9f03-8343cc1a2f';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://hacker-news-display.firebaseio.com',
});

export default admin;
