import { useState } from 'react';
import { modalContext } from './context';

const Provider = ({ children }) => {
    const [isModalShown, setIsModalShown] = useState(false);

    const modalShownToggle = () => {
        setIsModalShown(!isModalShown);
    };

    const providerValue = {
        isModalShown,
        modalShownToggle,
    };

    return (
        <modalContext.Provider value={providerValue}>
            {children}
        </modalContext.Provider>
    );
};

export default Provider;
