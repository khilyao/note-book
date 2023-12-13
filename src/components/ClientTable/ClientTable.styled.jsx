import styled from 'styled-components';

export const TableWrapper = styled.div`
    position: relative;

    display: flex;

    width: 100%;
    max-width: 1024px;
    padding: 60px 24px 40px;

    border: 1px solid rgb(229, 231, 235);
    border-radius: 10px;

    & > button {
        position: absolute;
        top: 20px;
        right: 20px;
    }
`;

export const Table = styled.table`
    width: 100%;

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

    &:not(:first-child) {
        padding: 16px 12px;
        color: rgb(107, 114, 128);
    }
`;
