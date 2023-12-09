import styled from 'styled-components';

export const TableWrapper = styled.div`
    display: inline-block;

    padding: 40px 24px;

    border: 1px solid rgb(229, 231, 235);
    border-radius: 10px;
`;

export const Table = styled.table`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;

    color: rgb(17, 24, 29);
`;
export const TableHead = styled.thead`
    border-bottom: 1px solid #d1d5db;
`;

export const TableHeading = styled.th`
    padding: 14px 12px 14px 0px;

    font-weight: 600;

    &:first-child {
        text-align: left;
    }

    &:not(:first-child) {
        padding: 14px 12px;
    }
`;

export const TableBody = styled.tbody``;

export const Row = styled.tr``;

export const Data = styled.td`
    padding: 16px 12px 16px 0px;

    &:not(:first-child) {
        padding: 16px 12px;
        color: rgb(107, 114, 128);
    }
`;
