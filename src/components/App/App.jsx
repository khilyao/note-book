import { useContext, memo, useEffect } from 'react';
import ClientTable from 'components/ClientTable/ClientTable';
import Modal from 'components/Modal/Modal';
import { modalContext, appContext } from 'contexts/context';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Container } from './App.styled';
import AuthForm from 'components/AuthForm';
import { ToastContainer } from 'react-toastify';
import ClientInfoPage from 'components/ClientInfoPage/ClientInfoPage';
import ReferralView from 'components/ReferralView/ReferralView';

const App = () => {
    const { isModalShown, modalShownToggle } = useContext(modalContext);
    const {
        isSanyaAuthenticated,
        isSofiaAuthenticated,
        isEmirAuthenticated,
        isRavilAuthenticated,
        setIsSanyaAuthenticated,
        setIsSofiaAuthenticated,
        setIsEmirAuthenticated,
        setIsRavilAuthenticated,
    } = useContext(appContext);
    const { pathname } = useLocation();

    useEffect(() => {
        if (localStorage.getItem('isSanyaEntered')) {
            setIsSanyaAuthenticated(true);
        }

        if (localStorage.getItem('isSofiaEntered')) {
            setIsSofiaAuthenticated(true);
        }

        if (localStorage.getItem('isEmirEntered')) {
            setIsEmirAuthenticated(true);
        }

        if (localStorage.getItem('isRavilEntered')) {
            setIsRavilAuthenticated(true);
        }
    });

    const isAuth =
        (pathname === '/note-book/sanya' && !isSanyaAuthenticated) ||
        (pathname === '/note-book/sofia' && !isSofiaAuthenticated) ||
        (pathname === '/note-book/emir' && !isEmirAuthenticated) ||
        (pathname === '/note-book/ravil' && !isRavilAuthenticated)
            ? false
            : true;

    return (
        <>
            <ToastContainer />
            <Container $isModalShown={isModalShown}>
                {!isAuth && <AuthForm />}
                <Routes>
                    {isSanyaAuthenticated && (
                        <Route
                            path="/note-book/sanya"
                            element={<ClientTable />}
                        />
                    )}
                    {isSofiaAuthenticated && (
                        <Route
                            path="/note-book/sofia"
                            element={<ClientTable />}
                        />
                    )}
                    {isEmirAuthenticated && (
                        <Route
                            path="/note-book/emir"
                            element={<ClientTable />}
                        />
                    )}
                    {isRavilAuthenticated && (
                        <Route
                            path="/note-book/ravil"
                            element={<ClientTable />}
                        />
                    )}
                    <Route
                        path="/note-book/clients/:clientId"
                        element={<ClientInfoPage />}
                    />
                    <Route
                        path="/note-book/referral"
                        element={<ReferralView />}
                    />
                </Routes>
            </Container>
            {isModalShown && <Modal onClose={modalShownToggle} />}
        </>
    );
};

export default memo(App);
