import { gql } from "@apollo/client";

export const GET_ALL_DONATIONS_QUERY = gql`
    query Donations {
        donations {
            _id
            name
            category
            image
            location
            publisherId
            phone
            details
            flexible
        }
    }
`;

export const GET_DONATION_BY_ID_QUERY = gql`
    query Donation($id: ID!) {
        donation(_id: $id) {
            _id
            name
            category
            image
            location
            publisherId
            phone
            details
            flexible
        }
    }
`;

export const GET_ALL_REQUESTS_QUERY = gql`
    query Requests {
        requests {
            _id
            name
            category
            image
            location
            publisherId
            phone
            details
            flexible
        }
    }
`;

export const GET_REQUEST_BY_ID_QUERY = gql`
    query Request($id: ID!) {
        request(_id: $id) {
            _id
            name
            category
            image
            location
            publisherId
            phone
            details
            flexible
        }
    }
`;
