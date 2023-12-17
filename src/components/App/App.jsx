import { useContext, useEffect, useState, memo } from 'react';
import ClientTable from 'components/ClientTable/ClientTable';
import Modal from 'components/Modal/Modal';
import notebookAPI from 'services/notebookAPI';
import { modalContext } from 'contexts/context';
import { Container, Section } from './App.styled';

const App = () => {
    const { isModalShown, modalShownToggle, getClients } =
        useContext(modalContext);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        notebookAPI
            .fetchClients()
            .then(data => {
                setClients(data);
            })
            .catch(e => {
                console.error('Error fetching clients:', e);
            });
    }, [getClients]);

    return (
        <>
            <Container $isModalShown={isModalShown}>
                <Section>
                    {clients.length !== 0 && <ClientTable clients={clients} />}
                </Section>
            </Container>
            {isModalShown && <Modal onClose={modalShownToggle} />}
        </>
    );
};

export default memo(App);
