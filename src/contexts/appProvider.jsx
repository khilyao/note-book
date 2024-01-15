import { useState } from 'react';
import { appContext } from './context';

const AppProvider = ({ children }) => {
    const [lastUpdateDate, setLastUpdateDate] = useState();

    const providerValue = {
        lastUpdateDate,
        setLastUpdateDate,
    };

    return (
        <appContext.Provider value={providerValue}>
            {children}
        </appContext.Provider>
    );
};

export default AppProvider;
