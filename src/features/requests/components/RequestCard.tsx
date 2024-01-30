import CardDetails from "../../global/components/CardDetails/CardDetails";
import CardHeader from "../../global/components/CardHeader/CardHeader";
import CardImage from "../../global/components/CardImage/CardImage";
import { RequestInterface } from "../interfaces/requestInterface";
import {
    DonationCard as Container,
    DonationContent as RequestContect,
} from  "../../donations/pages/DonationDetailsPage/DonationDetailsPage.style";

type RequestCardProps = {
    request: RequestInterface;
};

const RequestCard = ({ request }: RequestCardProps) => {
    const { category, location, publisherId, phone, details } = request;
    const flexible = request.flexible ? "yes" : "no";
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
            <CardImage imageAlt={request?.name} imageSrc={request?.image} />
            <RequestContect>
                <CardHeader title={request?.name} />
                <CardDetails content={detailsToShow} />
            </RequestContect>
        </Container>
    );
};

export default RequestCard;
