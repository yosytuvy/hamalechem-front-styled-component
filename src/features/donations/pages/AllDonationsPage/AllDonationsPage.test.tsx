import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import AllDonationsPage from "./AllDonationsPage";
import { data } from "../../../../data";

describe("AllDonationsPage", () => {
    it("renders without crashing", () => {
        render(<AllDonationsPage />);
    });

    it("renders the correct number of cards", () => {
        render(<AllDonationsPage products={data} />);
        expect(screen.getAllByRole("article").length).toBe(data.length);
    });

    it("renders the correct image in each card", () => {
        render(<AllDonationsPage products={data} />);
        data.forEach((product) => {
            expect(screen.getByAltText(product.name)).toHaveAttribute(
                "src",
                product.image
            );
        });
    });

    it("renders the correct title in each card", () => {
        render(<AllDonationsPage products={data} />);
        data.forEach((product) => {
            expect(screen.getByText(product.name)).toBeInTheDocument();
        });
    });

    it("renders the correct details in each card", () => {
        render(<AllDonationsPage products={data} />);
        data.forEach((product) => {
            expect(screen.getByText(product.details)).toBeInTheDocument();
        });
    });
});
