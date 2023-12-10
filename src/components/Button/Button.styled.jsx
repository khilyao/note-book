import styled from 'styled-components';

export const StyledButton = styled.button`
    display: inline-block;

    font-size: 14px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;

    color: rgb(79, 70, 229);
    background-color: transparent;
    border: 0;
    outline: 0;

    transition: color 200ms linear;

    cursor: pointer;

    &:hover {
        color: rgb(49, 46, 129);
    }
`;
