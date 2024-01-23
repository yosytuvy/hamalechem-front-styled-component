import { DonationDesc } from "../pages/DonationDetailsPage/DonationDetailsPage.style";

type CardDetailsProps = {
    content?: Record<string, string>;
};

const CardDetails = ({ content = {} }: CardDetailsProps) => {
    return (
        <div>
            {Object.keys(content).map((key, index) => {
                return (
                    <DonationDesc key={index}>
                        <b>{key} : </b>
                        {content[key]}
                    </DonationDesc>
                );
            })}
        </div>
    );
};

export default CardDetails;
