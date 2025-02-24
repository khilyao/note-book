import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { fbGetClients, toggleLessonPaid } from '../../firebase/functions';
import CardInfo from 'components/CardInfo/CardInfo';
import {
    StyledList,
    StyledTitle,
    Home,
    Main,
    StyledInfoBlock,
    LoadMore,
} from './ClientInfoPage.styled';
import NavBar from 'components/NavBar/NavBar';

const ClientInfoPage = () => {
    const navigate = useNavigate();
    const { clientId } = useParams();
    const [clients, setClients] = useState([]);
    const [needUpdate, setNeedUpdate] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(6);
    const currentClient = clients?.find(client => client?.id === clientId);

    const isAdmin =
        localStorage.getItem('isSanyaEntered') !== null ||
        localStorage.getItem('isSofiaEntered') !== null ||
        localStorage.getItem('isEmirEntered') !== null ||
        localStorage.getItem('isRavilEntered') !== null ||
        localStorage.getItem('isVikaEntered') !== null ||
        localStorage.getItem('isVeronikaEntered') !== null ||
        localStorage.getItem('isYuliaEntered') !== null ||
        localStorage.getItem('isAnyaEntered') !== null ||
        localStorage.getItem('isOlyaEntered') !== null ||
        localStorage.getItem('isTanyaEntered') !== null ||
        localStorage.getItem('isAnnaEntered') !== null ||
        localStorage.getItem('isAlinaEntered') !== null ||
        localStorage.getItem('isMaksymEntered') !== null ||
        localStorage.getItem('isEvaEntered') !== null ||
        localStorage.getItem('isOstapEntered') !== null;

    useEffect(() => {
        fbGetClients()
            .then(data => {
                setClients(data);
            })
            .catch(e => {
                console.error('Error fetching clients:', e);
            });
    }, [needUpdate]);

    const handleLessonPaid = async lessonId => {
        try {
            if (!isAdmin) return;

            toggleLessonPaid(currentClient, lessonId).then(() => {
                fbGetClients().then(clients => {
                    setClients(clients);
                });
            });
            setNeedUpdate(prevState => !prevState);
        } catch (error) {
            console.error('Error toggling lesson paid status:', error);
        }
    };

    const handleDelete = updatedClients => {
        setClients(updatedClients);
        setNeedUpdate(prev => !prev);
    };

    const transformLessonDuration = time => {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        if (hours > 0 && minutes > 0) {
            return `${hours} год ${minutes} хв`;
        } else if (hours > 0 && minutes === 0) {
            return `${hours} год`;
        } else {
            return `${minutes} хв`;
        }
    };

    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 6);
    };

    return (
        <>
            <NavBar />
            {currentClient && (
                <>
                    <Main>
                        <Home
                            style={{}}
                            onClick={
                                isAdmin
                                    ? () => {
                                          navigate(-1);
                                      }
                                    : null
                            }
                        />
                        <StyledTitle>
                            {currentClient.paidHours >= 0
                                ? `Всього оплаченого часу: ${transformLessonDuration(
                                      Math.abs(currentClient.paidHours) * 60
                                  )}`
                                : `Всього неоплаченого часу: ${transformLessonDuration(
                                      Math.abs(currentClient.paidHours) * 60
                                  )}`}
                        </StyledTitle>
                    </Main>
                </>
            )}
            {currentClient && currentClient.lessonsPayment && (
                <>
                    <StyledInfoBlock>
                        <StyledList>
                            {currentClient.lessonsPayment.length !== 0 &&
                                currentClient.lessonsPayment
                                    .map((lesson, index) => (
                                        <CardInfo
                                            onTogglePaid={handleLessonPaid}
                                            client={currentClient}
                                            onDelete={handleDelete}
                                            key={index}
                                            isAdmin={isAdmin}
                                            {...lesson}
                                        />
                                    ))
                                    .reverse()
                                    .slice(0, itemsToShow)}
                        </StyledList>
                        {currentClient.lessonsPayment.length > 6 &&
                            currentClient.lessonsPayment.length >=
                                itemsToShow && (
                                <Suspense
                                    fallback={
                                        <RotatingLines
                                            visible={true}
                                            height="96"
                                            width="96"
                                            color="grey"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            ariaLabel="rotating-lines-loading"
                                        />
                                    }
                                >
                                    <LoadMore onClick={handleLoadMore}>
                                        Більше занять
                                    </LoadMore>
                                </Suspense>
                            )}
                    </StyledInfoBlock>
                </>
            )}
        </>
    );
};

export default ClientInfoPage;
