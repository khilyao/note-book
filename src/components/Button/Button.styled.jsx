import styled, { css } from 'styled-components';

const defaultButtonStyles = css`
    display: inline-block;

    min-width: 120px;

    margin: 0px auto;
    padding: 8px 12px;

    transition: background-color 100ms linear;

    &:hover {
        background-color: rgb(99, 102, 241);
    }
`;

const editInfoStyles = css`
    color: rgb(79, 70, 229);
    background-color: transparent;

    transition: background-color 100ms linear;

    &:hover {
        color: rgb(49, 46, 129);
        background-color: rgb(241 240 249);
    }
`;

const addClientStyles = css`
    font-weight: 600;

    color: #fff;
    background-color: rgb(79, 70, 229);

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

    color: #fff;
    background-color: rgb(79, 70, 229);

    border: 0;
    border-radius: 6px;
    outline: 0;

    transition: color 100ms linear;

    cursor: pointer;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 18px;
    }

    ${({ $btnType }) => $btnType === 'button' && defaultButtonStyles}
    ${({ $btnType }) => $btnType === 'edit' && editInfoStyles}
    ${({ $btnType }) => $btnType === 'addClient' && addClientStyles}
`;
