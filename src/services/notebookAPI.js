import axios from 'axios';

axios.defaults.baseURL = 'https://65760b1e0febac18d403a082.mockapi.io/';

const fetchClients = async () => {
    try {
        const data = await axios.get('/clients').then(res => res.data);

        return data;
    } catch (e) {
        throw new Error(e);
    }
};

const apiTool = { fetchClients };

export default apiTool;
