import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_REQUEST_BY_ID_QUERY } from "../../../global/apollo/apolloQueries";
import RequestCard from "../../components/RequestCard";



export const Request = () => {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_REQUEST_BY_ID_QUERY, {
        variables: { id: id },
    });

    if (error) return <p>error has accord try to reload...</p>;
    if (loading) return <p>loading...</p>;

    return (
        <RequestCard request={data.request}/>
    );
};
