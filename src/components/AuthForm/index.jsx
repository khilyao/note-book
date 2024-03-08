import { useState, useContext } from 'react';
import { appContext } from 'contexts/context';
import { StyledContainer, Field, StyledButton } from './AuthForm.styled';

const AuthForm = () => {
    const [password, setPassword] = useState('');
    const { setAuthenticated } = useContext(appContext);

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleSubmitPassword = () => {
        console.log('fsdf');
        if (password === 'sfwew12') {
            setAuthenticated(true);
        } else {
            alert('Неправильный пароль. Попробуйте снова.');
        }
    };

    return (
        <>
            <StyledContainer>
                <Field
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <StyledButton type="button" onClick={handleSubmitPassword}>
                    Войти
                </StyledButton>
            </StyledContainer>
        </>
    );
};

export default AuthForm;
