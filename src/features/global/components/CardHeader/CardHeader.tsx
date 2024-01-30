import { DonationTitle } from "../../../donations/pages/DonationDetailsPage/DonationDetailsPage.style";

type CardHeaderProps = {
    title?: string;
};

const CardHeader = ({ title = "" }: CardHeaderProps) => {
    return <DonationTitle>{title}</DonationTitle>;
};

export default CardHeader;
