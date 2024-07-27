import styled from 'styled-components';
import { ReactComponent as HomeIcon } from 'assets/home.svg';

export const Main = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 80px;

    @media screen and (min-width: 1024px) {
        margin-top: 110px;
    }
`;

export const StyledInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 0 50px 0;

    @media screen and (min-width: 768px) {
        display: block;
        text-align: center;
    }
`;

export const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 30px;
    justify-items: center;
    align-items: center;

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

export const Home = styled(HomeIcon)`
    width: 37px;

    cursor: pointer;

    @media screen and (min-width: 768px) {
        width: 55px;
    }
`;

export const StyledTitle = styled.h2`
    position: absolute;
    left: 50%;

    display: inline-block;

    padding: 10px 12px;

    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;

    transform: translateX(-50%);

    background: linear-gradient(
        90deg,
        rgba(147, 107, 211, 0.4) 0.01%,
        rgba(137, 88, 217, 0.4) 50.5%,
        rgba(145, 104, 214, 0.4) 100%
    );
    border-radius: 12px;

    @media screen and (min-width: 768px) {
        font-size: 20px;

        padding: 20px 24px;
    }
`;

export const LoadMore = styled.button`
    display: inline-block;

    padding: 12px 16px;
    margin: 0 auto;
    margin-top: 15px;

    color: #fff;
    background: #000;

    font-family: 'Roboto', serif;
    font-size: 14px;
    font-weight: 900;
    line-height: 1.14;
    letter-spacing: 0.06em;

    border: none;
    cursor: pointer;

    transition:
        color 150ms linear,
        background-color 150ms linear;

    border: 2px solid #000;
    z-index: 1;

    @media screen and (min-width: 768px) {
        padding: 14px 18px;
        font-size: 18px;
        font-weight: 900;
        line-height: 16px;
        letter-spacing: 1.08px;
    }

    &:hover {
        color: #000;
        background-color: #fff;
    }
`;
