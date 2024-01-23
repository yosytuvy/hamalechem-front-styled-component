import {
    FooterWrap,
    Main,
    Heading,
    List,
    ListItem,
    Link,
    Creator,
    Copyright,
    RightText,
} from "./Footer.style";

export const Footer = () => {
    return (
        <FooterWrap>
            <Main>
                <div>
                    <Heading>Contact</Heading>
                    <List>
                        <ListItem>
                            <Link href="#">support@grandhotel.com</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#">Some Street in Petach Tikva, Israel</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#">+972-541234567</Link>
                        </ListItem>
                    </List>
                    <Heading>Explore</Heading>
                    <List>
                        <ListItem>
                            <Link href="#">Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#">About Us</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#">Donation</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#">Requests</Link>
                        </ListItem>
                    </List>
                </div>
            </Main>

            <Creator>
                <Copyright>Copyright © 2024. Hamalechem. All Rights Reserved</Copyright>

                <RightText>
                    Made With <i className="fas fa-heart" /> by{" "}
                    <span>Yosy Tuvy</span>
                </RightText>
            </Creator>
        </FooterWrap>
    );
};
