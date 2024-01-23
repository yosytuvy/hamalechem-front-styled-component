import {
    NavBar,
    Checkbox,
    Sidebar,
    MenuIcon,
    Line1,
    Line2,
    Line3,
    SocialIconsList,
    SocialLink,
    Year,
    Navigation,
    NavigationHeading,
    NavigationSearch,
    NavigationSearchInput,
    NavigationSearchButton,
    NavigationList,
    NavigationItem,
    NavigationLink,
    Copyright,
} from "./Navbar.style";

export const Navbar = () => {
    return (
        <>
            <NavBar>
                <Checkbox id="click"/>

                <Sidebar>
                    <MenuIcon htmlFor="click">
                        <Line1 className="Line1"/>
                        <Line2 className="Line2"/>
                        <Line3 className="Line3"/>
                    </MenuIcon>

                    <SocialIconsList>
                        <SocialLink href="#">
                            <h3>Hemalechem</h3>
                        </SocialLink>
                    </SocialIconsList>

                    <Year>2024</Year>
                </Sidebar>

                <Navigation>
                    <NavigationHeading>Hamalechem</NavigationHeading>

                    <NavigationSearch>
                        <NavigationSearchInput placeholder="Search..." />
                        <NavigationSearchButton>
                            <i className="fas fa-search"></i>
                        </NavigationSearchButton>
                    </NavigationSearch>

                    <NavigationList>
                        <NavigationItem>
                            <NavigationLink href="#">Home</NavigationLink>
                        </NavigationItem>
                        <NavigationItem>
                            <NavigationLink href="#">Donations</NavigationLink>
                        </NavigationItem>
                        <NavigationItem>
                            <NavigationLink href="#">Requests</NavigationLink>
                        </NavigationItem>
                    </NavigationList>

                    <Copyright>Copyright 2022</Copyright>
                </Navigation>
            </NavBar>
        </>
    );
}
