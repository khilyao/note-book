import { useContext } from 'react';
import {
    TableWrapper,
    Table,
    TableHead,
    TableHeading,
    TableBody,
    Row,
    Data,
} from './ClientsTable.styled';
import Button from 'components/Button/Button';
import { modalContext } from 'contexts/context';

const ClientsTable = ({ clients }) => {
    const { isModalShown, modalShownToggle } = useContext(modalContext);

    return (
        <TableWrapper>
            <Table className="table">
                <TableHead>
                    <Row>
                        <TableHeading>Name</TableHeading>
                        <TableHeading>Number of lessons</TableHeading>
                        <TableHeading>Price</TableHeading>
                    </Row>
                </TableHead>
                <TableBody>
                    {clients.map(({ name, numberOfLessons, price }) => (
                        <Row key={name}>
                            <Data>{name}</Data>
                            <Data>{numberOfLessons}</Data>
                            <Data>{price}</Data>
                            <Data>
                                <Button
                                    type="button"
                                    onClick={modalShownToggle}
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
