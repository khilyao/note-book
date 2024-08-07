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

    padding: 40px 15px 15px 15px;

    background-color: #eeeffb;
    border-radius: 8px;

    @media screen and (min-width: 460px) {
    }

    @media screen and (min-width: 460px) {
        padding: 50px 25px 30px;
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
        fill: #0606a4;
    }

    @media screen and (min-width: 460px) {
        transform: scale(1.1);
    }
`;
