import { DonationInterface } from "../interfaces/donationInterface";
import {
    DonationCard as Container,
    DonationContent,
} from "../pages/DonationDetailsPage/DonationDetailsPage.style";
import CardDetails from "../../global/components/CardDetails/CardDetails";
import CardHeader from "../../global/components/CardHeader/CardHeader";
import CardImage from "../../global/components/CardImage/CardImage";

type DonaitonCardProps = {
    donation: DonationInterface;
};

const DonationCard = ({ donation }: DonaitonCardProps) => {
    const { category, location, publisherId, phone, details } = donation;
    const flexible = donation.flexible ? "yes" : "no";
    const detailsToShow = {
        category,
        location,
        publisherId,
        phone,
        details,
        flexible,
    };

    return (
        <Container>
            <CardImage imageAlt={donation?.name} imageSrc={donation?.image} />
            <DonationContent>
                <CardHeader title={donation?.name} />
                <CardDetails content={detailsToShow} />
            </DonationContent>
        </Container>
    );
};

export default DonationCard;
