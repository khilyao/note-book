import { useContext, useEffect, useState, memo } from 'react';
import ClientTable from 'components/ClientTable/ClientTable';
import Modal from 'components/Modal/Modal';
import notebookAPI from 'services/notebookAPI';
import { modalContext } from 'contexts/context';

const App = () => {
    const { isModalShown, modalShownToggle } = useContext(modalContext);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        notebookAPI.fetchClients().then(data => {
            setClients(data);
        });
    }, []);

    return (
        <>
            {clients.length !== 0 && <ClientTable clients={clients} />}
            {isModalShown && <Modal onClose={modalShownToggle} />}
        </>
    );
};

export default memo(App);
