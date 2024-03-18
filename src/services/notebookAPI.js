import axios from 'axios';
import { getCurrentData } from 'utils/getCurrentData';

axios.defaults.baseURL = 'https://65760b1e0febac18d403a082.mockapi.io/';

const fetchClients = async () => {
    try {
        const data = await axios.get('/clients').then(res => res.data);

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

    if (previousPaidHoursValue > paidHours) {
        const currentPayment = client.lessonsPayment.find(
            payment => payment.date === getCurrentData()
        );
        console.log(currentPayment);

        if (!currentPayment) {
            const isPaid = paidHours >= 0 ? true : false;
            const lessonDuration = Math.abs(previousPaidHoursValue - paidHours);
            const lessonDate = getCurrentData();

            client.lessonsPayment.push({
                date: lessonDate,
                duration: lessonDuration,
                paid: isPaid,
            });
        }
    }

    try {
        return await axios.put(`/clients/${id}`, client);
    } catch (e) {
        console.log(e);
    }
};

const toggleLessonPaid = async (client, dateToUpdate) => {
    const updatedLessonsPayment = client.lessonsPayment.map(
        ({ date, duration, paid }) => {
            if (date === dateToUpdate) {
                paid = !paid;
            }

            return { date, duration, paid };
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

const deleteClient = async id => {
    try {
        return await axios.delete(`/clients/${id}`);
    } catch (e) {
        console.log(e);
    }
};

const apiTool = {
    fetchClients,
    toggleLessonPaid,
    addClient,
    updateClientInfo,
    deleteClient,
};

export default apiTool;
