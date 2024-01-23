import { DonationCard, DonationContent } from "./DonationDetailsPage.style";
import CardImage from "../../components/CardImage";
import CardHeader from "../../components/CardHeader";
import CardDetails from "../../components/CardDetails";

const fakeData = {
    category: "clothing",
    location: "haifa",
    publisher: "someone",
    details: "Gently used blankets in good condition",
    Flexible: "yes",
};

export const Donation = () => {
    return (
        <DonationCard>
            <CardImage
                imageAlt="cotton blankets"
                imageSrc="/Authenticity50_Cotton_Blankets.webp"
            />
            <DonationContent>
                <CardHeader title="Blankets" />
                <CardDetails content={fakeData} />
            </DonationContent>
        </DonationCard>
    );
};
