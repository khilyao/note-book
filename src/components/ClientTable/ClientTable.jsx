import { useContext } from 'react';
import {
    TableWrapper,
    Table,
    TableHead,
    TableHeading,
    TableBody,
    Row,
    Data,
} from './ClientTable.styled';
import Button from 'components/Button/Button';
import { modalContext } from 'contexts/context';

const ClientsTable = ({ clients }) => {
    const { toggleModal, handleGenerateModalContent, setClientInfo } =
        useContext(modalContext);

    return (
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
                        <TableHeading>Number of lessons</TableHeading>
                        <TableHeading>Price</TableHeading>
                    </Row>
                </TableHead>
                <TableBody>
                    {clients.map(({ id, name, lessonsPerWeek, price }) => (
                        <Row key={id}>
                            <Data>{name}</Data>
                            <Data>{lessonsPerWeek}</Data>
                            <Data>{price}</Data>
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
                    ))}
                </TableBody>
            </Table>
        </TableWrapper>
    );
};

export default ClientsTable;
