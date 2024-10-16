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
import Promo from 'components/Promo/Promo';

const App = () => {
    const { isModalShown, modalShownToggle } = useContext(modalContext);
    const {
        isSanyaAuthenticated,
        isSofiaAuthenticated,
        isEmirAuthenticated,
        isRavilAuthenticated,
        isVikaAuthenticated,
        isVeronikaAuthenticated,
        isYuliaAuthenticated,
        isAnyaAuthenticated,
        isOlyaAuthenticated,
        isAlbinaAuthenticated,
        isAnnaAuthenticated,
        isAlinaAuthenticated,
        isMarynaAuthenticated,
        isIvannaAuthenticated,
        isOstapAuthenticated,
        setIsSanyaAuthenticated,
        setIsSofiaAuthenticated,
        setIsEmirAuthenticated,
        setIsRavilAuthenticated,
        setIsVikaAuthenticated,
        setIsVeronikaAuthenticated,
        setIsYuliaAuthenticated,
        setIsAnyaAuthenticated,
        setIsOlyaAuthenticated,
        setIsAlbinaAuthenticated,
        setIsAnnaAuthenticated,
        setIsAlinaAuthenticated,
        setIsMarynaAuthenticated,
        setIsIvannaAuthenticated,
        setIsOstapAuthenticated,
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

        if (localStorage.getItem('isVikaEntered')) {
            setIsVikaAuthenticated(true);
        }

        if (localStorage.getItem('isVeronikaEntered')) {
            setIsVeronikaAuthenticated(true);
        }

        if (localStorage.getItem('isYuliaEntered')) {
            setIsYuliaAuthenticated(true);
        }

        if (localStorage.getItem('isAnyaEntered')) {
            setIsAnyaAuthenticated(true);
        }

        if (localStorage.getItem('isOlyaEntered')) {
            setIsOlyaAuthenticated(true);
        }

        if (localStorage.getItem('isAlbinaEntered')) {
            setIsAlbinaAuthenticated(true);
        }

        if (localStorage.getItem('isAnnaEntered')) {
            setIsAnnaAuthenticated(true);
        }

        if (localStorage.getItem('isAlinaEntered')) {
            setIsAlinaAuthenticated(true);
        }

        if (localStorage.getItem('isMarynaEntered')) {
            setIsMarynaAuthenticated(true);
        }

        if (localStorage.getItem('isIvannaEntered')) {
            setIsIvannaAuthenticated(true);
        }

        if (localStorage.getItem('isOstapEntered')) {
            setIsOstapAuthenticated(true);
        }
    });

    const isAuth =
        (pathname === '/note-book/sanya' && !isSanyaAuthenticated) ||
        (pathname === '/note-book/sofia' && !isSofiaAuthenticated) ||
        (pathname === '/note-book/emir' && !isEmirAuthenticated) ||
        (pathname === '/note-book/ravil' && !isRavilAuthenticated) ||
        (pathname === '/note-book/vika' && !isVikaAuthenticated) ||
        (pathname === '/note-book/veronika' && !isVeronikaAuthenticated) ||
        (pathname === '/note-book/yulia' && !isYuliaAuthenticated) ||
        (pathname === '/note-book/anya' && !isAnyaAuthenticated) ||
        (pathname === '/note-book/olya' && !isOlyaAuthenticated) ||
        (pathname === '/note-book/albina' && !isAlbinaAuthenticated) ||
        (pathname === '/note-book/anna' && !isAnnaAuthenticated) ||
        (pathname === '/note-book/alina' && !isAlinaAuthenticated) ||
        (pathname === '/note-book/maryna' && !isMarynaAuthenticated) ||
        (pathname === '/note-book/ivanna' && !isIvannaAuthenticated) ||
        (pathname === '/note-book/ostap' && !isOstapAuthenticated)
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
                    {isVikaAuthenticated && (
                        <Route
                            path="/note-book/vika"
                            element={<ClientTable />}
                        />
                    )}
                    {isVeronikaAuthenticated && (
                        <Route
                            path="/note-book/veronika"
                            element={<ClientTable />}
                        />
                    )}
                    {isYuliaAuthenticated && (
                        <Route
                            path="/note-book/yulia"
                            element={<ClientTable />}
                        />
                    )}
                    {isAnyaAuthenticated && (
                        <Route
                            path="/note-book/anya"
                            element={<ClientTable />}
                        />
                    )}
                    {isOlyaAuthenticated && (
                        <Route
                            path="/note-book/olya"
                            element={<ClientTable />}
                        />
                    )}
                    {isAlbinaAuthenticated && (
                        <Route
                            path="/note-book/albina"
                            element={<ClientTable />}
                        />
                    )}
                    {isAnnaAuthenticated && (
                        <Route
                            path="/note-book/anna"
                            element={<ClientTable />}
                        />
                    )}
                    {isAlinaAuthenticated && (
                        <Route
                            path="/note-book/alina"
                            element={<ClientTable />}
                        />
                    )}
                    {isMarynaAuthenticated && (
                        <Route
                            path="/note-book/maryna"
                            element={<ClientTable />}
                        />
                    )}
                    {isIvannaAuthenticated && (
                        <Route
                            path="/note-book/ivanna"
                            element={<ClientTable />}
                        />
                    )}
                    {isOstapAuthenticated && (
                        <Route
                            path="/note-book/ostap"
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
                    <Route path="/note-book/promo" element={<Promo />} />
                </Routes>
            </Container>
            {isModalShown && <Modal onClose={modalShownToggle} />}
        </>
    );
};

export default memo(App);
