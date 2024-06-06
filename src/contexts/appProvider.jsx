import { useState } from 'react';
import { appContext } from './context';

const AppProvider = ({ children }) => {
    const [lastUpdateDate, setLastUpdateDate] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [isSofiaAuthenticated, setIsSofiaAuthenticated] = useState(false);
    const [clients, setClients] = useState([]);
    const [tutors, setTutors] = useState([]);

    const providerValue = {
        lastUpdateDate,
        setLastUpdateDate,
        authenticated,
        setAuthenticated,
        clients,
        setClients,
        tutors,
        setTutors,
        isSofiaAuthenticated,
        setIsSofiaAuthenticated,
    };

    return (
        <appContext.Provider value={providerValue}>
            {children}
        </appContext.Provider>
    );
};

export default AppProvider;
