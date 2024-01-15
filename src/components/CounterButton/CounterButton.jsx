import PropTypes from 'prop-types';
import { StyledButton } from './CounterButton.styled';

const CounterButton = ({ btnType, children }) => {
    return (
        <>
            {btnType === 'increment' && (
                <StyledButton type="button">{children}</StyledButton>
            )}
            {btnType === 'decrement' && (
                <StyledButton type="button">{children}</StyledButton>
            )}
        </>
    );
};

CounterButton.propTypes = {
    btnType: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default CounterButton;
