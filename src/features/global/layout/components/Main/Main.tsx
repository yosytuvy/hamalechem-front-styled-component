import { FC, ReactNode } from "react";

type MainProps = {
    children:ReactNode;
}

const Main:FC<MainProps> = ({children}) => {
    return <>
    {children}
    </>
}

export default Main;