import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { appContext } from 'contexts/context';
import Button from 'components/Button/Button';
import {
    StyledLessonDate,
    StyledList,
    StyledTitle,
    StyledInfoBlock,
} from './ClientInfoPage.styled';
import apiTool from 'services/notebookAPI';

const ClientInfoPage = () => {
    const navigate = useNavigate();
    const { clientId } = useParams();
    const { clients, authenticated } = useContext(appContext);
    const currentClient = clients.find(client => client.id === clientId);
    // const isAdmin = localStorage.getItem('isPassEntered') !== null;

    return (
        <>
            {currentClient && (
                <StyledInfoBlock>
                    <StyledList>
                        {currentClient.lessonsPayment.length !== 0 &&
                            currentClient.lessonsPayment.map(
                                ({ date, paid, duration }) => (
                                    <StyledLessonDate
                                        onClick={() => {
                                            apiTool.toggleLessonPaid(
                                                currentClient,
                                                date
                                            );
                                        }}
                                        $paid={paid.toString()}
                                        key={date}
                                    >
                                        {`${date} ${
                                            duration === 1
                                                ? ''
                                                : `(${duration} год)`
                                        }`}
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
