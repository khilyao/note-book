import sad from 'assets/sad.png';
import cool from 'assets/cool.png';
import filledStar from 'assets/filledStar.svg';
import emptyStar from 'assets/emptyStar.svg';
import { removeLesson } from '../../firebase/functions';
import {
    Card,
    Title,
    InfoBlock,
    CloseBtn,
    Field,
    Score,
    Paid,
} from './CardInfo.styled';
import { useContext } from 'react';
import { appContext } from 'contexts/context';
import { fbGetClients } from '../../firebase/functions';

const CardInfo = ({
    client,
    onDelete,
    type,
    id,
    credit,
    duration,
    isAdmin,
    paid,
    review,
    homework,
    amount,
    balance,
    date,
    onTogglePaid,
}) => {
    const title = type === 'lesson' ? 'Деталі заняття' : 'Платіж';
    const { setClients } = useContext(appContext);

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
        <Card $type={type}>
            <CloseBtn
                onClick={
                    isAdmin
                        ? async () => {
                              try {
                                  await removeLesson(client, id);
                                  const clients = await fbGetClients();
                                  setClients(clients);
                                  onDelete(clients);
                              } catch (error) {
                                  console.error(
                                      'Error removing lesson:',
                                      error
                                  );
                              }
                          }
                        : null
                }
            />
            <div>
                <Title>{title}</Title>
                {type === 'lesson' && (
                    <InfoBlock>
                        <Field>
                            <p>Дата заняття</p>
                            <span>{date}</span>
                        </Field>
                        <Field>
                            <p>Тривалість</p>
                            <span>
                                {transformLessonDuration(duration * 60)}
                            </span>
                        </Field>
                        <Field>
                            <p>Оплачено</p>
                            <Paid
                                onClick={
                                    isAdmin
                                        ? () => {
                                              onTogglePaid(id);
                                          }
                                        : null
                                }
                                $isAdmin={isAdmin}
                                $paid={paid}
                            >
                                {paid ? 'Так' : 'Ні'}
                            </Paid>
                        </Field>
                        <Field>
                            <p>Виконання д/з</p>
                            <img
                                src={homework ? cool : sad}
                                alt="mark"
                                width={28}
                            />
                        </Field>
                        <Field>
                            <p>Відгук за заняття</p>
                            <Score>
                                {[...Array(5)].map((_, index) => (
                                    <img
                                        key={index}
                                        src={
                                            index < review
                                                ? filledStar
                                                : emptyStar
                                        }
                                        alt={
                                            index < review
                                                ? 'filled star'
                                                : 'empty star'
                                        }
                                        width={16}
                                    />
                                ))}
                            </Score>
                        </Field>
                    </InfoBlock>
                )}
                {type === 'payment' && (
                    <InfoBlock>
                        <Field>
                            <p>Дата платежу</p>
                            <span>{date}</span>
                        </Field>
                        <Field>
                            <p>Кількість годин</p>
                            <span>{transformLessonDuration(amount * 60)}</span>
                        </Field>
                        <Field>
                            <p>З них оплачено:</p>
                        </Field>
                        <Field>
                            <p>Заборгованість</p>
                            <span>{transformLessonDuration(credit * 60)}</span>
                        </Field>
                        <Field>
                            <p>Поточний залишок</p>
                            <span>{transformLessonDuration(balance * 60)}</span>
                        </Field>
                    </InfoBlock>
                )}
            </div>
        </Card>
    );
};

export default CardInfo;
