import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    justify-content: center;

    padding-top: 100px;
    padding-bottom: 100px;
`;

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;

    @media screen and (min-width: 1200px) {
        width: 1200px;
    }
`;
