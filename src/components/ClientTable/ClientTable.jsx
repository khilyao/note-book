import { useContext } from 'react';
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
import { appContext, modalContext } from 'contexts/context';

const ClientsTable = () => {
    const { toggleModal, handleGenerateModalContent, setClientInfo } =
        useContext(modalContext);
    const { clients } = useContext(appContext);

    const monthlyProfit =
        clients.reduce(
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
                        {clients.map(
                            ({
                                id,
                                name,
                                lessonsPerWeek,
                                price,
                                paidHours,
                                lessonsDate,
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
