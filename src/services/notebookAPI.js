import axios from 'axios';
import { getCurrentData } from 'utils/getCurrentData';
import { v4 as uuidv4 } from 'uuid';

axios.defaults.baseURL = 'https://6644c641b8925626f88fe500.mockapi.io/';

const fetchClients = async () => {
    try {
        const data = await axios.get('/clients').then(res => res.data);
        return data;
    } catch (e) {
        throw new Error(e);
    }
};

const fetchTutors = async () => {
    try {
        const data = await axios.get('/tutors').then(res => res.data);
        return data;
    } catch (e) {
        throw new Error(e);
    }
};

const addClient = async client => {
    try {
        return await axios.post('/clients', client);
    } catch (e) {
        console.log(e);
    }
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

    client.review = undefined;
    client.homework = undefined;
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

const updateClientInfo = async (id, client) => {
    const { paidHours, previousPaidHoursValue } = client;
    const lessonDate = getCurrentData();
    const lessonDuration = Math.abs(previousPaidHoursValue - paidHours);

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

    try {
        return await axios.put(`/clients/${id}`, client);
    } catch (e) {
        console.log(e);
    }
};

const toggleLessonPaid = async (client, lessonId) => {
    const updatedLessonsPayment = client.lessonsPayment.map(lesson => {
        if (lesson.id === lessonId) {
            lesson.paid = !lesson.paid;
        }

        return lesson;
    });

    const updatedClient = {
        ...client,
        lessonsPayment: updatedLessonsPayment,
    };

    try {
        return await axios.put(`/clients/${client.id}`, updatedClient);
    } catch (e) {
        console.log(e);
    }
};

const removeLesson = async (client, lessonId) => {
    const updatedLessonsPayment = client.lessonsPayment.filter(
        ({ id }) => id !== lessonId
    );

    const updatedClient = {
        ...client,
        lessonsPayment: updatedLessonsPayment,
    };

    try {
        return await axios.put(`/clients/${client.id}`, updatedClient);
    } catch (e) {
        console.log(e);
    }
};

const deleteClient = async id => {
    try {
        return await axios.delete(`/clients/${id}`);
    } catch (e) {
        console.log(e);
    }
};

const apiTool = {
    fetchClients,
    fetchTutors,
    toggleLessonPaid,
    addClient,
    updateClientInfo,
    deleteClient,
    removeLesson,
};

export default apiTool;
