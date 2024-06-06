import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    TableWrapper,
    Table,
    TableHead,
    TableHeading,
    TableBody,
    Row,
    Data,
    MonthlyProfit,
    StyledLink,
} from './ClientTable.styled';
import Button from 'components/Button/Button';
import notebookAPI from 'services/notebookAPI';
import { appContext, modalContext } from 'contexts/context';

const ClientsTable = () => {
    const { pathname } = useLocation();
    const currentTutorName = pathname.split('/').pop();
    const {
        toggleModal,
        handleGenerateModalContent,
        setClientInfo,
        getClients,
    } = useContext(modalContext);
    const { clients, setClients, tutors, setTutors } = useContext(appContext);

    useEffect(() => {
        notebookAPI
            .fetchClients()
            .then(data => {
                setClients(data);
            })
            .catch(e => {
                console.error('Error fetching clients:', e);
            });

        notebookAPI
            .fetchTutors()
            .then(data => {
                setTutors(data);
            })
            .catch(e => {
                console.error('Error fetching clients:', e);
            });
    }, [setClients, getClients, setTutors]);

    const tutor = tutors.find(({ tutor }) => tutor === currentTutorName)?.tutor;

    if (!tutor) {
        return null;
    }

    const students = clients.filter(({ mentor }) => mentor === tutor);
    const monthlyProfit =
        students.reduce(
            (acc, { lessonsPerWeek, price }) => acc + lessonsPerWeek * price,
            0
        ) * 4;

    return (
        <>
            <TableWrapper>
                <Button
                    type="button"
                    onClick={e => {
                        handleGenerateModalContent(e);
                        toggleModal();
                    }}
                    data-btnType="addClient"
                    btnType="addClient"
                >
                    Add Client
                </Button>
                <Table>
                    <TableHead>
                        <Row>
                            <TableHeading>Name</TableHeading>
                            <TableHeading>Lessons per week</TableHeading>
                            <TableHeading>Price</TableHeading>
                            <TableHeading>Paid Hours</TableHeading>
                        </Row>
                    </TableHead>
                    <TableBody>
                        {students.map(
                            ({
                                id,
                                name,
                                lessonsPerWeek,
                                price,
                                paidHours,
                                lessonsDate,
                                lessonsPayment,
                            }) => (
                                <Row key={id}>
                                    <Data>
                                        <StyledLink
                                            to={`/note-book/clients/${id}`}
                                        >
                                            {name}
                                        </StyledLink>
                                    </Data>
                                    <Data>{lessonsPerWeek}</Data>
                                    <Data>{price} UAH</Data>
                                    {paidHours === 0 || paidHours === '' ? (
                                        <Data />
                                    ) : (
                                        <Data $paidHours={paidHours}>
                                            {paidHours} lessons
                                        </Data>
                                    )}
                                    <Data>
                                        <Button
                                            type="button"
                                            onClick={e => {
                                                handleGenerateModalContent(e);
                                                toggleModal();
                                                setClientInfo({
                                                    id,
                                                    name,
                                                    lessonsPerWeek,
                                                    price,
                                                    paidHours,
                                                    lessonsDate,
                                                    lessonsPayment,
                                                });
                                            }}
                                            btnType="edit"
                                            data-btnType="edit"
                                        >
                                            Edit
                                        </Button>
                                    </Data>
                                </Row>
                            )
                        )}
                    </TableBody>
                </Table>
                <MonthlyProfit>Monthly profit: {monthlyProfit}</MonthlyProfit>
            </TableWrapper>
        </>
    );
};

export default ClientsTable;
