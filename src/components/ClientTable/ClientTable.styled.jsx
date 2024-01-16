import styled from 'styled-components';

export const TableWrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1024px;
    padding: 60px 24px;

    border: 1px solid rgb(229, 231, 235);
    border-radius: 10px;

    & > button {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    @media screen and (min-width: 768px) {
        padding-bottom: 40px;
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

    &:nth-child(3) {
        display: none;
    }

    &:not(:first-child) {
        padding: 14px 12px;
    }

    @media screen and (min-width: 410px) {
        &:nth-child(3) {
            display: inherit;
        }
    }
`;

export const TableBody = styled.tbody``;

export const Row = styled.tr``;

export const Data = styled.td`
    padding: 16px 12px 16px 0px;
    max-width: 100px;

    &:nth-child(3) {
        display: none;
    }
    &[credit] {
        color: ${({ credit }) => (credit > 0 ? '#07be07' : 'red')}!important;
    }

    &:not(:first-child) {
        padding: 16px 12px;
        color: rgb(107, 114, 128);
    }

    @media screen and (min-width: 410px) {
        &:nth-child(3) {
            display: table-cell;
        }
    }
`;

export const MonthlyProfit = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
`;
