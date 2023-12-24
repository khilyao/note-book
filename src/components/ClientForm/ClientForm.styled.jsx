import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledField = styled(Field)`
    display: flex;
    align-items: center;

    font-size: initial;
    font-family: 'Inter', sans-serif;
    font-weight: 400;

    &:focus {
        outline: none;
        border: 2px solid rgb(37, 99, 235);
        border-radius: 3px;
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

export const StyledLabel = styled.label`
    margin-bottom: 5px;
`;

export const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 14px;
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

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledBtn = styled.button`
    display: inline-block;

    margin-top: 15px;
    padding: 8px 14px;

    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;

    color: rgb(79 70 229);
    background-color: rgb(238 242 255);
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
        background-color: rgb(224, 231, 255);
        ${({ $delete }) => $delete && `background-color: rgb(219, 10, 80);`}
    }

    @media screen and (min-width: 460px) {
        font-size: 18px;
    }

    @media screen and (min-width: 768px) {
        margin-top: 30px;
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
