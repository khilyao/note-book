import { useContext } from 'react';
import ClientsTable from 'components/ClientsTable/ClientsTable';
import Modal from 'components/Modal/Modal';
import clients from 'clients.json';
import { modalContext } from 'contexts/context';

const App = () => {
    const { isModalShown, modalShownToggle } = useContext(modalContext);

    return (
        <>
            <ClientsTable clients={clients} />
            {isModalShown && <Modal onClose={modalShownToggle} />}
        </>
    );
};

export default App;
