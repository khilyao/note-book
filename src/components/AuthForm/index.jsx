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
        isVeronikaAuthenticated,
        isYuliaAuthenticated,
        isAnyaAuthenticated,
        isOlyaAuthenticated,
        isAlbinaAuthenticated,
        isAnnaAuthenticated,
        isAlinaAuthenticated,
        isMaksymAuthenticated,
        isIvannaAuthenticated,
        isOstapAuthenticated,
        isVaryaAuthenticated,
        setIsSanyaAuthenticated,
        setIsSofiaAuthenticated,
        setIsEmirAuthenticated,
        setIsRavilAuthenticated,
        setIsVikaAuthenticated,
        setIsVeronikaAuthenticated,
        setIsYuliaAuthenticated,
        setIsAnyaAuthenticated,
        setIsOlyaAuthenticated,
        setIsAlbinaAuthenticated,
        setIsAnnaAuthenticated,
        setIsAlinaAuthenticated,
        setIsMaksymAuthenticated,
        setIsIvannaAuthenticated,
        setIsOstapAuthenticated,
        setIsVaryaAuthenticated,
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

        if (password === 'veronika2024') {
            setIsVeronikaAuthenticated(true);
            localStorage.setItem('isVeronikaEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        if (password === 'yulia2024') {
            setIsYuliaAuthenticated(true);
            localStorage.setItem('isYuliaEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        if (password === 'anya2024') {
            setIsAnyaAuthenticated(true);
            localStorage.setItem('isAnyaEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        if (password === 'olya2024') {
            setIsOlyaAuthenticated(true);
            localStorage.setItem('isOlyaEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        if (password === 'albina_poltava') {
            setIsAlbinaAuthenticated(true);
            localStorage.setItem('isAlbinaEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        if (password === 'anna_anna') {
            setIsAnnaAuthenticated(true);
            localStorage.setItem('isAnnaEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        if (password === 'alina2024') {
            setIsAlinaAuthenticated(true);
            localStorage.setItem('isAlinaEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        if (password === 'maksym2025') {
            setIsMaksymAuthenticated(true);
            localStorage.setItem('isMaksymEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        if (password === 'ivanna_pro') {
            setIsIvannaAuthenticated(true);
            localStorage.setItem('isIvannaEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        if (password === 'ostap_pro') {
            setIsOstapAuthenticated(true);
            localStorage.setItem('isOstapEntered', true);
            toast.success("Let's check profit :)", options);
            return;
        }

        if (password === 'varya_pro') {
            setIsVaryaAuthenticated(true);
            localStorage.setItem('isVaryaEntered', true);
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
                !isVikaAuthenticated ||
                !isVeronikaAuthenticated ||
                !isYuliaAuthenticated ||
                !isAnyaAuthenticated ||
                !isOlyaAuthenticated ||
                !isAlbinaAuthenticated ||
                !isAnnaAuthenticated ||
                !isAlinaAuthenticated ||
                !isMaksymAuthenticated ||
                !isIvannaAuthenticated ||
                !isOstapAuthenticated ||
                !isVaryaAuthenticated) && (
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
