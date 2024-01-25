import { FC, ReactNode } from "react";
import Main from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";

type LayoutProps = {
    children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        // div
        <>
            <Navbar />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default Layout;
