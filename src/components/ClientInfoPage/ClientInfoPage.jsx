import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import CardInfo from 'components/CardInfo/CardInfo';
import {
    StyledList,
    StyledTitle,
    Home,
    Main,
    StyledInfoBlock,
    LoadMore,
} from './ClientInfoPage.styled';
import notebookAPI from 'services/notebookAPI';

const ClientInfoPage = () => {
    const navigate = useNavigate();
    const { clientId } = useParams();
    const [clients, setClients] = useState([]);
    const [needUpdate, setNeedUpdate] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(6);
    const currentClient = clients.find(client => client.id === clientId);
    const isAdmin =
        localStorage.getItem('isSanyaEntered') !== null ||
        localStorage.getItem('isSofiaEntered') !== null ||
        localStorage.getItem('isEmirEntered') !== null ||
        localStorage.getItem('isRavilEntered') !== null;
    useEffect(() => {
        notebookAPI
            .fetchClients()
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

            await notebookAPI.toggleLessonPaid(currentClient, lessonId);
            setNeedUpdate(prevState => !prevState);
        } catch (error) {
            console.error('Error toggling lesson paid status:', error);
        }
    };

    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 6);
    };

    return (
        <>
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
                                ? `Кількість оплачених годин ${Math.abs(
                                      currentClient.paidHours
                                  )}`
                                : `Кількість неоплачених годин ${Math.abs(
                                      currentClient.paidHours
                                  )}`}
                        </StyledTitle>
                    </Main>
                </>
            )}
            {currentClient && (
                <>
                    <StyledInfoBlock>
                        <StyledList>
                            {currentClient.lessonsPayment.length !== 0 &&
                                currentClient.lessonsPayment
                                    .map((lesson, index) => (
                                        <CardInfo
                                            onTogglePaid={handleLessonPaid}
                                            client={currentClient}
                                            onDelete={setNeedUpdate}
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
