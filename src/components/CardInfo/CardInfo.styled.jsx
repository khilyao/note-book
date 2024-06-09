import styled, { css } from 'styled-components';
import { ReactComponent as DeleteIcon } from 'assets/close.svg';

export const Card = styled.div`
    position: relative;

    width: 100%;
    height: 100%;
    margin: auto;

    max-width: 320px;
    padding: 23px 25px;

    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    line-height: 1.4;

    ${({ $type }) =>
        $type === 'lesson'
            ? css`
                  background-color: rgba(244, 201, 247, 0.46);
                  border: 5px solid rgba(45, 12, 49, 0.45);
              `
            : css`
                  background-color: rgba(247, 240, 201, 0.46);
                  border: 5px solid rgba(78, 74, 2, 0.45);
              `};

    border-radius: 19px;
    box-shadow:
        0.6px 0.7px 1.6px 0px rgba(0, 0, 0, 0.01),
        2.6px 3.1px 3.3px 0px rgba(0, 0, 0, 0.015),
        6.4px 7.7px 6.5px 0px rgba(0, 0, 0, 0.02),
        12.3px 14.8px 12.7px 0px rgba(0, 0, 0, 0.02),
        20.7px 24.9px 23.4px 0px rgba(0, 0, 0, 0.025),
        32px 38.4px 40px 0px rgba(0, 0, 0, 0.035);

    transition: transform 150ms linear;

    @media screen and (min-width: 768px) {
        box-shadow:
            1.19px 1.42px 3.15px 0px rgba(0, 0, 0, 0.02),
            5.22px 6.26px 6.52px 0px rgba(0, 0, 0, 0.03),
            12.8px 15.36px 13px 0px rgba(0, 0, 0, 0.04),
            24.66px 29.59px 25.48px 0px rgba(0, 0, 0, 0.04),
            41.49px 49.79px 46.85px 0px rgba(0, 0, 0, 0.05),
            64.02px 76.82px 80px 0px rgba(0, 0, 0, 0.07);
    }

    @media screen and (min-width: 1024px) {
        &:hover {
            transform: scale(1.05);
        }
    }
`;

export const CloseBtn = styled(DeleteIcon)`
    position: absolute;
    top: 14px;
    right: 14px;

    background-color: transparent;
    border: none;

    cursor: pointer;

    transition: transform 150ms linear;

    &:hover {
        transform: scale(1.05) translateY(-1px);
    }
`;

export const Title = styled.h2`
    padding-bottom: 10px;

    font-size: 16px;
    font-weight: 800;
    line-height: 1.4;
    letter-spacing: 0.05em;

    color: rgb(15, 15, 15);

    text-align: left;
    border-bottom: 2px solid rgb(180, 136, 136);
    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`;

export const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 8px;

    gap: 12px;

    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;

    color: rgb(15, 15, 15);

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
`;

export const Field = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Paid = styled.span`
    color: ${({ $paid }) => ($paid ? '#039900' : '#FB0303')};

    cursor: pointer;
`;

export const Score = styled.div`
    padding: 2px 5px;

    background: rgb(15, 12, 12);
    border-radius: 4px;
`;
