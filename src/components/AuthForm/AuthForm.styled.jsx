import styled from 'styled-components';

export const StyledContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    display: flex;
    flex-direction: column;
    gap: 10px;

    transform: translate(-50%, -50%);
`;

export const StyledField = styled.label`
    font-family: 'Inter', sans-serif;
`;

export const StyledInput = styled.input`
    display: block;

    padding: 0.625rem;

    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem;

    background-color: rgb(249, 250, 251);
    border-color: rgb(209, 213, 219);
    border-width: 1px;
    border-radius: 0.5rem;
`;
