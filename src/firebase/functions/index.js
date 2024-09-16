import { uuidv4 } from '@firebase/util';
import { db } from '../../firebase/config';
import { get, ref, set, remove, update } from 'firebase/database';
import { getCurrentData } from 'utils/getCurrentData';

const clientsRef = ref(db, '/clients');
const tutorsRef = ref(db, '/tutors');

export const fbGetClients = async () => {
    return await get(clientsRef).then(snapshot => {
        if (snapshot.exists()) {
            const clients = snapshot.val();
            return clients;
        } else {
            console.log('No data available');
        }
    });
};

export const fbGetTutors = async () => {
    return await get(tutorsRef).then(snapshot => {
        if (snapshot.exists()) {
            const tutors = snapshot.val();
            return tutors;
        } else {
            console.log('No data available');
        }
    });
};

export const createClient = async client => {
    const snapshot = await get(clientsRef);

    let newId = 1;

    if (snapshot.exists()) {
        const clients = snapshot.val();

        const ids = Object.keys(clients)
            .filter(key => !isNaN(key))
            .map(Number);

        if (ids.length > 0) {
            newId = Math.max(...ids) + 1;
        }
    }

    const newClientRef = ref(db, `/clients/${newId}`);
    const newClient = { ...client, id: uuidv4() };

    return set(newClientRef, newClient);
};

export const deleteClient = async id => {
    const snapshot = await get(clientsRef);

    if (snapshot.exists()) {
        const clients = snapshot.val();

        const indexToDelete = clients.findIndex(
            ({ id: clientId }) => id === clientId
        );

        const clientToRemoveRef = ref(db, `/clients/${indexToDelete}`);
        remove(clientToRemoveRef)
            .then(() => {
                console.log('Data removed successfully.');
            })
            .catch(error => {
                console.error('Error removing data:', error);
            });
    }
};

const addLesson = (client, duration, date) => {
    client.lessonsPayment.push({
        id: uuidv4(),
        date: date,
        type: 'lesson',
        duration: duration,
        paid: false,
        review: client.review,
        homework: client.homework,
    });
};

const addPayment = (client, amount, credit, balance, date) => {
    client.lessonsPayment.push({
        id: uuidv4(),
        date: date,
        type: 'payment',
        amount: amount,
        credit: credit,
        balance: balance,
    });
};

const distributePayment = (client, amount) => {
    let credit = 0;
    let remainingAmount = amount;

    for (let lesson of client.lessonsPayment) {
        if (lesson.type === 'lesson' && !lesson.paid) {
            const payment = Math.min(lesson.duration, remainingAmount);
            remainingAmount -= payment;
            credit += payment;
            lesson.paid = payment === lesson.duration;

            if (remainingAmount <= 0) break;
        }
    }

    return credit;
};

export const updateClientInfo = async (id, client) => {
    const { paidHours, previousPaidHoursValue } = client;

    const lessonDate = getCurrentData();
    const lessonDuration = Math.abs(previousPaidHoursValue - paidHours);

    const snapshot = await get(clientsRef);
    if (snapshot.exists()) {
        const clients = snapshot.val();
        const currentId = clients.findIndex(
            ({ id: clientId }) => id === clientId
        );

        const clientToUpdateRef = ref(db, `/clients/${currentId}`);

        if (!client.lessonsPayment) {
            client.lessonsPayment = [];
        }

        if (paidHours > previousPaidHoursValue) {
            const amount = paidHours - previousPaidHoursValue;
            const credit = distributePayment(client, amount);
            addPayment(client, amount, credit, paidHours, lessonDate);
        } else if (paidHours < previousPaidHoursValue) {
            addLesson(client, lessonDuration, lessonDate);
        }

        if (paidHours >= 0) {
            client.lessonsPayment = client.lessonsPayment.map(lesson => {
                if (lesson.type === 'lesson') {
                    return { ...lesson, paid: true };
                }
                return lesson;
            });
        }

        client.previousPaidHoursValue = paidHours;

        update(clientToUpdateRef, client);
    } else {
        console.log('Client not found.');
    }
};

export const removeLesson = async (client, lessonId) => {
    const updatedLessonsPayment = client.lessonsPayment.filter(
        ({ id }) => id !== lessonId
    );

    const snapshot = await get(clientsRef);
    if (snapshot.exists()) {
        const clients = snapshot.val();

        const currentId = clients.findIndex(
            ({ id: clientId }) => clientId === client.id
        );

        const clientToUpdateRef = ref(db, `/clients/${currentId}`);

        const updatedClient = {
            ...client,
            lessonsPayment: updatedLessonsPayment,
        };

        update(clientToUpdateRef, updatedClient);
    }
};

export const toggleLessonPaid = async (client, lessonId) => {
    const updatedLessonsPayment = client.lessonsPayment.map(lesson => {
        if (lesson.id === lessonId) {
            lesson.paid = !lesson.paid;
        }

        return lesson;
    });

    const snapshot = await get(clientsRef);
    if (snapshot.exists()) {
        const clients = snapshot.val();

        const currentId = clients.findIndex(
            ({ id: clientId }) => clientId === client.id
        );
        const updatedClient = {
            ...client,
            lessonsPayment: updatedLessonsPayment,
        };

        const clientToUpdateRef = ref(db, `/clients/${currentId}`);

        update(clientToUpdateRef, updatedClient);
    }
};
