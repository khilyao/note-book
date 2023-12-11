import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, btnType }) => {
    return (
        <StyledButton $btnType={btnType} type="button" onClick={onClick}>
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    btnType: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default Button;
