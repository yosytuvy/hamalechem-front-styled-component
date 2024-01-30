import styled from "styled-components";

export const NavBar = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
    display: none;
`;

export const Sidebar = styled.div`
    height: 100%;
    background: #eee;
    display: flex;
    position: relative;
    top: 0;
    width: 100%;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    ${Checkbox}:checked ~ & {
        .Line1 {
            transform: rotate(-405deg) translate(-5px, 6px);
            width: 2.5rem;
        }

        .Line2 {
            opacity: 0;
        }

        .Line3 {
            transform: rotate(405deg) translate(-5px, -6px);
            width: 2.5rem;
        }
    }
`;

export const MenuIcon = styled.label`
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1;
`;

export const Line = styled.div`
    height: 0.2rem;
    width: 2.5rem;
    background: #222;
    margin-bottom: 0.6rem;
`;

export const Line1 = styled(Line)`
    width: 1.8rem;
    transition: all 0.4s;
`;

export const Line2 = styled(Line)``;

export const Line3 = styled(Line)`
    width: 1.8rem;
    transition: all 0.4s;
`;

export const SocialIconsList = styled.ul`
    list-style: none;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    width: 100%;
`;

export const SocialLink = styled.h3`
    font-size: 2rem;
    color: #777;
    transition: color 0.3s;

    &:hover {
        color: #deaa86;
    }
`;

export const RighButton = styled.div`
    position: absolute;
    right: 1rem;

    font-size: 2rem;
    color: #163D4E;

    &:hover {
        cursor: pointer;
    }
`;

export const Navigation = styled.div`
    position: fixed;
    left: -100%;
    width: 40%;
    height: 100%;
    background: linear-gradient(
            to top,
            rgba(34, 32, 41, 1),
            rgba(34, 32, 41, 0.8)
        ),
        url("/דגל-ישראל.jpg") center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    transition: left 0.8s cubic-bezier(1, 0, 0, 1);

    ${Checkbox}:checked ~ & {
        left: 0;
    }
`;

export const NavigationHeading = styled.h1`
    font-family: "Josefin Sans", sans-serif;
    font-size: 3.5rem;
    font-weight: 300;
    letter-spacing: 0.2rem;
    color: #deaa86;
    text-align: center;
`;

export const NavigationSearch = styled.div`
    position: relative;
`;

export const NavigationSearchInput = styled.input`
    width: 80%;
    padding: 1rem 2rem;
    background-color: rgba(0, 0, 0, 0.3);
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.6rem;
    color: #deaa86;
    letter-spacing: 0.1rem;
    border: 0.1rem solid #555;
    border-radius: 10rem;

    &:focus {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const NavigationSearchButton = styled.button`
    border: none;
    background: none;
    color: #deaa86;
    font-size: 1.7rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

export const NavigationList = styled.ul`
    list-style: none;
    padding: 0;
    height: 28rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const NavigationItem = styled.li`
    position: relative;
`;

export const NavigationLink = styled.a`
    color: #fff;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.5s;

    &::before,
    &::after {
        content: "";
        width: 0;
        height: 0.1rem;
        background: #deaa86;
        position: absolute;
        top: 1rem;
        transition: width 0.5s cubic-bezier(1, 0, 0, 1);
    }

    &::before {
        left: -4rem;
    }

    &::after {
        right: -4rem;
    }

    &:hover {
        color: #deaa86;

        &::before,
        &::after {
            width: 3rem;
        }
    }
`;

export const Copyright = styled.p`
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
`;
