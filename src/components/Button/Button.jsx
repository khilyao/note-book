import { StyledButton } from './Button.styled';

const Button = ({ children, onClick }) => {
    return (
        <StyledButton type="button" onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;
