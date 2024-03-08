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

export const Field = styled.input`
    padding: 5px;
`;

export const StyledButton = styled.button`
    display: inline-block;
    border: none;
    min-width: 80px;
    margin: 0 auto;
`;
