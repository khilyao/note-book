import styled from 'styled-components';
import { ReactComponent as HomeIcon } from 'assets/home.svg';
import SlCopyButton from '@shoelace-style/shoelace/dist/react/copy-button';

export const StyledSection = styled.section`
    padding: 20px;

    font-family: 'Inter', sans-serif;
    font-size: 16px;
    background-color: #f7e8ff;
    border-radius: 10px;

    @media screen and (min-width: 768px) {
        padding: 40px;
    }

    @media screen and (min-width: 1024px) {
        padding: 60px;
    }
`;

export const StyledTitle = styled.h2`
    margin-top: 6px;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 24px;
    color: #6a20e2;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

    @media screen and (min-width: 768px) {
        font-size: 28px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 32px;
    }
`;

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;

    margin-top: 70px;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
        margin-top: 100px;
        margin-bottom: 20px;
    }
`;

export const Home = styled(HomeIcon)`
    width: 37px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        width: 55px;
    }
`;

export const InstructionsContainer = styled.div`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        padding: 30px;
    }

    @media screen and (min-width: 1024px) {
        padding: 40px;
    }
`;

export const CopyContainer = styled.div`
    position: relative;
    margin-top: 10px;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #9a73b2;
    border-radius: 5px;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        padding: 15px;
    }

    @media screen and (min-width: 1024px) {
        padding: 20px;
    }
`;

export const CopyButton = styled(SlCopyButton)`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 22px;
    }
`;

export const Subheading = styled.h3`
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 20px;
    color: #41388e;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
        font-size: 22px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 24px;
    }
`;

export const TextSpan = styled.span`
    display: block;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 20px;
    }
`;
