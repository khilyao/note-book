import styled from 'styled-components';

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    background-color: transparent;
    outline: none;
    border: 2px solid #000;

    cursor: pointer;

    transition: border 150ms linear;

    &:hover {
        border-color: red;
    }
`;
