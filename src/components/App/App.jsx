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
        (pathname === '/note-book/albina' && !isAlbinaAuthenticated)
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
