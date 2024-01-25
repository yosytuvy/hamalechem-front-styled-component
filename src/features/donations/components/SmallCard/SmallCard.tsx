import { useNavigate } from "react-router-dom";
import { DonationInterface } from "../../interfaces/donationInterface";
import {
    Card,
    CardDetails,
    CardImage,
    CardTitle,
} from "../../pages/AllDonationsPage/AllDonationsPage.style";

type SmallCardProps = {
    product?: DonationInterface;
};

const SmallCard = ({ product }: SmallCardProps) => {
    const navigate = useNavigate();
    if (!product) return null;

    const handleClick = (id: string) => {
        console.log(id);
        navigate(`/donations/${id}`);
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
