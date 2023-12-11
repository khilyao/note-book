import styled, { css } from 'styled-components';

const editInfoStyles = css`
    color: rgb(79, 70, 229);
    background-color: transparent;

    &:hover {
        color: rgb(49, 46, 129);
    }
`;

const addClientStyles = css`
    font-weight: 600;

    color: #fff;
    background-color: rgb(79, 70, 229);
    border-radius: 6px;

    transition: background-color 100ms linear;

    &:hover {
        background-color: rgb(99, 102, 241);
    }
`;

export const StyledButton = styled.button`
    display: inline-block;

    padding: 8px 12px;

    font-size: 14px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;

    border: 0;
    outline: 0;

    transition: color 100ms linear;

    cursor: pointer;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 22px;
    }

    ${({ $btnType }) => $btnType === 'edit' && editInfoStyles}
    ${({ $btnType }) => $btnType === 'addClient' && addClientStyles}
`;
