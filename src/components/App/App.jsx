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
        isTanyaAuthenticated,
        isAnnaAuthenticated,
        isAlinaAuthenticated,
        isMaksymAuthenticated,
        isEvaAuthenticated,
        isOstapAuthenticated,
        isVaryaAuthenticated,
        setIsSanyaAuthenticated,
        setIsSofiaAuthenticated,
        setIsEmirAuthenticated,
        setIsRavilAuthenticated,
        setIsVikaAuthenticated,
        setIsVeronikaAuthenticated,
        setIsYuliaAuthenticated,
        setIsAnyaAuthenticated,
        setIsOlyaAuthenticated,
        setIsTanyaAuthenticated,
        setIsAnnaAuthenticated,
        setIsAlinaAuthenticated,
        setIsMaksymAuthenticated,
        setIsEvaAuthenticated,
        setIsOstapAuthenticated,
        setIsVaryaAuthenticated,
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

        if (localStorage.getItem('isTanyaEntered')) {
            setIsTanyaAuthenticated(true);
        }

        if (localStorage.getItem('isAnnaEntered')) {
            setIsAnnaAuthenticated(true);
        }

        if (localStorage.getItem('isAlinaEntered')) {
            setIsAlinaAuthenticated(true);
        }

        if (localStorage.getItem('isMaksymEntered')) {
            setIsMaksymAuthenticated(true);
        }

        if (localStorage.getItem('isEvaEntered')) {
            setIsEvaAuthenticated(true);
        }

        if (localStorage.getItem('isOstapEntered')) {
            setIsOstapAuthenticated(true);
        }

        if (localStorage.getItem('isVaryaEntered')) {
            setIsVaryaAuthenticated(true);
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
        (pathname === '/note-book/tanya' && !isTanyaAuthenticated) ||
        (pathname === '/note-book/anna' && !isAnnaAuthenticated) ||
        (pathname === '/note-book/alina' && !isAlinaAuthenticated) ||
        (pathname === '/note-book/maksym' && !isMaksymAuthenticated) ||
        (pathname === '/note-book/eva' && !isEvaAuthenticated) ||
        (pathname === '/note-book/ostap' && !isOstapAuthenticated) ||
        (pathname === '/note-book/varya' && !isVaryaAuthenticated)
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
                    {isTanyaAuthenticated && (
                        <Route
                            path="/note-book/tanya"
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
                    {isMaksymAuthenticated && (
                        <Route
                            path="/note-book/maksym"
                            element={<ClientTable />}
                        />
                    )}
                    {isEvaAuthenticated && (
                        <Route
                            path="/note-book/eva"
                            element={<ClientTable />}
                        />
                    )}
                    {isOstapAuthenticated && (
                        <Route
                            path="/note-book/ostap"
                            element={<ClientTable />}
                        />
                    )}
                    {isVaryaAuthenticated && (
                        <Route
                            path="/note-book/varya"
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
