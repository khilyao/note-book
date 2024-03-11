import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { appContext } from 'contexts/context';
import {
    StyledLessonDate,
    StyledList,
    StyledTitle,
    StyledInfoBlock,
} from './ClientInfoPage.styled';

const ClientInfoPage = () => {
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
                        {currentClient.lessonsPayment.paid >= 0
                            ? ' оплачених '
                            : ' неоплачених '}
                        годин: {Math.abs(currentClient.paidHours)}
                    </StyledTitle>
                </StyledInfoBlock>
            )}
            {authenticated && <p>admin tools</p>}
        </>
    );
};

export default ClientInfoPage;
