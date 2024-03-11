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

    margin-bottom: 30px;

    font-size: 20px;
`;

export const StyledLessonDate = styled.li`
    display: inline-flex;
    justify-content: center;
    width: 200px;

    padding: 15px;

    font-family: 'Inter', sans-serif;
    font-weight: 500;

    background-color: ${({ $paid }) =>
        $paid === 'true' ? '#8fee3d' : '#ff3434'};
    border-radius: 8px;
`;

export const StyledTitle = styled.h2`
    font-size: 30px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
`;
