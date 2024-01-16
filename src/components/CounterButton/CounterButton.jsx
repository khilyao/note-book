import PropTypes from 'prop-types';
import { StyledButton } from './CounterButton.styled';

const CounterButton = ({ onClick, children }) => {
    return (
        <>
            <StyledButton type="button" onClick={onClick}>
                {children}
            </StyledButton>
        </>
    );
};

CounterButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default CounterButton;
