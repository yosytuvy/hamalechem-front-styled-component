import { useQuery } from "@apollo/client";
import { HomeHeader } from "../../../global/layout/components/HomeHeader/HomeHeader";
import SmallCard from "../../components/SmallCard/SmallCard";
import { Container } from "./AllDonationsPage.style";
import { GET_ALL_DONATIONS_QUERY } from "../../../global/apollo/apolloQueries";
import { useEffect } from "react";
import { DonationInterface } from "../../interfaces/donationInterface";

const AllDonationsPage = () => {
    const { data, loading, error } = useQuery(GET_ALL_DONATIONS_QUERY);

    useEffect(() => {
        if (data) {
            console.log(data.donations);
        }
    }, [data]);

    if (loading) return <p>loaidng...</p>;
    if (error) return <p>error has accord try to reload...</p>;

    return (
        <>
            <HomeHeader />
            <Container>
                {data.donations.map((product: DonationInterface) => (
                    <SmallCard key={product._id} product={product} />
                ))}
            </Container>
        </>
    );
};

export default AllDonationsPage;
