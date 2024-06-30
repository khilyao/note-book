import sad from 'assets/sad.png';
import cool from 'assets/cool.png';
import filledStar from 'assets/filledStar.svg';
import emptyStar from 'assets/emptyStar.svg';
import notebookAPI from 'services/notebookAPI';
import {
    Card,
    Title,
    InfoBlock,
    CloseBtn,
    Field,
    Score,
    Paid,
} from './CardInfo.styled';

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

    return (
        <Card $type={type}>
            <CloseBtn
                onClick={
                    isAdmin
                        ? async () => {
                              try {
                                  await notebookAPI.removeLesson(client, id);
                                  onDelete(prevState => !prevState);
                              } catch (error) {
                                  console.error(
                                      'Error toggling lesson paid status:',
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
                            <span>{duration} год</span>
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
                            ></img>
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
                            <span>{amount}</span>
                        </Field>
                        <Field>
                            <p>З них оплачено:</p>
                        </Field>
                        <Field>
                            <p>Заборгованих годин</p>
                            <span>{credit}</span>
                        </Field>
                        <Field>
                            <p>Поточний баланс годин</p>
                            <span>{balance}</span>
                        </Field>
                    </InfoBlock>
                )}
            </div>
        </Card>
    );
};

export default CardInfo;
