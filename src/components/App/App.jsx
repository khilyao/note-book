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

    const checkCurrentDay = async clients => {
        const localStorageDay = Number(localStorage.getItem('currentDay'));
        const currentDay = new Date().getDay();

        if (!localStorageDay) {
            localStorage.setItem('currentDay', currentDay);
            setClients(clients);
            return;
        }

        if (localStorageDay !== currentDay) {
            localStorage.setItem('currentDay', currentDay);

            const updateClientsAsync = async () => {
                const updatedClients = await Promise.all(
                    clients.map(async client => {
                        const lessonsDays = client.lessonsDate.map(
                            ({ value }) => {
                                return value;
                            }
                        );

                        if (lessonsDays.includes(currentDay)) {
                            client.credit -= client.price;
                            await notebookAPI.updateClientInfo(
                                client.id,
                                client
                            );
                        }
                        return client;
                    })
                );
                setClients(updatedClients);
            };

            updateClientsAsync();
            return;
        }

        setClients(clients);
    };

    useEffect(() => {
        notebookAPI
            .fetchClients()
            .then(data => {
                checkCurrentDay(data);
            })
            .finally()
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
