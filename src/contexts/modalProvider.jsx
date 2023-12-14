import { useState } from 'react';
import { modalContext } from './context';

const Provider = ({ children }) => {
    const [isModalShown, setIsModalShown] = useState(false);
    const [isEditClientBtn, setIsEditClientBtn] = useState(false);
    const [isAddClientBtn, setIsAddClientBtn] = useState(false);
    const [getClients, setGetClients] = useState(false);
    const [clientInfo, setClientInfo] = useState({});

    const toggleModal = () => {
        setIsModalShown(!isModalShown);
    };

    const disableButtons = () => {
        setIsEditClientBtn(false);
        setIsAddClientBtn(false);
    };

    const handleGenerateModalContent = e => {
        switch (e.currentTarget.dataset.btntype) {
            case 'edit': {
                setIsEditClientBtn(true);
                break;
            }
            case 'addClient': {
                setIsAddClientBtn(true);
                break;
            }
            default: {
                break;
            }
        }
    };

    const providerValue = {
        isModalShown,
        setIsModalShown,
        handleGenerateModalContent,
        toggleModal,
        isEditClientBtn,
        setIsEditClientBtn,
        isAddClientBtn,
        setIsAddClientBtn,
        getClients,
        setGetClients,
        clientInfo,
        setClientInfo,
        disableButtons,
    };

    return (
        <modalContext.Provider value={providerValue}>
            {children}
        </modalContext.Provider>
    );
};

export default Provider;
