import styled from 'styled-components';

export const StyledInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
        display: block;
    }
`;

export const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 30px;
    padding: 10px;

    margin-top: 40px;
    margin-bottom: 30px;

    font-size: 20px;

    @media screen and (min-width: 768px) {
        gap: 20px;
    }
`;

export const Signature = styled.span`
    position: absolute;
    left: 0;
    bottom: 0;

    font-size: 20px;
`;

export const StyledDeleteBtn = styled.button`
    position: absolute;
    top: 50%;
    right: 10px;

    padding: 8px 12px;

    font-weight: 900;

    border-radius: 30%;
    background-color: rgba(250, 241, 241, 0.5);
    border: none;
    outline: none;
    opacity: 0;

    transform: translateY(-50%);

    z-index: 5;
    transition: opacity 100ms linear;
    cursor: pointer;

    &:hover {
        transform: translateY(-50%), scale(1.1);
        opacity: 1;
    }
`;

export const StyledTitle = styled.h2`
    font-size: 24px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;

    @media screen and (min-width: 768px) {
        font-size: 30px;
    }
`;
