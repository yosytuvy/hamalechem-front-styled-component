import { Route, Routes } from "react-router-dom";
import ROUTES from "./RouterModel";
import { Donation } from "../../donations/pages/DonationDetailsPage/DonationDetailsPage";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.donationDetail} element={<Donation />} />
        </Routes>
    );
};

export default Router;
