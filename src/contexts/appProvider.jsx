import { useState } from 'react';
import { appContext } from './context';

const AppProvider = ({ children }) => {
    const [lastUpdateDate, setLastUpdateDate] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    const providerValue = {
        lastUpdateDate,
        setLastUpdateDate,
        authenticated,
        setAuthenticated,
    };

    return (
        <appContext.Provider value={providerValue}>
            {children}
        </appContext.Provider>
    );
};

export default AppProvider;
