import { useNavigate } from "react-router-dom";
import { DonationInterface } from "../../../donations/interfaces/donationInterface";
import {
    Card,
    CardDetails,
    CardImage,
    CardTitle,
} from "../../../donations/pages/AllDonationsPage/AllDonationsPage.style";
import { RequestInterface } from "../../../requests/interfaces/requestInterface";

type SmallCardProps = {
    product?: DonationInterface | RequestInterface;
    type: "requests" | "donations";
};

const SmallCard = ({ product, type }: SmallCardProps) => {
    const navigate = useNavigate();
    if (!product) return null;

    const handleClick = (id: string) => {
        console.log(id);
        navigate(`/${type}/${id}`);
    };

    return (
        <Card role="article" onClick={() => handleClick(product._id)}>
            <CardImage src={product.image} alt={product.name} />
            <CardTitle>{product.name}</CardTitle>
            <CardDetails>{product.details}</CardDetails>
        </Card>
    );
};

export default SmallCard;
