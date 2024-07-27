import { useNavigate } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';
import {
    StyledSection,
    StyledTitle,
    Home,
    InstructionsContainer,
    CopyContainer,
    CopyButton,
    Paragraph,
    Subheading,
    TextSpan,
    NavWrapper,
} from './ReferralView.styled';
import React from 'react';

const ReferralView = () => {
    const navigate = useNavigate();

    const handleCopy = () => {
        const copyText = `Привіт! Я знаю одну круту компанію - Tutorez, вони допомагають мені в навчанні, хочу поділитися чудовою можливістю від них.  Якщо ти зареєструєшся та скористаєшся послугами, ми обидва отримаємо можливість виграти від 1 до 5 безкоштовних занять! Ось контакти для звʼязку:
Телефон: +38 066 493 90 38
Telegram: @khilyao (Олександр)
https://tutorez.com.ua`;

        navigator.clipboard.writeText(copyText);
    };

    return (
        <>
            <NavBar />
            <NavWrapper>
                <Home
                    style={{}}
                    onClick={() => {
                        navigate(-1);
                    }}
                />
            </NavWrapper>
            <StyledSection>
                <StyledTitle>
                    Отримайте таємний подарунок від нашої компанії
                </StyledTitle>
                <Paragraph>
                    Запросіть друга та отримайте можливість отримати таємничий
                    подарунок, який може містити від 1 до 5 безкоштовних занять!
                </Paragraph>
                <InstructionsContainer>
                    <Subheading>Інструкція для того, хто запрошує:</Subheading>
                    <div>
                        <TextSpan>
                            1. Скопіюйте наступний текст та відправте його
                            вашому другу:
                        </TextSpan>
                        <CopyContainer>
                            <Paragraph>
                                Привіт! Я знаю одну круту компанію - Tutorez,
                                вони допомагають мені в навчанні, хочу
                                поділитися чудовою можливістю від них. Якщо ти
                                почнеш займатися з ними, ми обидва отримаємо
                                можливість виграти від 1 до 5 безкоштовних
                                занять! Ось контакти для звʼязку:
                                <br />
                                Телефон: +38 066 493 90 38
                                <br />
                                Telegram: @khilyao
                                <br />
                                https://tutorez.com.ua
                            </Paragraph>
                            <CopyButton
                                value=" "
                                onClick={() => {
                                    handleCopy();
                                }}
                            />
                        </CopyContainer>
                        <TextSpan>
                            2. Після того, як ваш друг напише, ви отримаєте
                            підтвердження та зможете скористатися своїм
                            подарунком.
                        </TextSpan>
                    </div>
                </InstructionsContainer>
            </StyledSection>
        </>
    );
};

export default ReferralView;
