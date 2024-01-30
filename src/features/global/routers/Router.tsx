import { Route, Routes } from "react-router-dom";
import ROUTES from "./RouterModel";
import { Donation } from "../../donations/pages/DonationDetailsPage/DonationDetailsPage";
import AllDonationsPage from "../../donations/pages/AllDonationsPage/AllDonationsPage";
import AllRequestsPage from "../../requests/pages/AllRequestsPage/AllRequestsPage";
import { Request } from "../../requests/pages/RequestDetailsPage/RequestDetailsPage";
import SignIn from "../../users/pages/signUp/SignIn";
import Login from "../../users/pages/login/Login";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.signIn} element={<SignIn />} />
            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.allDonations} element={<AllDonationsPage />} />
            <Route path={ROUTES.donationDetail} element={<Donation />} />
            <Route path={ROUTES.allRequests} element={<AllRequestsPage />} />
            <Route path={ROUTES.requestDetail} element={<Request />} />
        </Routes>
    );
};

export default Router;
