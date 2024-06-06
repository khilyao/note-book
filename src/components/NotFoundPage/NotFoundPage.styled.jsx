import styled from 'styled-components';

export const StyledText = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;

    text-align: center;

    font-size: 24px;
    line-height: 1.5;
    font-weight: 700;
    letter-spacing: 0.06em;

    transform: translate(-50%, -50%);

    @media screen and (min-width: 1024px) {
        font-size: 60px;
    }
`;
