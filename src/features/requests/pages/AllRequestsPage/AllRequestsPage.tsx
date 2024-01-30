import { useQuery } from "@apollo/client";
import { HomeHeader } from "../../../global/layout/components/HomeHeader/HomeHeader";
import { GET_ALL_REQUESTS_QUERY } from "../../../global/apollo/apolloQueries";
import { useEffect } from "react";
import { RequestInterface } from "../../interfaces/requestInterface";
import { Container } from "./AllRequestsPage.style";
import SmallCard from "../../../global/components/SmallCard/SmallCard";

const AllRequestsPage = () => {
    const { data, loading, error } = useQuery(GET_ALL_REQUESTS_QUERY);

    useEffect(() => {
        if (data) {
            console.log(data.requests);
        }
    }, [data]);

    if (loading) return <p>loaidng...</p>;
    if (error) return <p>error has accord try to reload...</p>;

    return (
        <>
            <HomeHeader />
            <Container>
                {data.requests.map((product: RequestInterface) => (
                    <SmallCard type="requests" key={product._id} product={product} />
                ))}
            </Container>
        </>
    );
};

export default AllRequestsPage;
