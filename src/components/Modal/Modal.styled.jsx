import styled from 'styled-components';
import { ReactComponent as CancelSVG } from 'assets/cancel-circle.svg';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.2);

    z-index: 5;
`;

export const StyledModal = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(100vw / 1.5);
    max-width: 260px;
    padding: calc(100vh / 15) 15px 15px 15px;

    background-color: #fff;

    @media screen and (min-width: 460px) {
    }

    @media screen and (min-width: 460px) {
        padding: 50px 25px 15px;
    }

    @media screen and (min-width: 768px) {
        min-height: 350px;
        padding-top: 60px;
    }
`;

export const StyledCancelSVG = styled(CancelSVG)`
    position: absolute;
    top: 14px;
    right: 20px;

    width: 32px;
    height: 32px;

    transition: fill 150ms linear;
    cursor: pointer;

    &:hover,
    &:focus {
        fill: rgb(194, 65, 170);
    }

    @media screen and (min-width: 460px) {
        transform: scale(1.1);
    }
`;
