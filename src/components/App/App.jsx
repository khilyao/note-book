import { useContext, useEffect, memo } from 'react';
import ClientTable from 'components/ClientTable/ClientTable';
import Modal from 'components/Modal/Modal';
import notebookAPI from 'services/notebookAPI';
import { modalContext } from 'contexts/context';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Container, Section } from './App.styled';
import AuthForm from 'components/AuthForm';
import { appContext } from 'contexts/context';
import { ToastContainer } from 'react-toastify';
import ClientInfoPage from 'components/ClientInfoPage';

const App = () => {
    const { isModalShown, modalShownToggle, getClients } =
        useContext(modalContext);
    const { authenticated, setClients } = useContext(appContext);
    const { pathname } = useLocation();

    useEffect(() => {
        notebookAPI
            .fetchClients()
            .then(data => {
                setClients(data);
            })
            .catch(e => {
                console.error('Error fetching clients:', e);
            });
    }, [setClients, getClients]);

    return (
        <>
            <ToastContainer />
            <Container $isModalShown={isModalShown}>
                <Section>
                    {pathname === '/note-book' && !authenticated && (
                        <AuthForm />
                    )}
                    <Routes>
                        {authenticated && (
                            <Route
                                index
                                path="/note-book"
                                element={<ClientTable />}
                            />
                        )}
                        <Route
                            path="/note-book/clients/:clientId"
                            element={<ClientInfoPage />}
                        />
                    </Routes>
                </Section>
            </Container>
            {isModalShown && <Modal onClose={modalShownToggle} />}
        </>
    );
};

export default memo(App);
