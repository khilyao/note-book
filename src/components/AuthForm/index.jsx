import { useState, useContext } from 'react';
import { appContext } from 'contexts/context';
import { toast } from 'react-toastify';
import Button from 'components/Button/Button';
import { StyledContainer, StyledField, StyledInput } from './AuthForm.styled';

const AuthForm = () => {
    const [password, setPassword] = useState('');
    const {
        isSanyaAuthenticated,
        isSofiaAuthenticated,
        isEmirAuthenticated,
        isRavilAuthenticated,
        isVikaAuthenticated,
        setIsSanyaAuthenticated,
        setIsSofiaAuthenticated,
        setIsEmirAuthenticated,
        setIsRavilAuthenticated,
        setIsVikaAuthenticated,
    } = useContext(appContext);

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
            setIsSanyaAuthenticated(true);
            localStorage.setItem('isSanyaEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        if (password === 'sofia2308') {
            setIsSofiaAuthenticated(true);
            localStorage.setItem('isSofiaEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        if (password === 'emir_boss') {
            setIsEmirAuthenticated(true);
            localStorage.setItem('isEmirEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        if (password === 'ravil1488') {
            setIsRavilAuthenticated(true);
            localStorage.setItem('isRavilEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        if (password === 'vika1488') {
            setIsVikaAuthenticated(true);
            localStorage.setItem('isVikaEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        setPassword('');
        toast.error('Incorrect password. Try again', options);
    };

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            handleSubmitPassword();
        }
    };

    return (
        <>
            {(!isSanyaAuthenticated ||
                !isSofiaAuthenticated ||
                !isEmirAuthenticated ||
                !isRavilAuthenticated ||
                !isVikaAuthenticated) && (
                <StyledContainer>
                    <StyledField htmlFor="password">Password</StyledField>
                    <StyledInput
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        onKeyDown={handleKeyPress}
                    />
                    <Button type="submit" onClick={handleSubmitPassword}>
                        Log in
                    </Button>
                </StyledContainer>
            )}
        </>
    );
};

export default AuthForm;
