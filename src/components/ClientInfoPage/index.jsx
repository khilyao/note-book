import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { appContext } from 'contexts/context';
import Button from 'components/Button/Button';
import CardInfo from 'components/CardInfo/CardInfo';
import {
    StyledList,
    StyledTitle,
    StyledInfoBlock,
} from './ClientInfoPage.styled';
import notebookAPI from 'services/notebookAPI';

const ClientInfoPage = () => {
    const navigate = useNavigate();
    const { clientId } = useParams();
    const { authenticated, isSofiaAuthenticated } = useContext(appContext);
    const [clients, setClients] = useState([]);
    const [needUpdate, setNeedUpdate] = useState(false);
    const currentClient = clients.find(client => client.id === clientId);
    const isAdmin =
        localStorage.getItem('isPassEntered') !== null ||
        localStorage.getItem('isSofiaEntered') !== null;

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

    return (
        <>
            {currentClient && (
                <StyledInfoBlock>
                    <StyledList>
                        {currentClient.lessonsPayment.length !== 0 &&
                            currentClient.lessonsPayment
                                .map((lesson, index) => (
                                    <CardInfo key={index} {...lesson} />
                                ))
                                .reverse()}
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
            {(authenticated || isSofiaAuthenticated) && (
                <>
                    <Button
                        style={{
                            alignSelf: 'flex-start',
                            margin: '0px',
                            marginTop: '20px',
                        }}
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

// {isAdmin && (
//     <StyledDeleteBtn
//         type="button"
//         onClick={async e => {
//             e.stopPropagation();
//             try {
//                 await notebookAPI.removeLesson(
//                     currentClient,
//                     id
//                 );
//                 setNeedUpdate(
//                     prevState =>
//                         !prevState
//                 );
//             } catch (error) {
//                 console.error(
//                     'Error toggling lesson paid status:',
//                     error
//                 );
//             }
//         }}
//     >
//         X
//     </StyledDeleteBtn>
// )}

// {
/* <CardInfo key={index}>
<Line />
<StyledLessonDate $payment>
    Оплачено занять: {amount}
    <Signature>{date}</Signature>
    {isAdmin && (
        <StyledDeleteBtn
            type="button"
            onClick={async (
                e,
                date
            ) => {
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
</CardInfo> */
// }
