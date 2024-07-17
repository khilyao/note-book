import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TableWrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1024px;
    padding: 20px 24px 30px;

    border: 1px solid rgb(229, 231, 235);
    border-radius: 10px;

    overflow: scroll;

    & > button {
        margin-right: auto;

        @media screen and (min-width: 768px) {
            margin-right: 0;
            margin-left: auto;
        }
    }
`;

export const Table = styled.table`
    width: 100%;
    margin-bottom: 15px;

    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 14px;

    color: rgb(17, 24, 29);

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 18px;
    }
`;
export const TableHead = styled.thead`
    border-bottom: 1px solid #d1d5db;
`;

export const TableHeading = styled.th`
    padding: 14px 12px 14px 0px;

    font-weight: 600;

    text-align: left;

    &:not(:first-child) {
        padding: 14px 12px;
    }
`;

export const TableBody = styled.tbody``;

export const Row = styled.tr``;

export const Data = styled.td`
    padding: 16px 12px 16px 0px;
    max-width: 100px;

    &:nth-child(4) {
        color: ${({ $paidHours }) =>
            $paidHours > 0 ? '#07be07' : 'red'}!important;
    }

    &:not(:first-child) {
        padding: 16px 12px;
        color: rgb(107, 114, 128);
    }
`;

export const StyledLink = styled(Link)`
    display: inline-block;

    color: rgb(49, 46, 129);
    text-decoration: none;

    transition: background-color 100ms linear;

    &:hover,
    &:focus {
        color: rgb(17, 8, 82);
        text-decoration: underline;
    }
`;

export const MonthlyProfit = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0.04em;

    color: #4343d6;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
`;
