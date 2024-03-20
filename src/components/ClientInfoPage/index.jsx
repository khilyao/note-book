import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { appContext } from 'contexts/context';
import Button from 'components/Button/Button';
import {
    StyledLessonDate,
    StyledList,
    StyledTitle,
    StyledInfoBlock,
    StyledDeleteBtn,
} from './ClientInfoPage.styled';
import notebookAPI from 'services/notebookAPI';

const ClientInfoPage = () => {
    const navigate = useNavigate();
    const { clientId } = useParams();
    const { authenticated } = useContext(appContext);
    const [clients, setClients] = useState([]);
    const [needUpdate, setNeedUpdate] = useState(false);
    const currentClient = clients.find(client => client.id === clientId);
    const isAdmin = localStorage.getItem('isPassEntered') !== null;

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

    return (
        <>
            {currentClient && (
                <StyledInfoBlock>
                    <StyledList>
                        {currentClient.lessonsPayment.length !== 0 &&
                            currentClient.lessonsPayment.map(
                                ({ date, paid, duration }) => (
                                    <StyledLessonDate
                                        onClick={async () => {
                                            try {
                                                await notebookAPI.toggleLessonPaid(
                                                    currentClient,
                                                    date
                                                );
                                                setNeedUpdate(
                                                    prevState => !prevState
                                                );
                                            } catch (error) {
                                                console.error(
                                                    'Error toggling lesson paid status:',
                                                    error
                                                );
                                            }
                                        }}
                                        $paid={paid.toString()}
                                        key={date}
                                    >
                                        {`${date} ${
                                            duration === 1
                                                ? ''
                                                : `(${duration} год)`
                                        }`}
                                        {isAdmin && (
                                            <StyledDeleteBtn
                                                type="button"
                                                onClick={async e => {
                                                    e.stopPropagation();
                                                    try {
                                                        await notebookAPI.removeLesson(
                                                            currentClient,
                                                            date
                                                        );
                                                        setNeedUpdate(
                                                            prevState =>
                                                                !prevState
                                                        );
                                                    } catch (error) {
                                                        console.error(
                                                            'Error toggling lesson paid status:',
                                                            error
                                                        );
                                                    }
                                                }}
                                            >
                                                X
                                            </StyledDeleteBtn>
                                        )}
                                    </StyledLessonDate>
                                )
                            )}
                    </StyledList>
                    <StyledTitle>
                        Кількість
                        {currentClient.paidHours >= 0
                            ? ' оплачених '
                            : ' неоплачених '}
                        годин: {Math.abs(currentClient.paidHours)}
                    </StyledTitle>
                </StyledInfoBlock>
            )}
            {authenticated && (
                <>
                    <Button
                        style={{ alignSelf: 'flex-start', margin: '0px' }}
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        Go back
                    </Button>
                </>
            )}
        </>
    );
};

export default ClientInfoPage;
