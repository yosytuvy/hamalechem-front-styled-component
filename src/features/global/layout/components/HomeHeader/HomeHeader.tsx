import {
    PageHeader,
    Banner,
    BannerButton,
    BannerHeading,
    BannerText,
} from "./HomeHeader.style";

export const HomeHeader = () => {
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
