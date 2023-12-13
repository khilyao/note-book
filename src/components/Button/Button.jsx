import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, btnType = 'button' }) => {
    return (
        <StyledButton
            $btnType={btnType}
            data-btntype={btnType}
            type="button"
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default Button;
