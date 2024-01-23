import styled from "styled-components";

export const DonationCard = styled.div`
    margin-top: 5px;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    flex-grow: 1;
    background: #656318;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.3);
`;

export const DonationImg = styled.img`
    width: 60%;
`;

export const DonationContent = styled.div`
    color: #ddd;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
`;

export const DonationTitle = styled.h1`
    margin-top: 1rem;
    font-size: 3rem;
    font-weight: 300;
`;

export const DonationDesc = styled.h2`
    font-size: 2rem;
    color: burlywood;
    font-weight: normal;
`;

export const DonationPrice = styled.p`
    font-size: 5rem;
    font-weight: 300;
    margin: 0;
`;


