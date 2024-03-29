import { useState, useContext, useEffect } from 'react';
import { appContext } from 'contexts/context';
import { toast } from 'react-toastify';
import Button from 'components/Button/Button';
import { StyledContainer, StyledField, StyledInput } from './AuthForm.styled';

const AuthForm = () => {
    const [password, setPassword] = useState('');
    const { authenticated, setAuthenticated } = useContext(appContext);

    const options = {
        theme: 'colored',
        autoClose: 1500,
        closeOnClick: true,
        hideProgressBar: true,
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleSubmitPassword = () => {
        if (password === 'sfwew12') {
            setAuthenticated(true);
            localStorage.setItem('isPassEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        setPassword('');
        toast.error('Incorrect password. Try again', options);
    };

    useEffect(() => {
        if (localStorage.getItem('isPassEntered')) {
            setAuthenticated(true);
        }
    });

    return (
        <>
            {!authenticated && (
                <StyledContainer>
                    <StyledField htmlFor="password">Password</StyledField>
                    <StyledInput
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Button type="button" onClick={handleSubmitPassword}>
                        Войти
                    </Button>
                </StyledContainer>
            )}
        </>
    );
};

export default AuthForm;
