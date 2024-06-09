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

const updateClientInfo = async (id, client) => {
    const { paidHours, previousPaidHoursValue } = client;
    const isPaid = paidHours >= 0 ? true : false;
    const lessonDuration = Math.abs(previousPaidHoursValue - paidHours);
    const lessonDate = getCurrentData();

    if (previousPaidHoursValue > paidHours) {
        client.lessonsPayment.push({
            id: uuidv4(),
            date: lessonDate,
            type: 'lesson',
            duration: lessonDuration,
            paid: isPaid,
            review: client.review,
            homework: client.homework,
        });

        client.review = undefined;
        client.homework = undefined;
    } else if (previousPaidHoursValue < paidHours) {
        client.lessonsPayment.push({
            id: uuidv4(),
            date: lessonDate,
            type: 'payment',
            amount: paidHours - previousPaidHoursValue,
        });

        client.review = undefined;
        client.homework = undefined;
    }

    console.log(client);

    try {
        return await axios.put(`/clients/${id}`, client);
    } catch (e) {
        console.log(e);
    }
};

const toggleLessonPaid = async (client, lessonId) => {
    const updatedLessonsPayment = client.lessonsPayment.map(
        ({ id, duration, date, paid, type }) => {
            if (id === lessonId) {
                paid = !paid;
            }

            return { id, type, date, duration, paid };
        }
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
