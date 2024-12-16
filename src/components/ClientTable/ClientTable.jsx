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
    RealProfit,
    Rate,
} from './ClientTable.styled';
import { Section } from 'components/App/App.styled';
import Button from 'components/Button/Button';
import { appContext, modalContext } from 'contexts/context';
import { fbGetClients, fbGetTutors } from '../../firebase/functions/index';

const ClientsTable = () => {
    const { pathname } = useLocation();
    const currentTutorName = pathname.split('/').pop();
    const { toggleModal, handleGenerateModalContent, setClientInfo } =
        useContext(modalContext);
    const { clients, setClients, tutors, setTutors } = useContext(appContext);

    useEffect(() => {
        fbGetClients().then(clients => {
            setClients(clients);
        });

        fbGetTutors().then(tutors => {
            setTutors(tutors);
        });
    }, [setClients, setTutors]);

    const tutor = tutors.find(({ tutor }) => tutor === currentTutorName);

    if (!tutor) {
        return null;
    }

    const students = clients?.filter(
        ({ mentor }) => mentor === currentTutorName
    );
    const monthlyProfit =
        students.reduce(
            (acc, { lessonsPerWeek, price }) => acc + lessonsPerWeek * price,
            0
        ) * 4;

    const realProfitPreviousMonth = students.reduce((totalProfit, student) => {
        if (student.name.includes('*')) {
            return totalProfit;
        }

        const studentProfit =
            student.lessonsPayment?.reduce((sum, lesson) => {
                const previousMonth = new Date().getMonth();
                const lessonMonth = parseInt(lesson.date.split('.')[1]);

                if (lesson.type === 'lesson' && previousMonth === lessonMonth) {
                    return sum + lesson.duration * student.price;
                }
                return sum;
            }, 0) || 0;
        return totalProfit + studentProfit;
    }, 0);

    const ratePreviousMonth = parseInt(
        realProfitPreviousMonth * tutor.percentage
    );

    const realProfitCurrentMonth = students.reduce((totalProfit, student) => {
        if (student.name.includes('*')) {
            return totalProfit;
        }

        const studentProfit =
            student.lessonsPayment?.reduce((sum, lesson) => {
                const currentMonth = new Date().getMonth() + 1;
                const lessonMonth = parseInt(lesson.date.split('.')[1]);

                if (lesson.type === 'lesson' && currentMonth === lessonMonth) {
                    return sum + lesson.duration * student.price;
                }
                return sum;
            }, 0) || 0;
        return totalProfit + studentProfit;
    }, 0);

    const rateCurrentMonth = parseInt(
        realProfitCurrentMonth * tutor.percentage
    );

    const transformLessonDuration = time => {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        if (hours > 0 && minutes > 0) {
            return `${hours} год ${minutes} хв`;
        } else if (hours > 0 && minutes === 0) {
            return `${hours} год`;
        } else {
            return `${minutes} хв`;
        }
    };

    return (
        <Section>
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
                    Додати учня
                </Button>
                <Table>
                    <TableHead>
                        <Row>
                            <TableHeading>Імʼя</TableHeading>
                            <TableHeading style={{ width: '240px' }}>
                                Кількість занять/тижд
                            </TableHeading>
                            <TableHeading>Ціна за заняття</TableHeading>
                            <TableHeading>Баланс годин</TableHeading>
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
                                    {(paidHours === 0 || paidHours === '') && (
                                        <Data />
                                    )}
                                    {paidHours > 0 && (
                                        <Data $paidHours={paidHours}>
                                            {transformLessonDuration(
                                                paidHours * 60
                                            )}
                                        </Data>
                                    )}
                                    {paidHours < 0 && (
                                        <Data $paidHours={paidHours}>
                                            {transformLessonDuration(
                                                Math.abs(paidHours) * 60
                                            )}
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
                                                    lessonsPayment,
                                                });
                                            }}
                                            btnType="edit"
                                            data-btnType="edit"
                                        >
                                            Редагувати
                                        </Button>
                                    </Data>
                                </Row>
                            )
                        )}
                    </TableBody>
                </Table>
                <MonthlyProfit>
                    Орієнтовний місячний дохід: {monthlyProfit}
                </MonthlyProfit>
                {realProfitCurrentMonth && (
                    <RealProfit>
                        Фактичий прибуток за поточний місяць:{' '}
                        {realProfitCurrentMonth}{' '}
                        {tutor.percentage !== 0 && (
                            <Rate>
                                ({rateCurrentMonth}) - {tutor.percentage * 100}%
                            </Rate>
                        )}
                    </RealProfit>
                )}
                {realProfitPreviousMonth && (
                    <RealProfit>
                        Фактичий прибуток за попередній місяць:{' '}
                        {realProfitPreviousMonth}{' '}
                        {tutor.percentage !== 0 && (
                            <Rate>
                                ({ratePreviousMonth}) - {tutor.percentage * 100}
                                %
                            </Rate>
                        )}
                    </RealProfit>
                )}
            </TableWrapper>
        </Section>
    );
};

export default ClientsTable;
