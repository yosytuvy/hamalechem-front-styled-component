import { render, screen } from "@testing-library/react";
import { Donation } from "./DonationDetailsPage";
import { MemoryRouter } from "react-router-dom";
import { data } from "../../../../data";

const TEST_URL = "/donations/65a7991572cf2c17cd7d9402";
const product = data[0];

describe("Donation", () => {
    test("renders CardImage with correct props", () => {
        render(<Donation />);
        const image = screen.getByAltText(product.name);
        expect(image).toHaveAttribute("src", product.image);
    });

    test("renders CardHeader with correct title", () => {
        render(
            <MemoryRouter initialEntries={[TEST_URL]}>
                <Donation />
            </MemoryRouter>
        );
        const title = screen.getByRole("heading", { name: "Blankets" });
        expect(title).toBeInTheDocument();
    });

    test("renders CardDetails with correct content", () => {
        render(
            <MemoryRouter initialEntries={[TEST_URL]}>
                <Donation />
            </MemoryRouter>
        );
        expect(screen.getByText(/category/i)).toBeInTheDocument();
        expect(screen.getByText(/clothing/i)).toBeInTheDocument();
    });

    test("matches snapshot", () => {
        const { asFragment } = render(
            <MemoryRouter>
                <Donation />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
