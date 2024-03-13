import styled from 'styled-components';

export const StyledInfoBlock = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const StyledList = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 10px;

    max-height: 500px;

    margin-bottom: 30px;

    font-size: 20px;

    box-shadow: inset 0px 200px 46px -60px rgba(255, 255, 255, 0.55);
    overflow: auto;

    @media screen and (min-width: 768px) {
        gap: 20px;
    }
`;

export const StyledLessonDate = styled.li`
    display: inline-flex;
    justify-content: center;
    width: 200px;

    z-index: -1;

    padding: 15px;

    font-family: 'Inter', sans-serif;
    font-weight: 500;

    background-color: ${({ $paid }) =>
        $paid === 'true' ? '#bafa83' : '#ffa3a3'};
    border-radius: 8px;

    @media screen and (min-width: 768px) {
        width: 300px;
        font-size: 30px;
    }
`;

export const StyledTitle = styled.h2`
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;

    @media screen and (min-width: 768px) {
        font-size: 30px;
    }
`;
