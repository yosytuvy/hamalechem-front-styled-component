import { Route, Routes } from "react-router-dom";
import ROUTES from "./RouterModel";
import { Donation } from "../../donations/pages/DonationDetailsPage/DonationDetailsPage";
import AllDonationsPage from "../../donations/pages/AllDonationsPage/AllDonationsPage";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.donationDetail} element={<Donation />} />
            <Route path={ROUTES.allDonations} element={<AllDonationsPage />} />
        </Routes>
    );
};

export default Router;
