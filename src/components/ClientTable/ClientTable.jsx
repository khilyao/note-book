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
} from './ClientTable.styled';
import Button from 'components/Button/Button';
import { modalContext } from 'contexts/context';
import { ToastContainer } from 'react-toastify';

const ClientsTable = ({ clients }) => {
    const { toggleModal, handleGenerateModalContent, setClientInfo } =
        useContext(modalContext);

    const monthlyProfit =
        clients.reduce(
            (acc, { lessonsPerWeek, price }) => acc + lessonsPerWeek * price,
            0
        ) * 4;

    return (
        <>
            <TableWrapper>
                <ToastContainer />
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
                            <TableHeading>Credit</TableHeading>
                        </Row>
                    </TableHead>
                    <TableBody>
                        {clients.map(
                            ({ id, name, lessonsPerWeek, price, credit }) => (
                                <Row key={id}>
                                    <Data>{name}</Data>
                                    <Data>{lessonsPerWeek}</Data>
                                    <Data>{price} UAH</Data>
                                    {credit === 0 || credit === '' ? (
                                        <Data />
                                    ) : (
                                        <Data style={{ color: 'red' }}>
                                            {credit} UAH
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
