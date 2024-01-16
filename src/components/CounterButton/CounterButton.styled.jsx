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

    transition: border 100ms linear;

    &:nth-child(1) {
        &:hover {
            border-color: #07be07;
        }
    }

    &:nth-child(2) {
        &:hover {
            border-color: red;
        }
    }
`;
