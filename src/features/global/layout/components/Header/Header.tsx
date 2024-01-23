import {
    PageHeader,
    Banner,
    BannerButton,
    BannerHeading,
    BannerText,
} from "./Header.style";

export const Header = () => {
    return (
        <PageHeader>
            <Banner>
                <BannerHeading>Welcome to our website</BannerHeading>
                <BannerText>Help our soliders</BannerText>
                <div>
                    <BannerButton>Donations</BannerButton>
                    <BannerButton>Requests</BannerButton>
                </div>
            </Banner>
        </PageHeader>
    );
};
