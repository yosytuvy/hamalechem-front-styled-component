import { DonationImg } from "../../pages/DonationDetailsPage/DonationDetailsPage.style";

type CardDetailsProps = {
    imageSrc?: string;
    imageAlt?: string;
};

const CardImage = ({ imageSrc = "", imageAlt = "" }: CardDetailsProps) => {
    return <DonationImg src={imageSrc} alt={imageAlt} />;
};

export default CardImage;
