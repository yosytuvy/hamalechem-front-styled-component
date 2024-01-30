import { useNavigate } from "react-router-dom";
import {
    PageHeader,
    Banner,
    BannerButton,
    BannerHeading,
    BannerText,
} from "./HomeHeader.style";

export const HomeHeader = () => {
    const navigate = useNavigate();

    const navigateToDonationsPage = () => {
        navigate("/donations");
    };

    const navigateToRequestsPage = () => {
        navigate("/requests");
    };

    return (
        <PageHeader>
            <Banner>
                <BannerHeading>Welcome to our website</BannerHeading>
                <BannerText>Help our soliders</BannerText>
                <div>
                    <BannerButton onClick={navigateToDonationsPage}>
                        Donations
                    </BannerButton>
                    <BannerButton onClick={navigateToRequestsPage}>
                        Requests
                    </BannerButton>
                </div>
            </Banner>
        </PageHeader>
    );
};
