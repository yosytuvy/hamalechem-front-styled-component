import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DONATION_BY_ID_QUERY } from "../../../global/apollo/apolloQueries";
import DonationCard from "../../components/DonationCard";

export const Donation = () => {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_DONATION_BY_ID_QUERY, {
        variables: { id: id },
    });

    if (error) return <p>error has accord try to reload...</p>;
    if (loading) return <p>loading...</p>;

    return <DonationCard donation={data.donation} />;
};
