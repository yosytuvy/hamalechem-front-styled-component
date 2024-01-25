import styled from "styled-components";

export const Container = styled.div`
    background-color: #DDDDDD;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(25% - 2rem);
    margin: 1rem;
    /* border: 1px solid gray; */
    border-radius: 8px;
    background-color: #ffffff;
    transition: transform 0.2s ease;
    text-align: center;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    @media (max-width: 1000px) {
        width: calc(33.33% - 2rem);
    }

    @media (max-width: 720px) {
        width: calc(50% - 2rem);
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: fill;
`;

export const CardTitle = styled.h3`
    margin-top: 1rem;
    font-size: 1.5rem;
`;

export const CardDetails = styled.p`
    font-size: 1.5rem;
    margin: 0.5rem 0 1rem;
`;
