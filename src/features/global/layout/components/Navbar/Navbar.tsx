import { Link } from "react-router-dom";
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
    Navigation,
    NavigationHeading,
    NavigationSearch,
    NavigationSearchInput,
    NavigationSearchButton,
    NavigationList,
    NavigationItem,
    NavigationLink,
    Copyright,
    RighButton,
} from "./Navbar.style";
import ROUTES from "../../../routers/RouterModel";

export const Navbar = () => {
    const token = localStorage.getItem("HAMALECHEM_TOKEN");

    return (
        <NavBar>
            <Checkbox id="click" />

            <Sidebar>
                <MenuIcon htmlFor="click">
                    <Line1 className="Line1" />
                    <Line2 className="Line2" />
                    <Line3 className="Line3" />
                </MenuIcon>

                <SocialIconsList>
                    <SocialLink>
                        <Link
                            to={ROUTES.allDonations}
                            style={{ color: "#777", textDecoration: "none" }}>
                            Hamalechem
                        </Link>
                    </SocialLink>
                </SocialIconsList>

                {token ? (
                    <RighButton>My products</RighButton>
                ) : (
                    <RighButton>Sign Up</RighButton>
                )}
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
                        <NavigationLink>Home</NavigationLink>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLink href="/donations">
                            Donations
                        </NavigationLink>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLink href="/requests">
                            Requests
                        </NavigationLink>
                    </NavigationItem>
                </NavigationList>

                <Copyright>Copyright 2022</Copyright>
            </Navigation>
        </NavBar>
    );
};
