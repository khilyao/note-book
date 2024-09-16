import { initializeApp } from 'firebase/app';

import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    databaseURL:
        'https://note-book-e6c0b-default-rtdb.europe-west1.firebasedatabase.app',
};

initializeApp(firebaseConfig);
export const db = getDatabase();
