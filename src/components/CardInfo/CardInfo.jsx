import sad from 'assets/sad.png';
import cool from 'assets/cool.png';
import filledStar from 'assets/filledStar.svg';
import emptyStar from 'assets/emptyStar.svg';
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
    type,
    id,
    duration,
    paid,
    review,
    homework,
    amount,
    date,
}) => {
    const title = type === 'lesson' ? 'Деталі заняття' : 'Платіж';

    return (
        <Card $type={type}>
            <CloseBtn />
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
                            <span>{duration}</span>
                        </Field>
                        <Field>
                            <p>Оплачено</p>
                            <Paid $paid={paid}>{paid ? 'Так' : 'Ні'}</Paid>
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
                            <p>Відгук</p>
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
                            <p>Кількість занять</p>
                            <span>{amount}</span>
                        </Field>
                        <Field>
                            <p>З них оплачено</p>
                        </Field>
                        <Field>
                            <p>Заборгованих занять</p>
                            <span>-</span>
                        </Field>
                        <Field>
                            <p>Залишок занять</p>
                            <span>-</span>
                        </Field>
                    </InfoBlock>
                )}
            </div>
        </Card>
    );
};

export default CardInfo;
