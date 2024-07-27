import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 60px;
    padding: 0 30px;

    background-color: #2c2c2c;

    @media screen and (min-width: 1024px) {
        height: 80px;

        padding: 0 260px;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 25px;

    @media screen and (min-width: 1024px) {
        gap: 40px;
    }
`;

export const StyledLink = styled(Link)`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;

    color: white;

    transition: color 200ms linear;

    &:hover {
        color: #b205f6;
    }

    ${({ $new }) =>
        $new &&
        `
        &::after {
            content: "new";
            position: absolute;
            top: -8px;
            right: -16px;
            background-color: #cb050f;
            color: white;
            font-size: 10px;
            font-weight: bold;
            padding: 1px 4px;
            border-radius: 3px;
            transform: rotate(20deg);
        }
    `}

    @media screen and (min-width: 1024px) {
        font-size: 22px;

        &::after {
            top: -6px;
            right: -18px;
            font-size: 12px;
        }
    }
`;

export const StyledButton = styled.button`
    position: relative;

    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;

    background-color: transparent;
    outline: none;
    border: none;
    color: white;

    cursor: pointer;
    transition: color 200ms linear;

    &:hover {
        color: #b205f6;
    }

    ${({ $new }) =>
        $new &&
        `
        &::after {
            content: "new";
            position: absolute;
            top: -8px;
            right: -16px;
            background-color: #cb050f;
            color: white;
            font-size: 10px;
            font-weight: bold;
            padding: 1px 4px;
            border-radius: 3px;
            transform: rotate(20deg);
        }
    `}

    @media screen and (min-width: 1024px) {
        font-size: 22px;

        &::after {
            top: -10px;
            right: -18px;
            font-size: 12px;
        }
    }
`;
