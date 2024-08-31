import { useState } from 'react';
import { appContext } from './context';

const AppProvider = ({ children }) => {
    const [lastUpdateDate, setLastUpdateDate] = useState('');
    const [isSanyaAuthenticated, setIsSanyaAuthenticated] = useState(false);
    const [isSofiaAuthenticated, setIsSofiaAuthenticated] = useState(false);
    const [isEmirAuthenticated, setIsEmirAuthenticated] = useState(false);
    const [isRavilAuthenticated, setIsRavilAuthenticated] = useState(false);
    const [isVikaAuthenticated, setIsVikaAuthenticated] = useState(false);
    const [isVeronikaAuthenticated, setIsVeronikaAuthenticated] =
        useState(false);
    const [clients, setClients] = useState([]);
    const [tutors, setTutors] = useState([]);

    const providerValue = {
        lastUpdateDate,
        setLastUpdateDate,
        isSanyaAuthenticated,
        setIsSanyaAuthenticated,
        clients,
        setClients,
        tutors,
        setTutors,
        isSofiaAuthenticated,
        setIsSofiaAuthenticated,
        isEmirAuthenticated,
        setIsEmirAuthenticated,
        isRavilAuthenticated,
        setIsRavilAuthenticated,
        isVikaAuthenticated,
        setIsVikaAuthenticated,
        isVeronikaAuthenticated,
        setIsVeronikaAuthenticated,
    };

    return (
        <appContext.Provider value={providerValue}>
            {children}
        </appContext.Provider>
    );
};

export default AppProvider;
