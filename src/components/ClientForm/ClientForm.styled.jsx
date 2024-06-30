import styled from 'styled-components';
import { Field, Form } from 'formik';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { StyledButton } from '../CounterButton/CounterButton.styled';

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;

    font-family: 'Inter', sans-serif;
    font-weight: 500;

    @media screen and (min-width: 460px) {
        font-size: 16px;
    }

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    &:not(:last-of-type) {
        margin-bottom: 15px;
    }
`;

export const StyledLabel = styled.label`
    margin-bottom: 5px;

    font-size: 15px;
    font-weight: 600;
    line-height: 1.4;

    color: #344054;
`;

export const StyledField = styled(Field)`
    display: flex;
    align-items: center;

    padding: 10px 14px;

    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;

    color: #101828;
    border: 2px solid #d0d5dd;
    border-radius: 8px;
    background-color: #f6f7fc;

    &:focus {
        outline: none;
        border: 2px solid #d0d5dd;
    }

    &::placeholder {
        color: #667085;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type='number'] {
        appearance: textfield;
        -moz-appearance: textfield;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CounterWrapper = styled.div`
    display: flex;
    gap: 10px;

    margin-bottom: 20px;

    margin-top: 15px;
`;

export const StyledBtn = styled.button`
    display: inline-block;

    padding: 8px 14px;

    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;

    color: rgb(79 70 229);
    background-color: #dae1f8;
    border: none;
    border-radius: 4px;
    box-shadow:
        0 0 #0000,
        0 0 #0000,
        0 1px 2px 0 rgb(0 0 0 / 0.05);

    cursor: pointer;

    transition: background-color 100ms linear;

    ${({ $delete }) =>
        $delete &&
        `color: #fff;
    background-color: rgb(236,12,87);`}

    &:hover,
    &:focus {
        background-color: #cfd9f9;
        ${({ $delete }) => $delete && `background-color: #D92D20;`}
    }

    @media screen and (min-width: 460px) {
        font-size: 18px;
    }
`;

export const StyledErrorMsg = styled.div`
    padding: 5px 0;

    font-size: 14px;

    color: red;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
`;

export const StyledPlusIcon = styled(FaPlus)`
    transition: fill 150ms linear;
    fill: #232323;

    ${StyledButton}:hover & {
        fill: #07be07;
    }
`;

export const StyledMinusIcon = styled(FaMinus)`
    transition: fill 150ms linear;
    fill: #232323;

    ${StyledButton}:hover & {
        fill: red;
    }
`;
