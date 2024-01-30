import styled from "styled-components";

export const Form = styled.form`
    width: 40%;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

export const FormTitle = styled.h2`
    font-size: x-large;
    text-align: center;
    margin-bottom: 15px;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    font-size: 18px;
    line-height: 3;
    color: #555;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 45px 0px;
`;

export const RadioGroup = styled.div`
    display: flex;
    margin-bottom: 15px;
    font-size: large;
    label {
        margin-right: 40px;
    }
`;

export const RadioInput = styled.input`
    transform: scale(1.5);
    margin-right: 10px;
    &:hover {
        cursor: pointer;
    }
`;

export const SubmitButton = styled.button`
    height: 50px;
    display: block;
    width: 100%;
    padding: 10px 15px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    transition: all 0.2s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;
