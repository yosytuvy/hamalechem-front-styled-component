import styled from "styled-components";

export const FooterWrap = styled.div`
    margin-top: 5px;
    /* position:absolute; */
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #1c1c1c;
    padding: 4rem;
`;

export const Heading = styled.h3`
    font-size: 2.5rem;
    font-weight: 300;
    color: goldenrod;
    margin: 1rem 0 3rem 0;
`;

export const List = styled.div`
    width: 70rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
`;

export const ListItem = styled.div`
    margin-bottom: 2rem;
`;

export const Link = styled.a`
    font-size: 1.4rem;
    text-decoration: none;
    color: #bbb;
`;

export const ContactText = styled.p`
    font-size: 1.5rem;
    color: #bbb;
    margin-bottom: 4rem;
`;

export const Form = styled.form`
    display: flex;
`;

export const Input = styled.input`
    width: 25rem;
    padding: 1rem;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.8rem;
    color: #444;
    outline: none;
`;

export const Button = styled.button`
    padding: 1rem;
    background-color: #b85d1c;
    color: #ddd;
    border: none;
`;

// Gallery and image components

export const Creator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #111;
    padding: 0 4rem;
`;

export const Copyright = styled.p`
    font-size: 1.3rem;
    color: #aaa;
`;

export const RightText = styled.p`
    font-size: 1.4rem;
    color: #bbb;

    i {
        font-size: 2rem;
        margin: 0.5rem;
        color: tomato;
    }

    span {
        color: gold;
    }
`;
