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

const ClientInfoPage = () => {
    const navigate = useNavigate();
    const { clientId } = useParams();
    const { clients, authenticated } = useContext(appContext);
    const currentClient = clients.find(client => client.id === clientId);

    return (
        <>
            {currentClient && (
                <StyledInfoBlock>
                    <StyledList>
                        {currentClient.lessonsPayment &&
                            currentClient.lessonsPayment.map(
                                ({ date, paid, duration }) => (
                                    <StyledLessonDate
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
