import { initializeApp } from 'firebase/app';

import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

initializeApp(firebaseConfig);
export const db = getDatabase();
