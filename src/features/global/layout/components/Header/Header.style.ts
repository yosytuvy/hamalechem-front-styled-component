import styled, { keyframes } from "styled-components";

export const PageHeader = styled.header`
    height: 20vh;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
        url(/headerimage.jpg) center no-repeat;
    background-size: cover;
`;

export const Brand = styled.div`
    display: flex;
    cursor: pointer;
`;

export const HeaderText = styled.h3`
    font-family: "Josefin Sans", sans-serif;
    font-size: 2.7rem;
    font-weight: 400;
    color: #deaa86;
    letter-spacing: 0.2rem;
`;

// Animation
export const anim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Banner = styled.div`
    color: #ddd;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const BannerHeading = styled.h1`
    font-family: "Josefin Sans", sans-serif;
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 0;
    animation: ${anim} 2s;
`;

export const BannerText = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    animation: ${anim} 1.5s 0.5s backwards;
`;

export const BannerButton = styled.button`
    width: 20rem;
    padding: 1.2rem 2rem;
    font-size: 2rem;
    color: #333;
    letter-spacing: 0.1rem;
    border-radius: 10rem;
    outline: none;
    background: linear-gradient(to right, gold, goldenrod);
    cursor: pointer;
    animation: ${anim} 1s 1s backwards;

    &:hover {
        background: linear-gradient(to left, gold, goldenrod);
    }

    &:active {
        transform: translateY(0.2rem);
    }
`;
