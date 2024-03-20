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

    &::-webkit-scrollbar {
        width: 14px;
        height: 8px;
        background-color: #f0f0f0;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #666;
        border-radius: 9em;
        box-shadow: inset 1px 1px 10px #ddd;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #444;
    }

    &::-webkit-scrollbar-button:vertical:start:decrement {
        background: linear-gradient(
                120deg,
                #ddd 40%,
                rgba(255, 255, 255, 0) 41%
            ),
            linear-gradient(240deg, #ddd 40%, rgba(255, 255, 255, 0) 41%),
            linear-gradient(0deg, #ddd 30%, rgba(255, 255, 255, 0) 31%);
        background-color: #f0f0f0;
    }

    &::-webkit-scrollbar-button:vertical:end:increment {
        background: linear-gradient(
                300deg,
                #ddd 40%,
                rgba(255, 255, 255, 0) 41%
            ),
            linear-gradient(60deg, #ddd 40%, rgba(255, 255, 255, 0) 41%),
            linear-gradient(180deg, #ddd 30%, rgba(255, 255, 255, 0) 31%);
        background-color: #f0f0f0;
    }

    &::-webkit-scrollbar-button:horizontal:start:decrement {
        background: linear-gradient(30deg, #ddd 40%, rgba(255, 255, 255, 0) 41%),
            linear-gradient(150deg, #ddd 40%, rgba(255, 255, 255, 0) 41%),
            linear-gradient(270deg, #ddd 30%, rgba(255, 255, 255, 0) 31%);
        background-color: #f0f0f0;
    }

    &::-webkit-scrollbar-button:horizontal:end:increment {
        background: linear-gradient(
                210deg,
                #ddd 40%,
                rgba(255, 255, 255, 0) 41%
            ),
            linear-gradient(330deg, #ddd 40%, rgba(255, 255, 255, 0) 41%),
            linear-gradient(90deg, #ddd 30%, rgba(255, 255, 255, 0) 31%);
        background-color: #f0f0f0;
    }

    font-size: 20px;

    overflow: auto;

    @media screen and (min-width: 768px) {
        gap: 20px;
    }
`;

export const StyledLessonDate = styled.li`
    position: relative;

    display: inline-flex;
    justify-content: center;
    width: 200px;

    padding: 15px;

    font-family: 'Inter', sans-serif;
    font-weight: 500;

    background-color: ${({ $paid }) =>
        $paid === 'true' ? '#bafa83' : '#ffa3a3'};
    border-radius: 8px;

    cursor: pointer;

    @media screen and (min-width: 768px) {
        width: 300px;
        font-size: 30px;
    }
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
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;

    @media screen and (min-width: 768px) {
        font-size: 30px;
    }
`;
